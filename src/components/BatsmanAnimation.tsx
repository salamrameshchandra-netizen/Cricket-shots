import React, { useState, useEffect } from "react";
import { CricketShot } from "../types";
import { Play, Pause, RotateCw, HelpCircle } from "lucide-react";

interface BatsmanAnimationProps {
  shot: CricketShot;
}

type StepKey = "stance" | "trigger" | "impact" | "followThrough";

export default function BatsmanAnimation({ shot }: BatsmanAnimationProps) {
  const [activeStep, setActiveStep] = useState<StepKey>("stance");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const stepsList: { key: StepKey; label: string }[] = [
    { key: "stance", label: "1. Stance & Backlift" },
    { key: "trigger", label: "2. Trigger Step" },
    { key: "impact", label: "3. Point of Impact" },
    { key: "followThrough", label: "4. Follow-Through" }
  ];

  // Auto play transition loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev === "stance") return "trigger";
          if (prev === "trigger") return "impact";
          if (prev === "impact") return "followThrough";
          return "stance";
        });
      }, 2200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const resetAnimation = () => {
    setIsPlaying(false);
    setActiveStep("stance");
  };

  const getStepColorClass = (key: StepKey) => {
    if (activeStep === key) {
      return "bg-[#C5A059] border-[#C5A059] text-[#0A0D14] font-bold shadow-md shadow-[#C5A059]/10";
    }
    return "bg-[#171C28]/60 border-white/5 text-slate-400 hover:bg-[#1E2435] hover:text-slate-200 hover:border-white/10";
  };

  // Convert step to SVG Path
  const getSvgPath = () => {
    switch (activeStep) {
      case "stance":
        return shot.svgAnimationPath.backlift;
      case "trigger":
        return shot.svgAnimationPath.swing;
      case "impact":
        return shot.svgAnimationPath.contact;
      case "followThrough":
        return shot.svgAnimationPath.finish;
    }
  };

  // Dynamic Batsman Render Properties based on Active Step
  // Let us draw a gorgeously styled vector batsman dynamically using coordinates scaled to 220x220
  const getAnatomicalJoints = () => {
    const isFrontFoot = shot.category === "front-foot";
    const isBackFoot = shot.category === "back-foot";
    const isUnorthodox = shot.category === "unorthodox";

    // Setup coordinate offsets
    let head = { x: 100, y: 55 };
    let neck = { x: 100, y: 70 };
    let pelvis = { x: 100, y: 110 };
    let backAnkle = { x: 130, y: 175 };
    let backKnee = { x: 125, y: 140 };
    let frontAnkle = { x: 80, y: 175 };
    let frontKnee = { x: 85, y: 140 };
    let leadElbow = { x: 80, y: 85 };
    let leadHand = { x: 75, y: 100 };
    let trailElbow = { x: 110, y: 85 };
    let trailHand = { x: 80, y: 100 };
    let batTip = { x: 60, y: 60 };
    let ball = { x: -50, y: -50 }; // hidden by default

    if (activeStep === "stance") {
      // General Stance config
      batTip = { x: 60, y: 60 };
      leadElbow = { x: 80, y: 85 };
      leadHand = { x: 75, y: 100 };
      trailHand = { x: 78, y: 100 };
    } 
    else if (activeStep === "trigger") {
      // Preparing to stride
      if (isFrontFoot) {
        frontAnkle = { x: 70, y: 175 };
        frontKnee = { x: 75, y: 140 };
        head = { x: 90, y: 60 };
        neck = { x: 92, y: 72 };
        batTip = { x: 55, y: 45 }; // high backlift
      } else if (isBackFoot) {
        backAnkle = { x: 135, y: 175 };
        backKnee = { x: 130, y: 140 };
        pelvis = { x: 110, y: 110 };
        batTip = { x: 50, y: 45 };
      } else {
        // unorthodox
        head = { x: 95, y: 62 };
        batTip = { x: 50, y: 50 };
      }
      leadElbow = { x: 75, y: 75 };
      leadHand = { x: 70, y: 95 };
      trailHand = { x: 72, y: 95 };
    } 
    else if (activeStep === "impact") {
      // Strike event
      if (shot.id === "cover-drive") {
        frontAnkle = { x: 60, y: 175 };
        frontKnee = { x: 65, y: 155 }; // deep front leg bend
        pelvis = { x: 85, y: 125 };
        head = { x: 70, y: 75 };
        neck = { x: 73, y: 88 };
        leadElbow = { x: 55, y: 90 };
        leadHand = { x: 65, y: 115 };
        trailHand = { x: 67, y: 115 };
        batTip = { x: 65, y: 170 }; // vertical sweep down
        ball = { x: 65, y: 131 };
      } else if (shot.id === "pull-shot") {
        backAnkle = { x: 130, y: 175 };
        backKnee = { x: 125, y: 148 };
        pelvis = { x: 115, y: 115 };
        head = { x: 105, y: 65 };
        neck = { x: 107, y: 80 };
        leadElbow = { x: 90, y: 95 };
        leadHand = { x: 80, y: 98 };
        trailHand = { x: 82, y: 98 };
        batTip = { x: 40, y: 98 }; // horizontal bat sweep
        ball = { x: 62, y: 98 };
      } else if (shot.id === "straight-drive") {
        frontAnkle = { x: 65, y: 175 };
        frontKnee = { x: 70, y: 155 };
        pelvis = { x: 90, y: 122 };
        head = { x: 75, y: 70 };
        neck = { x: 78, y: 84 };
        leadElbow = { x: 65, y: 88 };
        leadHand = { x: 72, y: 115 };
        trailHand = { x: 74, y: 115 };
        batTip = { x: 72, y: 175 }; // vertical down
        ball = { x: 72, y: 135 };
      } else if (shot.id === "sweep-shot") {
        frontAnkle = { x: 45, y: 175 };
        frontKnee = { x: 55, y: 165 };
        backKnee = { x: 125, y: 175 }; // back knee grounded!
        pelvis = { x: 90, y: 145 };
        head = { x: 70, y: 105 }; // very low head
        neck = { x: 75, y: 118 };
        leadHand = { x: 55, y: 135 };
        trailHand = { x: 57, y: 135 };
        batTip = { x: 25, y: 145 }; // sweeping horizontal action
        ball = { x: 40, y: 140 };
      } else if (shot.id === "helicopter-shot") {
        pelvis = { x: 95, y: 120 };
        head = { x: 85, y: 70 };
        leadElbow = { x: 75, y: 95 };
        leadHand = { x: 78, y: 116 };
        trailHand = { x: 80, y: 116 };
        batTip = { x: 85, y: 178 }; // vertical low under toe yorker
        ball = { x: 82, y: 155 };
      } else if (shot.id === "reverse-sweep") {
        frontAnkle = { x: 45, y: 175 };
        frontKnee = { x: 55, y: 165 };
        backKnee = { x: 125, y: 175 }; // sweep state
        pelvis = { x: 85, y: 145 };
        head = { x: 75, y: 105 };
        neck = { x: 78, y: 118 };
        leadHand = { x: 95, y: 135 }; // reaching offside
        trailHand = { x: 97, y: 135 };
        batTip = { x: 118, y: 142 };
        ball = { x: 105, y: 138 };
      } else if (shot.id === "scoop-shot") {
        pelvis = { x: 95, y: 135 };
        backAnkle = { x: 125, y: 175 };
        frontAnkle = { x: 70, y: 175 };
        head = { x: 88, y: 95 };
        leadHand = { x: 82, y: 115 };
        trailHand = { x: 84, y: 115 };
        batTip = { x: 83, y: 80 }; // scooped flat overhead
        ball = { x: 83, y: 98 };
      } else if (shot.id === "lofted-drive") {
        frontAnkle = { x: 62, y: 175 };
        frontKnee = { x: 68, y: 153 };
        pelvis = { x: 88, y: 125 };
        head = { x: 74, y: 72 };
        neck = { x: 77, y: 86 };
        leadElbow = { x: 60, y: 88 };
        leadHand = { x: 70, y: 110 };
        trailHand = { x: 72, y: 110 };
        batTip = { x: 50, y: 155 }; // slightly upward tilted angled bat
        ball = { x: 60, y: 130 };
      } else if (shot.id === "push-shot") {
        frontAnkle = { x: 70, y: 175 };
        frontKnee = { x: 75, y: 155 };
        pelvis = { x: 92, y: 122 };
        head = { x: 78, y: 70 };
        neck = { x: 81, y: 84 };
        leadElbow = { x: 70, y: 90 };
        leadHand = { x: 75, y: 118 };
        trailHand = { x: 77, y: 118 };
        batTip = { x: 75, y: 168 }; // vertical compact push holding near ball line
        ball = { x: 75, y: 140 };
      } else if (shot.id === "punch-shot") {
        backAnkle = { x: 135, y: 175 };
        backKnee = { x: 130, y: 150 };
        pelvis = { x: 115, y: 115 };
        head = { x: 105, y: 65 };
        neck = { x: 107, y: 80 };
        leadElbow = { x: 85, y: 85 };
        leadHand = { x: 82, y: 110 };
        trailHand = { x: 84, y: 110 };
        batTip = { x: 80, y: 165 }; // punched down vertical bat face outside off-stump
        ball = { x: 81, y: 125 };
      } else if (shot.id === "steer-shot") {
        backAnkle = { x: 135, y: 175 };
        backKnee = { x: 130, y: 152 };
        pelvis = { x: 118, y: 118 };
        head = { x: 110, y: 68 };
        neck = { x: 112, y: 82 };
        leadElbow = { x: 95, y: 92 };
        leadHand = { x: 102, y: 115 };
        trailHand = { x: 104, y: 115 };
        batTip = { x: 125, y: 150 }; // open angled bat face guiding ball behind
        ball = { x: 112, y: 130 };
      } else if (shot.id === "straight-hit") {
        frontAnkle = { x: 60, y: 175 };
        frontKnee = { x: 65, y: 152 };
        pelvis = { x: 86, y: 122 };
        head = { x: 70, y: 70 };
        neck = { x: 73, y: 84 };
        leadElbow = { x: 60, y: 85 };
        leadHand = { x: 66, y: 112 };
        trailHand = { x: 68, y: 112 };
        batTip = { x: 70, y: 170 }; // long-levered power vertical hit
        ball = { x: 68, y: 132 };
      } else if (shot.id === "flick") {
        frontAnkle = { x: 70, y: 175 };
        frontKnee = { x: 73, y: 155 };
        pelvis = { x: 90, y: 125 };
        head = { x: 80, y: 72 };
        neck = { x: 83, y: 86 };
        leadElbow = { x: 68, y: 92 };
        leadHand = { x: 75, y: 115 };
        trailHand = { x: 77, y: 115 };
        batTip = { x: 45, y: 155 }; // rolled over whip to legside
        ball = { x: 72, y: 135 };
      } else if (shot.id === "glance") {
        frontAnkle = { x: 68, y: 175 };
        frontKnee = { x: 72, y: 155 };
        pelvis = { x: 88, y: 124 };
        head = { x: 78, y: 70 };
        neck = { x: 81, y: 84 };
        leadElbow = { x: 72, y: 90 };
        leadHand = { x: 78, y: 118 };
        trailHand = { x: 80, y: 118 };
        batTip = { x: 84, y: 170 }; // vertical angled face redirecting fine
        ball = { x: 80, y: 140 };
      } else if (shot.id === "paddle-sweep") {
        frontAnkle = { x: 55, y: 175 };
        frontKnee = { x: 65, y: 165 };
        backKnee = { x: 125, y: 175 }; // knelt
        pelvis = { x: 90, y: 145 };
        head = { x: 70, y: 105 };
        neck = { x: 74, y: 118 };
        leadElbow = { x: 50, y: 110 };
        leadHand = { x: 52, y: 132 };
        trailHand = { x: 54, y: 132 };
        batTip = { x: 30, y: 140 }; // paddle horizontal swept face fine
        ball = { x: 48, y: 138 };
      } else if (shot.id === "slog-sweep") {
        frontAnkle = { x: 55, y: 175 };
        frontKnee = { x: 65, y: 165 };
        backKnee = { x: 125, y: 175 }; // knelt
        pelvis = { x: 90, y: 143 };
        head = { x: 72, y: 105 };
        neck = { x: 76, y: 118 };
        leadElbow = { x: 50, y: 105 };
        leadHand = { x: 52, y: 128 };
        trailHand = { x: 54, y: 128 };
        batTip = { x: 40, y: 95 }; // vertical diagonal sweep swat
        ball = { x: 62, y: 115 };
      } else if (shot.id === "inside-out") {
        frontAnkle = { x: 80, y: 175 };
        frontKnee = { x: 84, y: 150 };
        pelvis = { x: 102, y: 124 }; // backed away towards leg
        head = { x: 88, y: 70 };
        neck = { x: 91, y: 84 };
        leadElbow = { x: 72, y: 88 };
        leadHand = { x: 78, y: 112 };
        trailHand = { x: 80, y: 112 };
        batTip = { x: 55, y: 160 }; // drive over cover
        ball = { x: 72, y: 132 };
      } else if (shot.id === "chip-shot") {
        frontAnkle = { x: 68, y: 175 };
        frontKnee = { x: 72, y: 154 };
        pelvis = { x: 90, y: 122 };
        head = { x: 76, y: 70 };
        neck = { x: 79, y: 84 };
        leadElbow = { x: 68, y: 88 };
        leadHand = { x: 74, y: 115 };
        trailHand = { x: 76, y: 115 };
        batTip = { x: 78, y: 162 }; // vertical controlled loft
        ball = { x: 75, y: 140 };
      } else if (shot.id === "slog-shot") {
        frontAnkle = { x: 85, y: 175 };
        frontKnee = { x: 82, y: 152 };
        pelvis = { x: 105, y: 118 }; // clear leg width
        head = { x: 92, y: 65 };
        neck = { x: 95, y: 80 };
        leadElbow = { x: 75, y: 88 };
        leadHand = { x: 72, y: 108 };
        trailHand = { x: 74, y: 108 };
        batTip = { x: 35, y: 102 }; // flat brute swat
        ball = { x: 68, y: 105 };
      } else if (shot.id === "lofted-shot") {
        frontAnkle = { x: 64, y: 175 };
        frontKnee = { x: 68, y: 152 };
        pelvis = { x: 88, y: 122 };
        head = { x: 74, y: 70 };
        neck = { x: 77, y: 84 };
        leadElbow = { x: 60, y: 85 };
        leadHand = { x: 68, y: 112 };
        trailHand = { x: 70, y: 112 };
        batTip = { x: 60, y: 164 }; // lofted vertical drive
        ball = { x: 68, y: 132 };
      } else if (shot.id === "deep-inside") {
        frontAnkle = { x: 82, y: 175 };
        frontKnee = { x: 85, y: 150 };
        pelvis = { x: 108, y: 120 }; // deep inside leg backup
        head = { x: 94, y: 68 };
        neck = { x: 97, y: 82 };
        leadElbow = { x: 78, y: 88 };
        leadHand = { x: 84, y: 112 };
        trailHand = { x: 86, y: 112 };
        batTip = { x: 50, y: 145 }; // slash offside
        ball = { x: 78, y: 128 };
      } else if (shot.id === "pickup") {
        frontAnkle = { x: 66, y: 175 };
        frontKnee = { x: 70, y: 154 };
        pelvis = { x: 86, y: 124 };
        head = { x: 74, y: 72 };
        neck = { x: 77, y: 86 };
        leadElbow = { x: 65, y: 90 };
        leadHand = { x: 70, y: 115 };
        trailHand = { x: 72, y: 115 };
        batTip = { x: 66, y: 148 }; // vertical pick-up lift
        ball = { x: 76, y: 132 };
      } else if (shot.id === "shuffle-oo") {
        frontAnkle = { x: 50, y: 175 };
        frontKnee = { x: 55, y: 155 };
        pelvis = { x: 76, y: 120 }; // shuffled far offside
        head = { x: 66, y: 70 };
        neck = { x: 69, y: 84 };
        leadElbow = { x: 55, y: 92 };
        leadHand = { x: 60, y: 116 };
        trailHand = { x: 62, y: 116 };
        batTip = { x: 54, y: 142 }; // fine flick paddle
        ball = { x: 72, y: 138 };
      } else if (shot.id === "shuffle-ol") {
        backAnkle = { x: 135, y: 175 };
        backKnee = { x: 130, y: 152 };
        pelvis = { x: 116, y: 120 }; // shuffled legside
        head = { x: 104, y: 68 };
        neck = { x: 107, y: 82 };
        leadElbow = { x: 92, y: 90 };
        leadHand = { x: 98, y: 114 };
        trailHand = { x: 100, y: 114 };
        batTip = { x: 122, y: 150 }; // open guide
        ball = { x: 106, y: 135 };
      } else {
        // default cut or other
        frontAnkle = { x: 100, y: 175 };
        pelvis = { x: 120, y: 115 };
        leadHand = { x: 95, y: 110 };
        trailHand = { x: 97, y: 110 };
        batTip = { x: 65, y: 110 };
        ball = { x: 85, y: 110 };
      }
    } 
    else if (activeStep === "followThrough") {
      // High carry finish
      if (
        shot.id === "cover-drive" ||
        shot.id === "straight-drive" ||
        shot.id === "lofted-drive" ||
        shot.id === "straight-hit" ||
        shot.id === "inside-out" ||
        shot.id === "chip-shot" ||
        shot.id === "lofted-shot" ||
        shot.id === "deep-inside" ||
        shot.id === "flick" ||
        shot.id === "pickup"
      ) {
        frontAnkle = { x: 60, y: 175 };
        frontKnee = { x: 65, y: 150 };
        pelvis = { x: 80, y: 120 };
        head = { x: 75, y: 65 };
        neck = { x: 78, y: 78 };
        leadElbow = { x: 70, y: 50 };
        leadHand = { x: 85, y: 48 };
        trailHand = { x: 87, y: 48 };
        batTip = { x: 120, y: 20 }; // bat slung over shoulder high
      } else if (shot.id === "push-shot") {
        frontAnkle = { x: 70, y: 175 };
        frontKnee = { x: 75, y: 155 };
        pelvis = { x: 92, y: 122 };
        head = { x: 78, y: 70 };
        neck = { x: 81, y: 84 };
        leadElbow = { x: 72, y: 85 };
        leadHand = { x: 76, y: 114 };
        trailHand = { x: 78, y: 114 };
        batTip = { x: 76, y: 160 }; // still compact, slightly extended forward
      } else if (shot.id === "punch-shot") {
        backAnkle = { x: 135, y: 175 };
        backKnee = { x: 130, y: 150 };
        pelvis = { x: 115, y: 115 };
        head = { x: 105, y: 65 };
        neck = { x: 107, y: 80 };
        leadElbow = { x: 85, y: 75 };
        leadHand = { x: 92, y: 100 };
        trailHand = { x: 94, y: 100 };
        batTip = { x: 115, y: 118 }; // held forward at chest level
      } else if (
        shot.id === "steer-shot" ||
        shot.id === "glance" ||
        shot.id === "shuffle-ol"
      ) {
        backAnkle = { x: 135, y: 175 };
        backKnee = { x: 130, y: 152 };
        pelvis = { x: 118, y: 118 };
        head = { x: 110, y: 68 };
        neck = { x: 112, y: 82 };
        leadElbow = { x: 98, y: 88 };
        leadHand = { x: 110, y: 110 };
        trailHand = { x: 112, y: 110 };
        batTip = { x: 128, y: 122 }; // open bat slung low towards third man
      } else if (shot.id === "pull-shot") {
        pelvis = { x: 110, y: 110 };
        head = { x: 110, y: 60 };
        leadHand = { x: 120, y: 80 };
        trailHand = { x: 122, y: 80 };
        batTip = { x: 145, y: 100 }; // slung back
      } else if (
        shot.id === "sweep-shot" ||
        shot.id === "paddle-sweep" ||
        shot.id === "slog-sweep"
      ) {
        pelvis = { x: 90, y: 145 };
        backKnee = { x: 125, y: 175 };
        head = { x: 75, y: 105 };
        leadHand = { x: 105, y: 115 };
        trailHand = { x: 107, y: 115 };
        batTip = { x: 125, y: 145 }; // swept back
      } else if (shot.id === "shuffle-oo") {
        frontAnkle = { x: 50, y: 175 };
        frontKnee = { x: 55, y: 155 };
        pelvis = { x: 76, y: 120 };
        head = { x: 72, y: 70 };
        neck = { x: 75, y: 84 };
        leadElbow = { x: 62, y: 92 };
        leadHand = { x: 68, y: 116 };
        trailHand = { x: 70, y: 116 };
        batTip = { x: 68, y: 150 }; // compact twist finish on fine leg side
      } else if (shot.id === "helicopter-shot" || shot.id === "slog-shot") {
        pelvis = { x: 105, y: 115 };
        head = { x: 100, y: 65 };
        leadHand = { x: 120, y: 70 };
        trailHand = { x: 122, y: 70 };
        batTip = { x: 135, y: 30 }; // overhead blade loop high
      } else {
        // default high finish
        leadHand = { x: 90, y: 60 };
        trailHand = { x: 92, y: 60 };
        batTip = { x: 130, y: 35 };
      }
    }

    return { head, neck, pelvis, backAnkle, backKnee, frontAnkle, frontKnee, leadElbow, leadHand, trailElbow, trailHand, batTip, ball };
  };

  const pts = getAnatomicalJoints();

  return (
    <div id="batsman-animation-panel" className="flex flex-col bg-[#111520] border border-white/5 rounded-3xl p-6 shadow-sm overflow-hidden h-full">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-md">
            Interactive Biomechanical Analysis
          </span>
          <h3 className="font-serif font-medium text-slate-200 text-lg mt-1.5">Biomechanical Poster</h3>
        </div>
        
        <div className="flex gap-2">
          <button
            id="play-pause-animation-btn"
            onClick={togglePlay}
            className="p-2 border border-white/5 rounded-xl bg-[#171C28] hover:bg-[#1E2435] text-slate-300 hover:text-white transition cursor-pointer"
            title={isPlaying ? "Pause Sequence" : "Auto-Play Cycle"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            id="reset-animation-btn"
            onClick={resetAnimation}
            className="p-2 border border-white/5 rounded-xl bg-[#171C28] hover:bg-[#1E2435] text-slate-300 hover:text-white transition cursor-pointer"
            title="Reset to Stance"
          >
            <RotateCw size={16} />
          </button>
        </div>
      </div>

      {/* SVG Canvas Box */}
      <div className="flex-1 bg-gradient-to-b from-[#10131B] via-[#141824] to-[#10131B] border border-white/5 rounded-2xl relative min-h-[220px] flex items-center justify-center py-6 px-10">
        
        {/* Help tooltip */}
        <div className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 transition cursor-help" title="Observe the coordinate biomechanics of shoulder tilt, hip swivel, and contact zone.">
          <HelpCircle size={14} />
        </div>

        <svg viewBox="0 0 200 200" width="100%" height="220" className="max-w-[260px] drop-shadow-sm select-none">
          {/* Ground surface */}
          <line x1="20" y1="175" x2="180" y2="175" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Pitch markings */}
          <line x1="40" y1="175" x2="40" y2="171" stroke="#334155" strokeWidth="1.5" />
          <line x1="160" y1="175" x2="160" y2="171" stroke="#334155" strokeWidth="1.5" />

          {/* Stumps (Behind Batsman, e.g. at off-stump back boundary x=155) */}
          <g opacity="0.3">
            <line x1="150" y1="175" x2="150" y2="105" stroke="#475569" strokeWidth="2.5" />
            <line x1="154" y1="175" x2="154" y2="105" stroke="#475569" strokeWidth="2.5" />
            <line x1="158" y1="175" x2="158" y2="105" stroke="#475569" strokeWidth="2.5" />
            <line x1="148" y1="105" x2="160" y2="105" stroke="#475569" strokeWidth="3" strokeLinecap="round" /> {/* Bails */}
          </g>

          {/* Incoming Ball overlay on impact state */}
          {activeStep === "impact" && (
            <g>
              <circle cx={pts.ball.x} cy={pts.ball.y} r="5" fill="#C5A059" className="animate-pulse" />
              <circle cx={pts.ball.x} cy={pts.ball.y} r="8" fill="none" stroke="#C5A059" strokeWidth="1" opacity="0.4" className="animate-ping" />
              {/* Ball shadow on pitch */}
              <ellipse cx={pts.ball.x} cy="175" rx="4" ry="1.5" fill="rgba(0,0,0,0.4)" />
            </g>
          )}

          {/* BATSMAN DYNAMIC VECTOR */}
          <g strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300">
            
            {/* Back Leg */}
            <path 
              d={`M ${pts.pelvis.x} ${pts.pelvis.y} L ${pts.backKnee.x} ${pts.backKnee.y} L ${pts.backAnkle.x} ${pts.backAnkle.y}`}
              fill="none" 
              stroke="#64748b" 
              strokeWidth="6.5" 
            />
            {/* Front Leg */}
            <path 
              d={`M ${pts.pelvis.x} ${pts.pelvis.y} L ${pts.frontKnee.x} ${pts.frontKnee.y} L ${pts.frontAnkle.x} ${pts.frontAnkle.y}`}
              fill="none" 
              stroke="#64748b" 
              strokeWidth="6" 
            />

            {/* Spine/Torso */}
            <line x1={pts.pelvis.x} y1={pts.pelvis.y} x2={pts.neck.x} y2={pts.neck.y} stroke="#94a3b8" strokeWidth="7.5" />

            {/* Head & Helmet */}
            <circle cx={pts.head.x} cy={pts.head.y} r="10" fill="#1e293b" />
            <circle cx={pts.head.x} cy={pts.head.y} r="9.5" fill="#C5A059" /> {/* Golden helmet core */}
            {/* Helmet Visor */}
            <path d={`M ${pts.head.x - 7} ${pts.head.y - 2} L ${pts.head.x - 11} ${pts.head.y + 2}`} stroke="#ffffff" strokeWidth="2" />

            {/* Back Foot Pad protection simulation */}
            <path d={`M ${pts.backKnee.x} ${pts.backKnee.y - 3} L ${pts.backAnkle.x} ${pts.backAnkle.y + 1}`} stroke="#ffffff" strokeWidth="8" opacity="0.85" />
            {/* Front Foot Pad protection simulation */}
            <path d={`M ${pts.frontKnee.x} ${pts.frontKnee.y - 3} L ${pts.frontAnkle.x} ${pts.frontAnkle.y + 1}`} stroke="#ffffff" strokeWidth="8" opacity="0.85" />

            {/* Trailing Arm */}
            <path 
              d={`M ${pts.neck.x} ${pts.neck.y} L ${pts.trailElbow.x} ${pts.trailElbow.y} L ${pts.trailHand.x} ${pts.trailHand.y}`}
              fill="none"
              stroke="#cbd5e1" 
              strokeWidth="4.5" 
            />
            {/* Leading Arm */}
            <path 
              d={`M ${pts.neck.x} ${pts.neck.y} L ${pts.leadElbow.x} ${pts.leadElbow.y} L ${pts.leadHand.x} ${pts.leadHand.y}`}
              fill="none" 
              stroke="#f1f5f9" 
              strokeWidth="4.5" 
            />

            {/* CRICKET BAT */}
            {/* Handle/Grip */}
            <line x1={pts.leadHand.x} y1={pts.leadHand.y} x2={pts.leadHand.x + (pts.batTip.x - pts.leadHand.x) * 0.3} y2={pts.leadHand.y + (pts.batTip.y - pts.leadHand.y) * 0.3} stroke="#991b1b" strokeWidth="4" />
            {/* Bat Blade */}
            <line x1={pts.leadHand.x + (pts.batTip.x - pts.leadHand.x) * 0.3} y1={pts.leadHand.y + (pts.batTip.y - pts.leadHand.y) * 0.3} x2={pts.batTip.x} y2={pts.batTip.y} stroke="#A17036" strokeWidth="6.5" />

            {/* Gloves (colored circle) */}
            <circle cx={pts.leadHand.x} cy={pts.leadHand.y} r="3.5" fill="#f8fafc" stroke="#475569" strokeWidth="1" />
          </g>
        </svg>

        {/* Floating current position status */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] bg-[#111520] text-slate-400 px-3 py-1 rounded-full border border-white/5 shadow-sm whitespace-nowrap">
          Contact Pt: {activeStep === "impact" ? `🎯 IMPACT x:${pts.ball.x} y:${pts.ball.y}` : "STANDBY"}
        </div>
      </div>

      {/* Manual Timeline Slider controls */}
      <div className="mt-4 flex flex-col gap-3">
        {/* Playback Progress Track */}
        <div className="flex justify-between w-full gap-2">
          {stepsList.map((step) => (
            <button
              id={`batsman-step-tab-${step.key}`}
              key={step.key}
              onClick={() => {
                setIsPlaying(false);
                setActiveStep(step.key);
              }}
              className={`flex-1 text-center py-2 px-1 text-xs font-medium border rounded-xl transition cursor-pointer select-none ${getStepColorClass(step.key)}`}
            >
              <span className="block font-sans">{step.label.split(". ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Explanatory description card */}
        <div className="bg-[#161B26] border border-white/5 rounded-2xl p-4 text-xs text-slate-300 font-sans leading-relaxed transition-all min-h-[75px]">
          <span className="font-serif font-medium text-white block mb-1">
            {shot.breakdown[activeStep].title}
          </span>
          {shot.breakdown[activeStep].description}
          <div className="mt-2 text-[11px] text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1.5 rounded-lg border border-[#C5A059]/20 flex items-center gap-1.5">
            <span>👤 Biomechanics:</span>
            <span>{shot.breakdown[activeStep].bodyVisual}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
