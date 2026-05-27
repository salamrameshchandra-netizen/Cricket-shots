import React, { useState } from "react";
import { FIELD_ZONES, SHOTS_DATA } from "../data/shots";
import { FieldZone } from "../types";

const getPieSlicePath = (
  cx: number,
  cy: number,
  rIn: number,
  rOut: number,
  startAngle: number,
  endAngle: number
) => {
  const dToR = Math.PI / 180;
  // Offset by -90 degrees to make 0 degrees "Straight Up" (North)
  const sDeg = startAngle - 90;
  const eDeg = endAngle - 90;

  const sRad = sDeg * dToR;
  const eRad = eDeg * dToR;

  const x1_in = cx + rIn * Math.cos(sRad);
  const y1_in = cy + rIn * Math.sin(sRad);
  const x2_in = cx + rIn * Math.cos(eRad);
  const y2_in = cy + rIn * Math.sin(eRad);

  const x1_out = cx + rOut * Math.cos(sRad);
  const y1_out = cy + rOut * Math.sin(sRad);
  const x2_out = cx + rOut * Math.cos(eRad);
  const y2_out = cy + rOut * Math.sin(eRad);

  const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

  return `
    M ${x1_in} ${y1_in}
    L ${x1_out} ${y1_out}
    A ${rOut} ${rOut} 0 ${largeArcFlag} 1 ${x2_out} ${y2_out}
    L ${x2_in} ${y2_in}
    A ${rIn} ${rIn} 0 ${largeArcFlag} 0 ${x1_in} ${y1_in}
    Z
  `.trim();
};

interface CricketFieldProps {
  onSelectZoneShots?: (shotIds: string[] | null, zoneName: string | null) => void;
  activeZoneId?: string | null;
  highlightedShotsTargetZones?: string[]; // If a shot is selected, its target zones glow!
}

export default function CricketField({
  onSelectZoneShots,
  activeZoneId,
  highlightedShotsTargetZones = []
}: CricketFieldProps) {
  const [hoveredZone, setHoveredZone] = useState<FieldZone | null>(null);
  const [selectedZone, setSelectedZone] = useState<FieldZone | null>(null);

  const cx = 200;
  const cy = 200;
  const boundaryRadius = 175;
  const innerRadius = 110;
  const centerRadius = 30; // pitch radius

  const handleZoneClick = (zone: FieldZone) => {
    if (selectedZone?.id === zone.id) {
      setSelectedZone(null);
      if (onSelectZoneShots) onSelectZoneShots(null, null);
    } else {
      setSelectedZone(zone);
      if (onSelectZoneShots) onSelectZoneShots(zone.shots, zone.name);
    }
  };

  const handleClearSelection = () => {
    setSelectedZone(null);
    if (onSelectZoneShots) onSelectZoneShots(null, null);
  };

  return (
    <div id="cricket-field-wrapper" className="flex flex-col items-center bg-[#131722] border border-white/5 rounded-3xl p-5 shadow-inner">
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <h3 className="font-serif font-medium text-slate-200 text-base">Interactive Field Explorer</h3>
          <p className="text-xs text-slate-500 font-sans">
            {selectedZone 
              ? `Filtered by: ${selectedZone.name}` 
              : "Click a zone to isolate target strikes."}
          </p>
        </div>
        {selectedZone && (
          <button
            id="clear-field-selection-btn"
            onClick={handleClearSelection}
            className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 text-[#C5A059] rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            Clear Filter
          </button>
        )}
      </div>

      <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square">
        <svg 
          viewBox="0 0 400 400" 
          width="100%" 
          height="100%" 
          className="rounded-full select-none shadow-md overflow-visible"
          style={{ background: "#122416", backgroundImage: "radial-gradient(ellipse at center, #18331e 0%, #0d1a10 100%)" }}
        >
          {/* Boundary Rope Marker */}
          <circle cx={cx} cy={cy} r={boundaryRadius} fill="none" stroke="#C5A059" strokeWidth="2.5" strokeDasharray="6,4" />
          
          {/* 30-Yard Circle Marker */}
          <circle cx={cx} cy={cy} r={innerRadius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Cricket Pitch in the Center */}
          <g transform={`rotate(0, ${cx}, ${cy})`}>
            {/* Dark green grass stripes simulation */}
            <rect x={cx - 10} y={cy - 40} width="20" height="80" fill="#C5A059" opacity="0.1" />
            <rect x={cx - 8} y={cy - 35} width="16" height="70" fill="#C5A059" opacity="0.25" rx="1" />
            {/* Poping creases */}
            <line x1={cx - 8} y1={cy - 25} x2={cx + 8} y2={cy - 25} stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <line x1={cx - 8} y1={cy + 25} x2={cx + 8} y2={cy + 25} stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            
            {/* Wickets */}
            <circle cx={cx - 3} cy={cy - 28} r="1" fill="#C5A059" />
            <circle cx={cx} cy={cy - 28} r="1" fill="#C5A059" />
            <circle cx={cx + 3} cy={cy - 28} r="1" fill="#C5A059" />
            
            <circle cx={cx - 3} cy={cy + 28} r="1" fill="#C5A059" />
            <circle cx={cx} cy={cy + 28} r="1" fill="#C5A059" />
            <circle cx={cx + 3} cy={cy + 28} r="1" fill="#C5A059" />
          </g>

          {/* Compass / Directions Labels */}
          <text x={cx} y={cy - boundaryRadius - 8} textAnchor="middle" className="fill-slate-400 font-mono font-bold text-[9px] tracking-widest opacity-80">STRAIGHT</text>
          <text x={cx} y={cy + boundaryRadius + 14} textAnchor="middle" className="fill-slate-400 font-mono font-bold text-[9px] tracking-widest opacity-80">BEHIND WICKET</text>
          <text x={cx - boundaryRadius - 10} y={cy + 4} textAnchor="end" className="fill-slate-400 font-mono font-bold text-[9px] tracking-widest opacity-80">LEG SIDE</text>
          <text x={cx + boundaryRadius + 10} y={cy + 4} textAnchor="start" className="fill-slate-400 font-mono font-bold text-[9px] tracking-widest opacity-80">OFF SIDE</text>

          {/* Interactive Field Zones (Pie slices) */}
          {FIELD_ZONES.map((zone) => {
            const isSelected = selectedZone?.id === zone.id || activeZoneId === zone.id;
            const isHovered = hoveredZone?.id === zone.id;
            
            // Check if this zone matches target zones of currently highlighted/selected shot
            const isShotTargetHighlighted = highlightedShotsTargetZones.some(
              (tz) => zone.name.toLowerCase().includes(tz.toLowerCase()) || tz.toLowerCase().includes(zone.name.toLowerCase()) || (zone.id === 'cover' && tz === 'Cover') || (zone.id === 'cover' && tz === 'Extra Cover') || (zone.id === 'mid-off' && tz === 'Straight Bowl / Straight Long-off') || (zone.id === 'mid-off' && tz === 'Long-off') || (zone.id === 'mid-on' && tz === 'Long-on') || (zone.id === 'mid-wicket' && tz === 'Mid-Wicket') || (zone.id === 'square-leg' && tz === 'Square Leg') || (zone.id === 'fine-leg' && tz === 'Fine Leg') || (zone.id === 'point' && tz === 'Point')
            );

            // Determine overlay colors
            let fill = "rgba(255, 255, 255, 0)";
            let stroke = "rgba(255, 255, 255, 0.08)";
            let strokeWidth = "1";

            if (isSelected) {
              fill = "rgba(197, 160, 89, 0.35)"; // Elegant translucent gold
              stroke = "#C5A059";
              strokeWidth = "2.5";
            } else if (isHovered) {
              fill = "rgba(255, 255, 255, 0.15)";
              stroke = "rgba(255, 255, 255, 0.4)";
              strokeWidth = "2";
            } else if (isShotTargetHighlighted) {
              fill = "rgba(197, 160, 89, 0.2)"; // Glowing gold for shot target landing spots
              stroke = "#C5A059";
              strokeWidth = "2";
            }

            const pathData = getPieSlicePath(
              cx,
              cy,
              centerRadius,
              boundaryRadius,
              zone.angleRange[0],
              zone.angleRange[1]
            );

            return (
              <g 
                key={zone.id} 
                className="cursor-pointer group"
                onMouseEnter={() => setHoveredZone(zone)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => handleZoneClick(zone)}
              >
                <path
                  id={`field-zone-${zone.id}`}
                  d={pathData}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  transition="all 0.2s"
                  className="transition duration-150 ease-out"
                />
              </g>
            );
          })}

          {/* Core pitch safe-circle */}
          <circle cx={cx} cy={cy} r={centerRadius - 1} fill="#C5A059" opacity="0.2" pointerEvents="none" />
          <circle cx={cx} cy={cy} r={5} fill="#ffffff" pointerEvents="none" />
        </svg>

        {/* Hover/Select Overlay Cards */}
        <div className="absolute top-2 left-2 flex flex-col pointer-events-none gap-1">
          {hoveredZone && !selectedZone && (
            <div className="bg-[#111520]/95 backdrop-blur text-slate-200 px-3 py-1.5 rounded-lg border border-white/5 shadow-lg text-[11px] font-sans animate-fade-in">
              <span className="font-semibold block text-white">{hoveredZone.name}</span>
              <span className="text-[10px] text-[#C5A059] font-mono">
                {hoveredZone.shots.length} shots hit here
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info Legend */}
      <div className="mt-4 w-full flex flex-col gap-2 bg-[#171C28]/60 border border-white/5 p-3 rounded-2xl text-[11px] text-slate-400 font-sans">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded bg-[#C5A059]/20 border border-[#C5A059]/50"></div>
          <span>Active Shot Landing Zones / Sweet Spots</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded bg-[#C5A059]/40 border border-[#C5A059]"></div>
          <span>User Filtered Zone (Isolates directory shots)</span>
        </div>
        {selectedZone && (
          <div className="mt-1 bg-[#10131B] p-2 rounded-xl text-slate-300 font-medium">
            ⛳ Shots in <span className="font-bold text-[#C5A059]">{selectedZone.name}</span>:{" "}
            <span className="text-slate-300">
              {SHOTS_DATA.filter((s) => selectedZone.shots.includes(s.id))
                .map((s) => s.name)
                .join(", ") || "None"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
