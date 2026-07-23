"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  HandHeart,
  ExternalLink,
  ChevronRight,
  LogOut,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/events", label: "Events", icon: CalendarDays },
  { href: "/admin/sevas", label: "Sevas", icon: HandHeart },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // The login page renders without the admin chrome (it's the one public /admin route).
  if (pathname === "/admin/login") return <>{children}</>;

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen" style={{ background: "#0B1220", color: "#E8EDF5" }}>
      {/* Top bar */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 h-[60px] border-b"
        style={{
          background: "rgba(11,18,32,0.95)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Mini lotus mark */}
          <svg viewBox="0 0 40 40" width={28} height={28} fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="adm-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5BA4E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" stroke="url(#adm-grad)" strokeWidth="1.2" />
            <path d="M20 7 L22 12 L18 12 Z" fill="url(#adm-grad)" />
            <rect x="15" y="12" width="10" height="14" rx="1" fill="url(#adm-grad)" opacity="0.9" />
            <rect x="13" y="26" width="14" height="2.5" rx="0.5" fill="url(#adm-grad)" />
            <rect x="11" y="28.5" width="18" height="2.5" rx="0.5" fill="url(#adm-grad)" />
            <path
              d="M20 35 C16 35 14 32 13 30 C15.5 31 17.5 30 20 27.5 C22.5 30 24.5 31 27 30 C26 32 24 35 20 35 Z"
              fill="url(#adm-grad)"
              opacity="0.85"
            />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-[0.88rem] tracking-wide">HKM Admin</span>
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "#4A9EE0" }}>
              Visakhapatnam
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            View site <ExternalLink size={12} />
          </Link>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Logout <LogOut size={12} />
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-60px)]">
        {/* Sidebar */}
        <aside
          className="w-56 shrink-0 border-r sticky top-[60px] h-[calc(100vh-60px)] flex flex-col pt-6 pb-8 px-3"
          style={{
            background: "rgba(255,255,255,0.015)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <nav className="flex flex-col gap-1">
            {NAV.map(({ href, label, icon: Icon, exact }) => {
              const isActive = exact ? pathname === href : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: "rgba(59,130,246,0.14)",
                          color: "#60A5FA",
                          border: "1px solid rgba(59,130,246,0.22)",
                        }
                      : {
                          color: "rgba(255,255,255,0.50)",
                          border: "1px solid transparent",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.50)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon size={16} />
                    {label}
                  </span>
                  {isActive && <ChevronRight size={14} />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto px-3">
            <div
              className="rounded-xl p-3 text-[0.7rem] leading-relaxed"
              style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)" }}
            >
              Connected to{" "}
              <span style={{ color: "#4ADE80" }}>● MongoDB</span>
              <br />
              <span className="font-mono">gvd_reference</span>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 p-8">{children}</main>
      </div>
    </div>
  );
}
