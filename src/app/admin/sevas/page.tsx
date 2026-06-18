"use client";

import { useEffect, useState, useRef } from "react";
import { Plus, Pencil, Trash2, X, Check, HandHeart, Loader2, Star } from "lucide-react";

interface SevaDoc {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  amounts: number[];
  highlight: boolean;
}

const EMPTY: Omit<SevaDoc, "_id"> = {
  title: "",
  slug: "",
  tagline: "",
  description: "",
  icon: "heart",
  amounts: [501, 1001, 2501, 5001],
  highlight: false,
};

function inputCls(hasError?: boolean) {
  return `w-full rounded-xl px-3 py-2.5 text-sm outline-none transition-all ${
    hasError
      ? "border border-red-500/60 bg-red-500/05 text-white"
      : "border border-white/10 bg-white/05 text-white focus:border-purple-500/60 focus:bg-white/08"
  }`;
}

export default function SevasPage() {
  const [sevas, setSevas] = useState<SevaDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [amountsStr, setAmountsStr] = useState("501, 1001, 2501, 5001");
  const [editId, setEditId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const fetchSevas = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/sevas");
      const data = await res.json();
      setSevas(Array.isArray(data) ? data : []);
    } catch {
      setError("Could not load sevas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSevas(); }, []);

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const openAdd = () => {
    setForm(EMPTY);
    setAmountsStr("501, 1001, 2501, 5001");
    setEditId(null);
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const openEdit = (s: SevaDoc) => {
    setForm({ title: s.title, slug: s.slug, tagline: s.tagline, description: s.description, icon: s.icon, amounts: s.amounts, highlight: s.highlight });
    setAmountsStr(s.amounts.join(", "));
    setEditId(s._id);
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.slug.trim()) {
      setError("Title and slug are required");
      return;
    }
    const amounts = amountsStr.split(",").map(v => parseInt(v.trim(), 10)).filter(n => !isNaN(n));
    setSaving(true);
    setError(null);
    try {
      const url = editId ? `/api/admin/sevas/${editId}` : "/api/admin/sevas";
      const method = editId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, amounts }),
      });
      if (!res.ok) throw new Error("Failed to save");
      setShowForm(false);
      setEditId(null);
      fetchSevas();
    } catch {
      setError("Failed to save seva");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this seva?")) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/sevas/${id}`, { method: "DELETE" });
      fetchSevas();
    } catch {
      setError("Failed to delete seva");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
            Sevas
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
            {sevas.length} seva{sevas.length !== 1 ? "s" : ""} in database
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
          style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)", boxShadow: "0 4px 16px rgba(124,58,237,0.3)" }}
        >
          <Plus size={16} /> Add Seva
        </button>
      </div>

      {error && (
        <div className="mb-5 rounded-xl px-4 py-3 text-sm flex items-center justify-between"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#FCA5A5" }}
        >
          {error}
          <button onClick={() => setError(null)}><X size={14} /></button>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div ref={formRef} className="mb-6 rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-white text-base">{editId ? "Edit Seva" : "New Seva"}</h2>
            <button onClick={() => setShowForm(false)} style={{ color: "rgba(255,255,255,0.40)" }}><X size={18} /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Title *</label>
              <input
                className={inputCls(!form.title)}
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value, slug: f.slug || autoSlug(e.target.value) }))}
                placeholder="Seva title"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Slug * (URL key)</label>
              <input
                className={inputCls(!form.slug)}
                value={form.slug}
                onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                placeholder="seva-slug"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Tagline</label>
              <input className={inputCls()} value={form.tagline} onChange={e => setForm(f => ({ ...f, tagline: e.target.value }))} placeholder="Short tagline" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Amounts (comma-separated ₹)</label>
              <input className={inputCls()} value={amountsStr} onChange={e => setAmountsStr(e.target.value)} placeholder="501, 1001, 2501, 5001" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Description</label>
              <textarea className={inputCls()} rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Describe the seva..." />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <div
                  className="h-5 w-5 rounded-md flex items-center justify-center transition-all cursor-pointer"
                  style={form.highlight
                    ? { background: "#7C3AED", border: "1px solid #7C3AED" }
                    : { background: "transparent", border: "1px solid rgba(255,255,255,0.20)" }
                  }
                  onClick={() => setForm(f => ({ ...f, highlight: !f.highlight }))}
                >
                  {form.highlight && <Check size={12} color="white" />}
                </div>
                <span className="text-sm text-white">Mark as "Most Needed"</span>
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
              {editId ? "Save Changes" : "Create Seva"}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={28} className="animate-spin" style={{ color: "rgba(255,255,255,0.30)" }} />
        </div>
      ) : sevas.length === 0 ? (
        <div className="text-center py-20 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.10)" }}
        >
          <HandHeart size={40} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.18)" }} />
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>No sevas yet. Add your first seva.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {sevas.map(s => (
            <div key={s._id} className="flex items-start justify-between gap-4 rounded-2xl px-5 py-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(124,58,237,0.14)", border: "1px solid rgba(124,58,237,0.25)" }}
                >
                  <HandHeart size={16} style={{ color: "#A78BFA" }} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white">{s.title}</span>
                    {s.highlight && (
                      <span className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider"
                        style={{ background: "rgba(212,175,55,0.15)", color: "#E8C94A", border: "1px solid rgba(212,175,55,0.25)" }}
                      >
                        <Star size={9} /> Most Needed
                      </span>
                    )}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    /{s.slug} · {s.tagline}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {s.amounts?.map(a => (
                      <span key={a} className="rounded-full px-2 py-0.5 text-[0.65rem] font-semibold"
                        style={{ background: "rgba(167,139,250,0.10)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.15)" }}
                      >
                        ₹{a.toLocaleString("en-IN")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => openEdit(s)}
                  className="h-8 w-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)" }} title="Edit"
                >
                  <Pencil size={13} />
                </button>
                <button onClick={() => handleDelete(s._id)} disabled={deletingId === s._id}
                  className="h-8 w-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(239,68,68,0.08)", color: "#F87171" }} title="Delete"
                >
                  {deletingId === s._id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
