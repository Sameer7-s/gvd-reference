/**
 * Auth.js (NextAuth v5) config — public user accounts.
 *
 * Two ways in: Google OAuth and email + password (Credentials). Both resolve
 * to a document in the shared `users` collection, so a person is one user
 * regardless of how they signed in.
 *
 * We use JWT sessions (Credentials requires it) and skip the DB adapter — the
 * `users` collection is written directly here and in the signup route, which
 * avoids the adapter's mongodb@6 peer-dep conflict with our mongodb@7.
 *
 * This is entirely separate from the shared-password admin gate in
 * `src/lib/auth.ts` / middleware — that still guards /admin on its own cookie.
 *
 * Env: AUTH_SECRET (required), AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET.
 */
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  // Needed behind a proxy / on Netlify (non-Vercel hosts).
  trustHost: true,
  pages: { signIn: "/login" },
  providers: [
    // Only enable Google when its creds are present — keeps the "Continue with
    // Google" button hidden (and /api/auth/providers honest) until you add
    // AUTH_GOOGLE_ID/SECRET. Email+password works with or without it.
    // allowDangerousEmailAccountLinking: if someone signed up with a password
    // and later uses Google with the same email, link rather than error.
    ...(process.env.AUTH_GOOGLE_ID
      ? [Google({ allowDangerousEmailAccountLinking: true })]
      : []),
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (creds) => {
        const email = String(creds?.email ?? "").toLowerCase().trim();
        const password = String(creds?.password ?? "");
        if (!email || !password) return null;

        const db = await getDb();
        const user = await db.collection("users").findOne({ email });
        if (!user?.passwordHash) return null; // no such user, or a Google-only account

        const ok = await bcrypt.compare(password, user.passwordHash as string);
        if (!ok) return null;

        return {
          id: String(user._id),
          email: user.email as string,
          name: (user.name as string) ?? null,
          image: (user.image as string) ?? null,
        };
      },
    }),
  ],
  callbacks: {
    // Persist / refresh Google users into the shared `users` collection.
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        const email = user.email.toLowerCase();
        const db = await getDb();
        await db.collection("users").updateOne(
          { email },
          {
            $setOnInsert: { email, createdAt: new Date() },
            $set: { name: user.name ?? null, image: user.image ?? null, provider: "google" },
          },
          { upsert: true }
        );
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user?.id) token.uid = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token.uid && session.user) session.user.id = String(token.uid);
      return session;
    },
  },
});
