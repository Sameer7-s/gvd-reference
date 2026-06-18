"use client";

import { useEffect, useState } from "react";
import { CalendarDays, HandHeart, IndianRupee, TrendingUp, Activity, RefreshCw } from "lucide-react";

interface Stats {
  eventsCount: number;
  sevasCount: number;
  totalDonations: number;
  donationsCount: number;
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  sub,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  sub?: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
          {label}
        </span>
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold tracking-tight text-white">{value}</div>
        {sub && (
          <div className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/stats");
      if (!res.ok) throw new Error("Failed to load stats");
      const data = await res.json();
      setStats(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-2xl font-bold tracking-tight text-white mb-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dashboard
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
            Overview of your temple website data
          </p>
        </div>
        <button
          onClick={fetchStats}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.60)",
          }}
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {error && (
        <div
          className="mb-6 rounded-xl px-5 py-4 text-sm"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
            color: "#FCA5A5",
          }}
        >
          ⚠ {error} — Make sure MongoDB is running and MONGODB_URI is set in .env.local
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          label="Total Events"
          value={loading ? "—" : (stats?.eventsCount ?? 0)}
          icon={CalendarDays}
          color="#60A5FA"
          sub="In database"
        />
        <StatCard
          label="Total Sevas"
          value={loading ? "—" : (stats?.sevasCount ?? 0)}
          icon={HandHeart}
          color="#A78BFA"
          sub="Configured"
        />
        <StatCard
          label="Donations Received"
          value={loading ? "—" : (stats?.donationsCount ?? 0)}
          icon={TrendingUp}
          color="#34D399"
          sub="All time"
        />
        <StatCard
          label="Total Amount"
          value={
            loading
              ? "—"
              : `₹${((stats?.totalDonations ?? 0) / 100).toLocaleString("en-IN")}`
          }
          icon={IndianRupee}
          color="#FCD34D"
          sub="Collected"
        />
      </div>

      {/* Quick links */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Activity size={16} style={{ color: "#60A5FA" }} />
          <h2 className="text-sm font-semibold text-white uppercase tracking-widest">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/admin/events", label: "Manage Events", desc: "Add, edit and delete temple events", color: "#60A5FA", icon: CalendarDays },
            { href: "/admin/sevas", label: "Manage Sevas", desc: "Configure seva offerings and amounts", color: "#A78BFA", icon: HandHeart },
          ].map(({ href, label, desc, color, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-start gap-4 rounded-xl px-4 py-4 transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${color}30`;
                (e.currentTarget as HTMLElement).style.background = `${color}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center mt-0.5"
                style={{ background: `${color}14`, border: `1px solid ${color}25` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <div className="font-semibold text-sm text-white mb-1">{label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>{desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
