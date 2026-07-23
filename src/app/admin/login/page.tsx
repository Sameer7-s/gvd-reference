"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Login failed");
      }
      const next = params.get("next");
      router.replace(next && next.startsWith("/admin") ? next : "/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#0B1220", color: "#E8EDF5" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl p-8"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2.5 mb-6">
          <div
            className="h-9 w-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(59,130,246,0.14)", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            <Lock size={16} style={{ color: "#60A5FA" }} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-sm">HKM Admin</span>
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "#4A9EE0" }}>
              Sign in
            </span>
          </div>
        </div>

        <label htmlFor="password" className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
          Admin password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
        />

        {error && (
          <p className="mt-3 text-sm" style={{ color: "#FCA5A5" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-50"
          style={{ background: "#2563EB" }}
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Lock size={15} />}
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ background: "#0B1220" }} />}>
      <LoginForm />
    </Suspense>
  );
}
