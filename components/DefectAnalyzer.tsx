"use client";

import { useState } from "react";
import { Bug, Loader2, Copy, Check, AlertTriangle } from "lucide-react";
import clsx from "clsx";

const SEVERITIES = ["Critical", "High", "Medium", "Low", "Unknown"];
const GW_CENTERS_DEF = ["PolicyCenter", "ClaimCenter", "BillingCenter", "ContactManager", "Unknown"];

const SEVERITY_ACTIVE: Record<string, string> = {
  Critical: "bg-red-600 border-red-500 text-white",
  High:     "bg-orange-500 border-orange-400 text-white",
  Medium:   "bg-amber-500 border-amber-400 text-white",
  Low:      "bg-green-600 border-green-500 text-white",
  Unknown:  "bg-gray-500 border-gray-400 text-white",
};

export default function DefectAnalyzer() {
  const [description, setDescription] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [severity, setSeverity] = useState("Unknown");
  const [gwCenter, setGwCenter] = useState("Unknown");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await fetch("/api/analyze-defect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, errorLog, severity, gwCenter }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to analyze");
      setResult(data.result);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-100">
          <Bug size={22} className="text-rose-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Defect Analyzer</h2>
          <p className="text-gray-500 text-sm">AI-powered root cause analysis and fix recommendations</p>
        </div>
      </div>

      {/* Form */}
      <div className="card space-y-5">
        {/* Severity & Center */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="label">Severity</label>
            <div className="flex flex-wrap gap-2">
              {SEVERITIES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSeverity(s)}
                  className={clsx(
                    "pill-btn",
                    severity === s ? SEVERITY_ACTIVE[s] : "pill-btn-inactive"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Guidewire Center</label>
            <div className="flex flex-wrap gap-2">
              {GW_CENTERS_DEF.map((c) => (
                <button
                  key={c}
                  onClick={() => setGwCenter(c)}
                  className={clsx(
                    "pill-btn",
                    gwCenter === c
                      ? "bg-rose-600 border-rose-500 text-white"
                      : "pill-btn-inactive"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Defect Description */}
        <div>
          <label className="label">Defect Description *</label>
          <textarea
            className="input-field resize-none"
            rows={4}
            placeholder="Describe the defect in detail. e.g. When submitting a new Personal Auto policy in PolicyCenter, the premium calculation returns $0 for drivers with more than 3 vehicles..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Error Log */}
        <div>
          <label className="label">
            Error Log / Stack Trace <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            className="input-field resize-none font-mono text-xs"
            rows={5}
            placeholder="Paste error logs, stack traces, or exception messages here..."
            value={errorLog}
            onChange={(e) => setErrorLog(e.target.value)}
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading || !description.trim()}
          className="btn-primary bg-rose-600 hover:bg-rose-700"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <AlertTriangle size={16} />}
          {loading ? "Analyzing..." : "Analyze Defect"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="card space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Bug size={16} className="text-rose-600" />
              Analysis Report
            </h3>
            <button onClick={handleCopy} className="btn-secondary text-sm">
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 overflow-auto whitespace-pre-wrap leading-relaxed border border-gray-200">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
