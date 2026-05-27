import React, { useState, useMemo } from "react";
import { SHOTS_DATA } from "./data/shots";
import { CricketShot } from "./types";
import CricketField from "./components/CricketField";
import BatsmanAnimation from "./components/BatsmanAnimation";
import { 
  Search, 
  Award, 
  Flame, 
  ShieldAlert, 
  Video, 
  User, 
  MapPin, 
  Activity, 
  Compass, 
  ChevronRight, 
  Sparkles, 
  BookOpen, 
  ThumbsUp, 
  AlertTriangle,
  Info 
} from "lucide-react";

// Curated dark-themed/high-contrast professional cricket image references for each shot
const SHOT_IMAGES: Record<string, string> = {
  "cover-drive": "https://images.unsplash.com/photo-1540747737956-37872404428a?auto=format&fit=crop&q=80&w=800",
  "inside-out": "https://images.unsplash.com/photo-1540747737956-37872404428a?auto=format&fit=crop&q=80&w=800",
  "chip-shot": "https://images.unsplash.com/photo-1540747737956-37872404428a?auto=format&fit=crop&q=80&w=800",
  "lofted-drive": "https://images.unsplash.com/photo-1540747737956-37872404428a?auto=format&fit=crop&q=80&w=800",
  "lofted-shot": "https://images.unsplash.com/photo-1540747737956-37872404428a?auto=format&fit=crop&q=80&w=800",
  
  "straight-drive": "https://images.unsplash.com/photo-1593341646782-e0b4c6c8e36d?auto=format&fit=crop&q=80&w=800",
  "straight-hit": "https://images.unsplash.com/photo-1593341646782-e0b4c6c8e36d?auto=format&fit=crop&q=80&w=800",
  "push-shot": "https://images.unsplash.com/photo-1593341646782-e0b4c6c8e36d?auto=format&fit=crop&q=80&w=800",
  "flick": "https://images.unsplash.com/photo-1593341646782-e0b4c6c8e36d?auto=format&fit=crop&q=80&w=800",
  "glance": "https://images.unsplash.com/photo-1593341646782-e0b4c6c8e36d?auto=format&fit=crop&q=80&w=800",
  
  "pull-shot": "https://images.unsplash.com/photo-1531415080261-011a7c3143b0?auto=format&fit=crop&q=80&w=800",
  "pickup": "https://images.unsplash.com/photo-1531415080261-011a7c3143b0?auto=format&fit=crop&q=80&w=800",
  "slog-sweep": "https://images.unsplash.com/photo-1531415080261-011a7c3143b0?auto=format&fit=crop&q=80&w=800",
  "slog-shot": "https://images.unsplash.com/photo-1531415080261-011a7c3143b0?auto=format&fit=crop&q=80&w=800",
  "helicopter-shot": "https://images.unsplash.com/photo-1531415080261-011a7c3143b0?auto=format&fit=crop&q=80&w=800",
  "deep-inside": "https://images.unsplash.com/photo-1531415080261-011a7c3143b0?auto=format&fit=crop&q=80&w=800",
  
  "sweep-shot": "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
  "paddle-sweep": "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
  "reverse-sweep": "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
  
  "scoop-shot": "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800",
  "shuffle-oo": "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800",
  "shuffle-ol": "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800",
  
  "square-cut": "https://images.unsplash.com/photo-1624193757636-b6058097d6be?auto=format&fit=crop&q=80&w=800",
  "steer-shot": "https://images.unsplash.com/photo-1624193757636-b6058097d6be?auto=format&fit=crop&q=80&w=800",
  "punch-shot": "https://images.unsplash.com/photo-1624193757636-b6058097d6be?auto=format&fit=crop&q=80&w=800",
};

const DEFAULT_SHOT_IMAGE = "https://images.unsplash.com/photo-1540747737956-37872404428a?auto=format&fit=crop&q=80&w=800";

const getBatFlowLabel = (shot: CricketShot) => {
  if (shot.category === "unorthodox") return "VERTICAL-DIAGONAL REVERSE";
  if (["pull-shot", "square-cut", "slog-shot"].includes(shot.id)) return "LATERAL HORIZONTAL DRIVE";
  return "STRICT PLANAR VERTICAL";
};

const getLeverageLabel = (shot: CricketShot) => {
  if (shot.category === "unorthodox") return "BODY-WEIGHT COLLAPSE/KNEEL";
  if (shot.category === "front-foot") return "FRONT-FOOT WEIGHT TRANSFER";
  return "BACK-FOOT SPRING PUSH";
};

// Generates dynamic glowing vector trajectory paths depending on the exact physics class of each shot
const renderBallTrajectoryLine = (id: string) => {
  if (["cover-drive", "lofted-drive", "inside-out", "lofted-shot", "chip-shot", "deep-inside"].includes(id)) {
    return (
      <>
        {/* Incoming ball trajectory */}
        <path d="M 50,40 Q 200,80 320,135" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
        {/* Post-impact rocket drive soaring offside */}
        <path d="M 320,135 C 380,120 500,75 750,45" fill="none" stroke="#C5A059" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(197,160,89,0.9)] animate-pulse" />
        <circle cx="320" cy="135" r="4.5" fill="#C5A059" />
        <circle cx="750" cy="45" r="5" fill="#C5A059" />
      </>
    );
  }
  if (["straight-drive", "straight-hit", "push-shot", "flick", "pickup"].includes(id)) {
    return (
      <>
        {/* Incoming straight */}
        <path d="M 50,40 Q 180,90 310,140" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
        {/* Clean linear driver down the ground */}
        <path d="M 310,140 C 370,140 540,110 780,75" fill="none" stroke="#3B82F6" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
        <circle cx="310" cy="140" r="4.5" fill="#3B82F6" />
        <circle cx="780" cy="75" r="5" fill="#3B82F6" />
      </>
    );
  }
  if (["pull-shot", "slog-shot", "helicopter-shot"].includes(id)) {
    return (
      <>
        {/* Short bouncer trajectory */}
        <path d="M 50,50 Q 150,85 240,105" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
        {/* Cross-bat power dynamic launch to legside */}
        <path d="M 240,105 C 320,95 480,115 720,160" fill="none" stroke="#EF4444" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
        <circle cx="240" cy="105" r="4.5" fill="#EF4444" />
        <circle cx="720" cy="160" r="5" fill="#EF4444" />
      </>
    );
  }
  if (["square-cut", "steer-shot", "punch-shot", "glance", "shuffle-ol"].includes(id)) {
    return (
      <>
        <path d="M 50,40 Q 220,100 340,115" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
        {/* Deflected cut slicing outward to gully/slip */}
        <path d="M 340,115 Q 460,110 740,145" fill="none" stroke="#10B981" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
        <circle cx="340" cy="115" r="4.5" fill="#10B981" />
        <circle cx="740" cy="145" r="5" fill="#10B981" />
      </>
    );
  }
  // Default: Sweeps, scoops, and shuffles (paddle-sweep, reverse-sweep, scoop-shot, slog-sweep, shuffle-oo)
  return (
    <>
      <path d="M 50,60 Q 180,100 290,145" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
      {/* Delicate sweep glide behind keeper */}
      <path d="M 290,145 C 340,135 440,80 520,35" fill="none" stroke="#A855F7" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
      <circle cx="290" cy="145" r="4.5" fill="#A855F7" />
      <circle cx="520" cy="35" r="5" fill="#A855F7" />
    </>
  );
};

export default function App() {
  const [selectedShotId, setSelectedShotId] = useState<string>("cover-drive");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [activeZoneShots, setActiveZoneShots] = useState<string[] | null>(null);
  const [activeZoneName, setActiveZoneName] = useState<string | null>(null);

  // Find currently selected shot
  const selectedShot = useMemo(() => {
    return SHOTS_DATA.find((shot) => shot.id === selectedShotId) || SHOTS_DATA[0];
  }, [selectedShotId]);

  // Handle zone selection from the cricket field
  const handleSelectZoneShots = (shotIds: string[] | null, zoneName: string | null) => {
    setActiveZoneShots(shotIds);
    setActiveZoneName(zoneName);
    // If we filtered by a zone and our current shot is not in that zone, let's auto-select the first shot in that zone
    if (shotIds && shotIds.length > 0 && !shotIds.includes(selectedShotId)) {
      setSelectedShotId(shotIds[0]);
    }
  };

  // Filter shots list based on search query, category, and field zone
  const filteredShots = useMemo(() => {
    return SHOTS_DATA.filter((shot) => {
      // 1. Search Query
      const matchesSearch = 
        shot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shot.famousExponents.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

      // 2. Category Filter
      const matchesCategory = 
        categoryFilter === "all" || 
        shot.category === categoryFilter;

      // 3. Field Zone Filter (if selected in the SVG field map)
      const matchesZone = 
        !activeZoneShots || 
        activeZoneShots.includes(shot.id);

      return matchesSearch && matchesCategory && matchesZone;
    });
  }, [searchQuery, categoryFilter, activeZoneShots]);

  // Helper to render rating stars
  const renderRatingStars = (count: number, activeColor: string, emptyColor: string = "text-slate-200") => {
    return (
      <div className="flex gap-0.5" aria-label={`Rating ${count} out of 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${star <= count ? "text-[#C5A059]" : "text-slate-850"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-[#0A0D14] font-sans text-slate-300 antialiased selection:bg-[#C5A059]/20 selection:text-[#C5A059] pb-16">
      
      {/* Decorative Top Accent line/bar */}
      <div className="h-[2px] bg-gradient-to-r from-[#C5A059]/10 via-[#C5A059] to-[#C5A059]/10 w-full" />

      {/* Modern Header Banner */}
      <header id="app-header" className="max-w-7xl mx-auto px-4 pt-10 pb-6 w-full flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/5 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-[#161B26] text-[#C5A059] rounded-md border border-[#C5A059]/20 uppercase tracking-widest font-mono shadow-sm">
              <Sparkles size={11} className="text-[#C5A059]" /> Digital Academy
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-[#161B26] text-slate-400 rounded-md border border-white/5 uppercase tracking-widest font-mono shadow-sm">
              <BookOpen size={11} className="text-slate-500" /> Coaching Standard
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-100 tracking-tight">
            Cricket Shots <span className="text-[#C5A059]">Encyclopedia</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-2 font-sans max-w-xl">
            Learn the exact biomechanical postures, professional coaching drills, and field placement strategies for elite cricket batting strokes.
          </p>
        </div>

        {/* Global Stats counter */}
        <div className="flex gap-4 p-4 bg-[#111520] border border-white/5 rounded-2xl shadow-sm self-start md:self-auto font-mono text-xs text-slate-400">
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-slate-100">{SHOTS_DATA.length}</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Total Strokes</span>
          </div>
          <div className="w-[1px] bg-white/10 self-stretch my-1" />
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-[#C5A059]">
              {SHOTS_DATA.filter(s => s.category === "front-foot").length}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Front Foot</span>
          </div>
          <div className="w-[1px] bg-white/10 self-stretch my-1" />
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-slate-300">
              {SHOTS_DATA.filter(s => s.category === "back-foot").length}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Back Foot</span>
          </div>
          <div className="w-[1px] bg-white/10 self-stretch my-1" />
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-amber-500">
              {SHOTS_DATA.filter(s => s.category === "unorthodox").length}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Unorthodox</span>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* LEFT COLUMN: Shots list sidebar (col-span-4) */}
        <section id="sidebar-shots-selection" className="lg:col-span-4 flex flex-col gap-5 w-full">
          
          {/* SEARCH & CATEGORY FILTERS CARD */}
          <div className="bg-[#111520] border border-white/5 rounded-3xl p-5 shadow-sm">
            <h2 className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest font-mono mb-3 flex items-center gap-1.5">
              <Compass size={14} className="text-[#C5A059]" /> Shot Directory Navigation
            </h2>

            {/* Keyword Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                id="shots-search-input"
                type="text"
                placeholder="Search shots, players (e.g., Kohli)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#171C28] border border-white/5 rounded-xl text-slate-200 placeholder-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition shadow-inner"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              <button
                id="filter-category-all-btn"
                onClick={() => setCategoryFilter("all")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                  categoryFilter === "all" 
                    ? "bg-[#C5A059] border-[#C5A059] text-[#0A0D14] font-bold" 
                    : "bg-[#171C28] hover:bg-[#1E2435] border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                All
              </button>
              <button
                id="filter-category-frontfoot-btn"
                onClick={() => setCategoryFilter("front-foot")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                  categoryFilter === "front-foot" 
                    ? "bg-[#C5A059] border-[#C5A059] text-[#0A0D14] font-bold" 
                    : "bg-[#171C28]/60 hover:bg-[#1E2435] border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                Front Foot
              </button>
              <button
                id="filter-category-backfoot-btn"
                onClick={() => setCategoryFilter("back-foot")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                  categoryFilter === "back-foot" 
                    ? "bg-[#C5A059] border-[#C5A059] text-[#0A0D14] font-bold" 
                    : "bg-[#171C28]/60 hover:bg-[#1E2435] border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                Back Foot
              </button>
              <button
                id="filter-category-unorthodox-btn"
                onClick={() => setCategoryFilter("unorthodox")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                  categoryFilter === "unorthodox" 
                    ? "bg-[#C5A059] border-[#C5A059] text-[#0A0D14] font-bold" 
                    : "bg-[#171C28]/60 hover:bg-[#1E2435] border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                Unorthodox
              </button>
            </div>
          </div>

          {/* ACTIVE FILTER STATUS ALIGNMENT */}
          {activeZoneName && (
            <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-2xl p-4 flex items-center justify-between text-xs text-[#C5A059] shadow-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C5A059]" />
                <span>Selected Field Zone: <strong className="text-white font-sans">{activeZoneName}</strong></span>
              </div>
              <button
                id="clear-active-zone-filter-btn"
                onClick={() => handleSelectZoneShots(null, null)}
                className="text-[10px] font-bold underline text-[#C5A059] hover:text-yellow-300 cursor-pointer"
              >
                Show All Gates
              </button>
            </div>
          )}

          {/* SHOTS MAIN DIRECTORY LIST */}
          <div className="flex flex-col gap-3 max-h-[640px] overflow-y-auto pr-1">
            {filteredShots.length > 0 ? (
              filteredShots.map((shot) => {
                const isSelected = shot.id === selectedShotId;
                
                // Fine high-end golden accents
                const getBadgeColors = (style: string) => {
                  if (style === "front-foot") return "bg-white/5 text-slate-300 border-white/10";
                  if (style === "back-foot") return "bg-white/5 text-slate-300 border-white/10";
                  return "bg-[#C5A059]/5 text-[#C5A059] border-[#C5A059]/20";
                };

                return (
                  <div
                    id={`shot-card-item-${shot.id}`}
                    key={shot.id}
                    onClick={() => setSelectedShotId(shot.id)}
                    className={`p-4 border rounded-2xl transition-all cursor-pointer relative group flex justify-between items-center ${
                      isSelected 
                        ? "bg-[#161B26] border-[#C5A059] shadow-md translate-x-1" 
                        : "bg-[#111520] hover:bg-[#151A26] border-white/5 shadow-sm"
                    }`}
                  >
                    {/* Visual left bar marker */}
                    <div className={`absolute top-0 bottom-0 left-0 w-1.5 rounded-l-2xl ${
                      isSelected 
                        ? "bg-[#C5A059]" 
                        : "bg-transparent"
                    }`} />

                    {/* Highly-aligned technique thumbnail */}
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 relative shrink-0 mr-3 bg-[#1A2233]">
                      <img
                        src={SHOT_IMAGES[shot.id] || DEFAULT_SHOT_IMAGE}
                        alt={shot.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.9]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 border rounded-md ${getBadgeColors(shot.category)}`}>
                          {shot.categoryLabel.split(" ")[0]}
                        </span>
                        
                        {/* Difficulty indicator */}
                        <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                          • Dif: <strong className="text-slate-400">{shot.difficulty}/5</strong>
                        </span>
                      </div>
                      
                      <h3 className="font-serif font-medium text-slate-200 group-hover:text-white transition">
                        {shot.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-sans">
                        {shot.description}
                      </p>
                    </div>

                    <ChevronRight 
                      size={16} 
                      className={`transition-all duration-300 ${
                        isSelected ? "text-[#C5A059] translate-x-0.5" : "text-slate-600 group-hover:text-slate-400"
                      }`} 
                    />
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 bg-[#111520] border border-white/5 rounded-3xl p-6 shadow-sm">
                <p className="text-slate-500 text-sm font-sans font-semibold">No cricket shots match your criteria.</p>
                <button
                  id="reset-all-filters-and-search-btn"
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                    handleSelectZoneShots(null, null);
                  }}
                  className="mt-3 text-xs font-bold text-[#C5A059] hover:text-yellow-400 underline underline-offset-2 cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT COLUMN: Single Shot Interactive Classroom (col-span-8) */}
        <section id="main-shot-classroom" className="lg:col-span-8 flex flex-col gap-6 w-full">
          
          {/* CORE COMPREHENSIVE SHOT DATA CARD */}
          <div className="bg-[#111520] border border-white/5 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
            
            {/* Elegant water-mark or category tag */}
            <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 select-none pointer-events-none opacity-[0.03] font-serif font-black text-[#C5A059] text-7xl md:text-9xl uppercase">
              {selectedShot.id.replace("-", "")}
            </div>

            <div className="relative animate-fade-in" key={selectedShot.id}>
              
              {/* Category Breadcrumbs & Fast Facts */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 border rounded-md bg-[#C5A059]/10 border-[#C5A059]/20 text-[#C5A059]">
                  {selectedShot.categoryLabel}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-lg">
                  <Activity size={12} className="text-[#C5A059]" />
                  <span>Perfect Length: <strong className="text-slate-200">{selectedShot.idealBallTypes[0]}</strong></span>
                </div>
              </div>

              {/* Shot Title */}
              <h2 className="text-3xl md:text-4xl font-serif text-slate-100 tracking-tight mb-3">
                {selectedShot.name}
              </h2>

              {/* Rich Narrative Interpretation */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
                {selectedShot.description}
              </p>

              {/* WIDESCREEN DYNAMIC PICTURE PLAYBOOK ILLUSTRATOR */}
              <div className="w-full aspect-[21/9] sm:aspect-[16/6] md:aspect-[16/5.2] lg:aspect-[16/4.8] rounded-2xl overflow-hidden mb-7 relative border border-white/10 shadow-lg group select-none">
                {/* Sports Photography Backdrop */}
                <img
                  src={SHOT_IMAGES[selectedShot.id] || DEFAULT_SHOT_IMAGE}
                  alt={selectedShot.name}
                  className="w-full h-full object-cover grayscale brightness-[0.32] contrast-[1.15] transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-[0.42] group-hover:grayscale-[0.15]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Advanced Darkening & Golden Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/55 to-transparent pointer-events-none" />
                
                {/* Technique HUD Canvas Wrapper */}
                <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between pointer-events-none transition-all duration-300">
                  {/* Top: Metadata labels */}
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/5">
                      📷 STADIUM HIGH-SPEED • 1/8000s • ISO 400
                    </span>
                    <span className="text-[9px] font-mono text-[#C5A059] font-bold uppercase tracking-widest bg-[#C5A059]/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C5A059]/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" /> TARGET INTERCEPT
                    </span>
                  </div>

                  {/* Middle: Custom Ball Trajectory vector trails overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 200" preserveAspectRatio="none">
                      {renderBallTrajectoryLine(selectedShot.id)}
                    </svg>
                  </div>

                  {/* Micro-interactive coaching point nodes that highlight on group-hover */}
                  <div className="absolute top-[32%] left-[22%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/85 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[9px] font-mono px-2 py-0.5 rounded-md shadow-md">
                    🎯 HEAD: STEADY
                  </div>
                  <div className="absolute top-[52%] left-[55%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/85 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[9px] font-mono px-2 py-0.5 rounded-md shadow-md">
                    ⚖️ WEIGHT: BALANCED
                  </div>
                  <div className="absolute top-[68%] left-[42%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/85 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[9px] font-mono px-2 py-0.5 rounded-md shadow-md">
                    🎨 GRIP: ELITE LOCK
                  </div>

                  {/* Bottom: Instructional Subtext & Technical details */}
                  <div className="flex items-end justify-between">
                    <div className="max-w-[70%]">
                      <span className="text-[10px] md:text-xs font-serif italic text-slate-200 block drop-shadow-sm">
                        "Unlocking correct contact mechanics through visual alignment."
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2 text-[8px] md:text-[9px] font-mono text-slate-400">
                        <span className="px-1.5 py-0.5 bg-black/40 rounded border border-white/5">
                          BAT SWING: {getBatFlowLabel(selectedShot)}
                        </span>
                        <span className="px-1.5 py-0.5 bg-black/40 rounded border border-white/5">
                          LEVERAGE: {getLeverageLabel(selectedShot)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right hidden sm:block">
                      <span className="block text-[10px] font-mono font-bold text-[#C5A059] tracking-wider">
                        IDEAL BALL POSITION
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">
                        {selectedShot.idealBallTypes[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications / Metric Meters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-white/10 pt-5">
                
                {/* Difficulty */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Difficulty Level
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-slate-200 text-sm">{selectedShot.difficulty}/5</span>
                    {renderRatingStars(selectedShot.difficulty, "text-[#C5A059]")}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-sans">
                    {selectedShot.difficulty >= 4 ? "Advanced wrists & reflexes" : "Standard classical technique"}
                  </span>
                </div>

                {/* Risk profile */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Risk Assessment
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-slate-200 text-sm">{selectedShot.risk}/5</span>
                    {renderRatingStars(selectedShot.risk, "text-[#C5A059]")}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-sans">
                    {selectedShot.risk >= 4 ? "Airborne / Edgy" : "Clean ground safety"}
                  </span>
                </div>

                {/* Attack / Power output */}
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Kinetic Power Output
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-slate-200 text-sm">{selectedShot.power}/5</span>
                    {renderRatingStars(selectedShot.power, "text-[#C5A059]")}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-sans">
                    {selectedShot.power >= 4 ? "Boundary launcher" : "Tactical gaps & timing"}
                  </span>
                </div>

              </div>

              {/* Famous Exponents Gallery */}
              <div className="mt-6 p-4 bg-[#171C28] border border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#C5A059]/10 p-2 rounded-xl text-[#C5A059]">
                    <Award size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">
                      Signature Masters of the Shot
                    </span>
                    <span className="text-xs font-bold text-slate-300 font-sans">
                      Recognized classical benchmark executors:
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {selectedShot.famousExponents.map((exponent) => (
                    <span 
                      key={exponent}
                      className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-[#10131B] border border-white/5 rounded-lg text-slate-300 shadow-sm"
                    >
                      <User size={10} className="text-[#C5A059]" />
                      {exponent}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* TWO MAIN VISUAL HELPERS SIDE-BY-SIDE: posturator animator + active target field */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* 1. Biomechanical posturator step-by-step animator */}
            <BatsmanAnimation shot={selectedShot} />

            {/* 2. Interactive SVG map that glows active targets for the selected stroke */}
            <div id="target-map-panel" className="flex flex-col h-full bg-[#111520] border border-white/5 rounded-3xl p-5 shadow-sm">
              <div className="mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-md">
                  Mathematical Landing Zones
                </span>
                <h3 className="font-serif font-medium text-slate-200 text-lg mt-1.5">Target Trajectory</h3>
              </div>
              
              <div className="flex-1 flex flex-col justify-center items-center">
                <CricketField 
                  onSelectZoneShots={handleSelectZoneShots} 
                  highlightedShotsTargetZones={selectedShot.targetZones}
                />
              </div>

              {/* Landing zones string list */}
              <div className="mt-3 text-center">
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">
                  Sweet Spot Landing Sectors
                </span>
                <div className="flex gap-1.5 justify-center mt-1.5 flex-wrap">
                  {selectedShot.targetZones.map((tz) => (
                    <span key={tz} className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059]">
                      🎯 {tz}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* COACHING CLINIC DRILLS & PITFALLS (Side-by-side alert logs) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Coaching principles checklist */}
            <div className="bg-[#111520]/60 border border-white/5 rounded-3xl p-5 shadow-sm">
              <h3 className="font-serif font-medium text-[#C5A059] text-base mb-3 flex items-center gap-1.5">
                <ThumbsUp size={18} className="text-[#C5A059]" /> Elite Coaching Drills
              </h3>
              <ul className="flex flex-col gap-2.5">
                {selectedShot.coachingTips.map((tip, idx) => (
                  <li key={idx} className="text-xs text-slate-400 font-sans flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#C5A059] font-bold bg-[#C5A059]/10 w-5 h-5 min-w-4 rounded-md inline-flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common technical pitfalls / mistakes to bypass */}
            <div className="bg-[#111520]/60 border border-white/5 rounded-3xl p-5 shadow-sm">
              <h3 className="font-serif font-medium text-amber-600 text-base mb-3 flex items-center gap-1.5">
                <AlertTriangle size={18} className="text-amber-600" /> Avoid These Pitfalls
              </h3>
              <ul className="flex flex-col gap-2.5">
                {selectedShot.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="text-xs text-slate-400 font-sans flex items-start gap-2.5 leading-relaxed">
                    <span className="text-amber-600 font-bold bg-amber-600/10 w-5 h-5 min-w-4 rounded-md inline-flex items-center justify-center font-mono">
                      !
                    </span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* VIDEO CLASSROOM: DEMONSTRATION PLAYER (The full embedded theater) */}
          <div id="video-theater-panel" className="bg-[#111520] border border-white/5 rounded-3xl p-6 shadow-md text-white">
            
            {/* Theater header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="bg-[#C5A059]/15 p-2 rounded-xl text-[#C5A059]">
                  <Video size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    HD Classroom Session
                  </span>
                  <h3 className="font-serif font-medium text-slate-200">
                    Watch Demonstration: {selectedShot.name}
                  </h3>
                </div>
              </div>
              
              <span className="text-[10px] font-mono bg-white/5 border border-white/5 text-slate-400 px-2 py-1 rounded max-w-max">
                YOUTUBE ID: {selectedShot.youtubeId}
              </span>
            </div>

            {/* Video embed ratio wrapper */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/5 shadow-inner relative group">
              <iframe
                id="youtube-player-iframe"
                src={`https://www.youtube.com/embed/${selectedShot.youtubeId}?rel=0&autoplay=0&hl=en`}
                title={`${selectedShot.name} Demonstration Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 absolute top-0 left-0"
              />
            </div>

            {/* Video instructional prompt */}
            <div className="mt-4 flex gap-2.5 bg-white/5 border border-white/5 p-3 rounded-2xl text-xs text-slate-400 font-sans leading-relaxed">
              <Info size={16} className="text-[#C5A059] min-w-4 mt-0.5" />
              <span>
                These coaching lessons showcase real-world foot movement slow-motions, wrist rolling release postures, shoulder-head lines, and standard drills to master the <strong>{selectedShot.name}</strong>. Adjust quality to 1080p within the player for pristine details.
              </span>
            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 w-full text-center text-xs text-slate-500 font-sans">
        <p className="mb-1">
          📊 Cricket Batsman Biomechanical Analysis Guide & Stadium Vector Grid Planner.
        </p>
        <p className="font-mono text-[9px]">
          Designed in accordance with ICC Classical Training & Modern Batting Biomechanics. All stats are relative metrics.
        </p>
      </footer>

    </div>
  );
}
