"use client";

import { useEffect, useState, useRef } from "react";
import { Plus, Pencil, Trash2, X, Check, CalendarDays, Loader2 } from "lucide-react";

interface EventDoc {
  _id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  category: string;
}

const EMPTY: Omit<EventDoc, "_id"> = {
  title: "",
  date: "",
  description: "",
  location: "",
  category: "festival",
};

const CATEGORIES = ["festival", "aarti", "program", "retreat", "outreach", "general"];

function inputCls(hasError?: boolean) {
  return `w-full rounded-xl px-3 py-2.5 text-sm outline-none transition-all ${
    hasError
      ? "border border-red-500/60 bg-red-500/05 text-white"
      : "border border-white/10 bg-white/05 text-white focus:border-blue-500/60 focus:bg-white/08"
  }`;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/events");
      const data = await res.json();
      setEvents(Array.isArray(data) ? data : []);
    } catch {
      setError("Could not load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const openAdd = () => {
    setForm(EMPTY);
    setEditId(null);
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const openEdit = (ev: EventDoc) => {
    setForm({ title: ev.title, date: ev.date, description: ev.description, location: ev.location, category: ev.category });
    setEditId(ev._id);
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.date) {
      setError("Title and date are required");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const url = editId ? `/api/admin/events/${editId}` : "/api/admin/events";
      const method = editId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save");
      setShowForm(false);
      setEditId(null);
      fetchEvents();
    } catch {
      setError("Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
      fetchEvents();
    } catch {
      setError("Failed to delete event");
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
            Events
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
            {events.length} event{events.length !== 1 ? "s" : ""} in database
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
          style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
          }}
        >
          <Plus size={16} /> Add Event
        </button>
      </div>

      {error && (
        <div
          className="mb-5 rounded-xl px-4 py-3 text-sm flex items-center justify-between"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#FCA5A5" }}
        >
          {error}
          <button onClick={() => setError(null)}><X size={14} /></button>
        </div>
      )}

      {/* Add / Edit Form */}
      {showForm && (
        <div
          ref={formRef}
          className="mb-6 rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-white text-base">{editId ? "Edit Event" : "New Event"}</h2>
            <button onClick={() => setShowForm(false)} style={{ color: "rgba(255,255,255,0.40)" }}>
              <X size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Title *</label>
              <input className={inputCls(!form.title)} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Event title" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Date *</label>
              <input type="date" className={inputCls(!form.date)} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Location</label>
              <input className={inputCls()} value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="Temple Hall / Online" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Category</label>
              <select
                className={inputCls()}
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                style={{ background: "#111827" }}
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.50)" }}>Description</label>
              <textarea
                className={inputCls()}
                rows={3}
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Describe the event..."
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
              {editId ? "Save Changes" : "Create Event"}
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

      {/* Events list */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={28} className="animate-spin" style={{ color: "rgba(255,255,255,0.30)" }} />
        </div>
      ) : events.length === 0 ? (
        <div
          className="text-center py-20 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.10)" }}
        >
          <CalendarDays size={40} className="mx-auto mb-4" style={{ color: "rgba(255,255,255,0.18)" }} />
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>No events yet. Add your first event.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {events.map(ev => (
            <div
              key={ev._id}
              className="flex items-start justify-between gap-4 rounded-2xl px-5 py-4 group"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-start gap-4 min-w-0">
                <div
                  className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(37,99,235,0.14)", border: "1px solid rgba(37,99,235,0.25)" }}
                >
                  <CalendarDays size={16} style={{ color: "#60A5FA" }} />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-white truncate">{ev.title}</div>
                  <div className="text-xs mt-0.5 flex items-center gap-2" style={{ color: "rgba(255,255,255,0.40)" }}>
                    <span>{ev.date}</span>
                    {ev.location && <><span>·</span><span>{ev.location}</span></>}
                    {ev.category && (
                      <span
                        className="rounded-full px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider"
                        style={{ background: "rgba(96,165,250,0.12)", color: "#93C5FD" }}
                      >
                        {ev.category}
                      </span>
                    )}
                  </div>
                  {ev.description && (
                    <div className="text-xs mt-1.5 line-clamp-2" style={{ color: "rgba(255,255,255,0.32)" }}>
                      {ev.description}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => openEdit(ev)}
                  className="h-8 w-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)" }}
                  title="Edit"
                >
                  <Pencil size={13} />
                </button>
                <button
                  onClick={() => handleDelete(ev._id)}
                  disabled={deletingId === ev._id}
                  className="h-8 w-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(239,68,68,0.08)", color: "#F87171" }}
                  title="Delete"
                >
                  {deletingId === ev._id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
