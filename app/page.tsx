"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import TestCaseGenerator from "@/components/TestCaseGenerator";
import TestDataGenerator from "@/components/TestDataGenerator";
import DefectAnalyzer from "@/components/DefectAnalyzer";
import { FlaskConical, Database, Bug, ArrowLeft, Zap, Github } from "lucide-react";

type ToolId = "testcase" | "testdata" | "defect";

const TOOL_COMPONENTS: Record<ToolId, React.ComponentType> = {
  testcase: TestCaseGenerator,
  testdata: TestDataGenerator,
  defect: DefectAnalyzer,
};

const TOOL_TITLES: Record<ToolId, string> = {
  testcase: "Test Case Generator",
  testdata: "Test Data Generator",
  defect: "Defect Analyzer",
};

const CATEGORIES = [
  {
    id: "testing",
    label: "Testing",
    count: 2,
    tagline: "TESTING-FOCUSED AI",
    heading: "Testing accelerators",
    description:
      "AI tools that generate structured test cases and realistic test data for Guidewire InsuranceSuite modules in seconds.",
    tools: [
      {
        id: "testcase" as ToolId,
        title: "Test Case Generator",
        description:
          "Generate Gherkin/BDD, step-by-step, or matrix test cases for any Guidewire module with priority filtering.",
        Icon: FlaskConical,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        badge: "PolicyCenter",
        badgeStyle: "bg-blue-50 text-blue-700 border border-blue-100",
      },
      {
        id: "testdata" as ToolId,
        title: "Test Data Generator",
        description:
          "Create realistic insurance test data in JSON, Table, or CSV format for policies, claims, and billing scenarios.",
        Icon: Database,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        badge: "ClaimCenter",
        badgeStyle: "bg-emerald-50 text-emerald-700 border border-emerald-100",
      },
    ],
  },
  {
    id: "analysis",
    label: "Analysis",
    count: 1,
    tagline: "ANALYSIS-FOCUSED AI",
    heading: "Analysis accelerators",
    description:
      "AI-powered defect triage with root cause identification, severity classification, and actionable fix recommendations.",
    tools: [
      {
        id: "defect" as ToolId,
        title: "Defect Analyzer",
        description:
          "AI root cause analysis on Guidewire defects — severity levels, component identification, and regression guidance.",
        Icon: Bug,
        iconBg: "bg-rose-50",
        iconColor: "text-rose-600",
        badge: "All Centers",
        badgeStyle: "bg-rose-50 text-rose-700 border border-rose-100",
      },
    ],
  },
];

const STATS = [
  { Icon: FlaskConical, value: "3", label: "Test output formats", color: "text-blue-600", bg: "bg-blue-50" },
  { Icon: Database, value: "7", label: "Insurance product lines", color: "text-emerald-600", bg: "bg-emerald-50" },
  { Icon: Zap, value: "Claude", label: "Powered by Anthropic", color: "text-violet-600", bg: "bg-violet-50" },
];

export default function Home() {
  const [activeTool, setActiveTool] = useState<ToolId | null>(null);
  const [activeCategory, setActiveCategory] = useState("testing");

  if (activeTool) {
    const ToolComponent = TOOL_COMPONENTS[activeTool];
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar onLogoClick={() => setActiveTool(null)} />
        <div className="max-w-5xl mx-auto w-full px-4 py-8 flex-1">
          <button
            onClick={() => setActiveTool(null)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors font-medium"
          >
            <ArrowLeft size={15} />
            Back to all tools
          </button>
          <ToolComponent />
        </div>
        <footer className="border-t border-gray-100 py-4 text-center text-gray-400 text-sm">
          Guidewire AI Testing Suite — Built with Next.js &amp; Claude AI
        </footer>
      </div>
    );
  }

  const activeSection = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Announcement bar */}
      <div className="bg-gray-950 text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-2 flex-wrap">
        <span className="bg-brand-600 text-white text-xs font-bold px-2 py-0.5 rounded tracking-wide">
          NEW
        </span>
        <span className="text-gray-300">
          Guidewire AI Testing Suite is live with Claude Sonnet integration
        </span>
        <a
          href="#tools"
          className="text-brand-400 hover:text-brand-300 font-semibold transition-colors"
        >
          Explore tools →
        </a>
      </div>

      <Navbar onLogoClick={() => setActiveTool(null)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-violet-50 py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            3 live AI tools · Powered by Claude Sonnet
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Welcome to the future<br className="hidden sm:block" /> of insurance testing.
          </h1>

          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            A suite of AI accelerators for Guidewire InsuranceSuite — from test case
            generation to defect analysis, built for QA &amp; AMS teams.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => setActiveTool("testcase")}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
            >
              Get Started
            </button>
            <a
              href="#tools"
              className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Tool cards section */}
      <section id="tools" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Category tabs */}
          <div className="flex items-end gap-0 border-b border-gray-200 mb-12 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 -mb-px ${
                  activeCategory === cat.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {cat.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    activeCategory === cat.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Category description */}
            <div className="lg:col-span-1">
              <p className="text-xs font-bold text-gray-400 tracking-widest mb-3 uppercase">
                {activeSection.tagline}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {activeSection.heading}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {activeSection.description}
              </p>
            </div>

            {/* Tool cards */}
            <div
              className={`lg:col-span-3 grid gap-4 ${
                activeSection.tools.length === 1
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {activeSection.tools.map((tool) => {
                const { Icon } = tool;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className="bg-white border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md hover:border-gray-300 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className={`${tool.iconBg} p-3 rounded-xl`}>
                        <Icon size={22} className={tool.iconColor} />
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeStyle}`}>
                        {tool.badge}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-brand-600 transition-colors">
                      {tool.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="mt-5 text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors flex items-center gap-1">
                      Launch tool
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          {STATS.map(({ Icon, value, label, color, bg }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className={`${bg} p-3 rounded-xl`}>
                <Icon size={20} className={color} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-xs text-gray-500 font-medium leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-100 py-5 text-center text-gray-400 text-sm">
        Guidewire AI Testing Suite — Built with Next.js &amp; Claude AI
      </footer>
    </div>
  );
}
