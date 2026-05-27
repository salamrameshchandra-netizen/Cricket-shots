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

  // Trigonometric angle analyzer helper
  const getAngle = (
    a: { x: number; y: number },
    b: { x: number; y: number },
    c: { x: number; y: number }
  ): number => {
    const v1 = { x: a.x - b.x, y: a.y - b.y };
    const v2 = { x: c.x - b.x, y: c.y - b.y };
    const dot = v1.x * v2.x + v1.y * v2.y;
    const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
    const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
    if (mag1 === 0 || mag2 === 0) return 180;
    const cos = Math.min(1, Math.max(-1, dot / (mag1 * mag2)));
    return Math.round((Math.acos(cos) * 180) / Math.PI);
  };

  // Calculate live kinematic metrics dynamically from vector positions
  const spineAngle = getAngle(pts.neck, pts.pelvis, { x: pts.pelvis.x, y: pts.pelvis.y - 100 });
  const frontKneeAngle = getAngle(pts.pelvis, pts.frontKnee, pts.frontAnkle);
  const backKneeAngle = getAngle(pts.pelvis, pts.backKnee, pts.backAnkle);
  const batAngleVal = getAngle(pts.batTip, pts.leadHand, { x: pts.leadHand.x, y: pts.leadHand.y + 100 });
  const leadElbowAngle = getAngle(pts.neck, pts.leadElbow, pts.leadHand);

  // Interaction Toggles state
  const [showPlumbLine, setShowPlumbLine] = useState<boolean>(true);
  const [showSightline, setShowSightline] = useState<boolean>(true);
  const [showAngles, setShowAngles] = useState<boolean>(true);
  const [selectedJointId, setSelectedJointId] = useState<string | null>("head");

  // Custom defined physical descriptions for each joint node
  const jointNodes = [
    { id: "head", label: "Eye Alignment / Head Position", pt: pts.head, text: "Vision & spatial-orientation. Keeping the head steady and aligned with the pitch allows optimal stereoscopic tracking of delivery bounce height, length, and spin rotation." },
    { id: "leadElbow", label: "Leading Elbow Pivot", pt: pts.leadElbow, text: "Dictates the bat swing arc path. Maintaining a high, forward-facing leading elbow forces clean vertical balance, safeguarding stumps while keeping shots on the ground." },
    { id: "frontKnee", label: "Front Knee Flexion & Cushion", pt: pts.frontKnee, text: "Weight absorbency & reach. Flexing the knee smothers offside swings or sweep lengths. In front-foot play, it cushions 75-90% of forward-moving body mass." },
    { id: "backKnee", label: "Rear Knee Support & Brace", pt: pts.backKnee, text: "Posture brace center. Anchors weight during aggressive cross-batted pulls, or serves as a pivoted ground-kneeling anchor to sweep spinners cleanly under bails level." },
    { id: "pelvis", label: "Pelvic rotational center of mass (COM)", pt: pts.pelvis, text: "Determines physical stability state. Centered hips permit optimal waist rotation velocity, delivering torque from core down to bat tip during high impact." },
    { id: "batTip", label: "Bat Face & Blade Tilt", pt: pts.batTip, text: "Control point of hit trajectory. Dynamic angle at contact point dictates ground rolling drives versus massive loft clearances over cover and deep mid-wicket." }
  ];

  // Weight shifting telemetry
  const getWeightDistribution = () => {
    const isFront = shot.category === "front-foot";
    const isBack = shot.category === "back-foot";
    if (activeStep === "stance") return { front: 50, back: 50, desc: "Symmetrical Core Balance" };
    if (activeStep === "trigger") {
      if (isFront) return { front: 65, back: 35, desc: "Step Forward Load Commit" };
      return { front: 40, back: 60, desc: "Backward Pivot Coil" };
    }
    if (activeStep === "impact") {
      if (isFront) return { front: 85, back: 15, desc: "Aggressive Frontfoot Thrust" };
      if (isBack) return { front: 15, back: 85, desc: "Sturdy Rearfoot Loading" };
      return { front: 55, back: 45, desc: "Complex Unorthodox Transition" };
    }
    if (activeStep === "followThrough") {
      if (isFront) return { front: 90, back: 10, desc: "Full Forward Kinetic Release" };
      if (isBack) return { front: 35, back: 65, desc: "Follow-through Core Lock" };
      return { front: 50, back: 50, desc: "Rotational Swivel Equilibrium" };
    }
    return { front: 50, back: 50, desc: "Balanced State" };
  };

  const pkgWeight = getWeightDistribution();

  return (
    <div id="batsman-animation-panel" className="flex flex-col bg-[#111520] border border-white/5 rounded-3xl p-6 shadow-sm overflow-hidden h-full">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 border-b border-white/5 pb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-md">
            Biomechanical Diagnostics Console
          </span>
          <h3 className="font-serif font-medium text-slate-100 text-xl mt-1.5">Interactive Kinematic Poster</h3>
        </div>
        
        <div className="flex gap-2 self-stretch sm:self-auto justify-end">
          <button
            id="play-pause-animation-btn"
            onClick={togglePlay}
            className="p-2 px-3 border border-white/5 rounded-xl bg-[#171C28] hover:bg-[#1E2435] text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1.5 text-xs font-mono"
            title={isPlaying ? "Pause Sequence" : "Auto-Play Cycle"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? "PAUSE" : "PLAY LOOP"}</span>
          </button>
          <button
            id="reset-animation-btn"
            onClick={resetAnimation}
            className="p-2 border border-white/5 rounded-xl bg-[#171C28] hover:bg-[#1E2435] text-slate-300 hover:text-white transition cursor-pointer"
            title="Reset to Stance"
          >
            <RotateCw size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Left column: SVG + overlays toggler */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex-1 bg-gradient-to-b from-[#10131B] via-[#141824] to-[#10131B] border border-white/5 rounded-2xl relative min-h-[260px] flex items-center justify-center p-4">
            
            {/* Help tooltip */}
            <div className="absolute top-3 right-3 text-slate-400 hover:text-slate-200 transition cursor-help" title="Click on joints (Head, Elbow, Knee, Pelvis, Bat) to inspect their specific balance rules.">
              <HelpCircle size={15} />
            </div>

            {/* Dynamic Angle text labels over SVG if showAngles is true */}
            {showAngles && (
              <div id="kinematics-readout-hud" className="absolute top-3 left-3 flex flex-col gap-1 text-[10px] font-mono text-slate-400 bg-[#0F121C]/80 border border-white/5 p-2 rounded-lg backdrop-blur-sm z-10 select-none">
                <div className="text-[#C5A059] font-bold border-b border-white/5 pb-1 mb-1">📐 LIVE KINEMATICS</div>
                <div>Spine Lean: <span className="text-white font-semibold">{spineAngle}°</span></div>
                <div>Front Knee: <span className="text-white font-semibold">{frontKneeAngle}°</span></div>
                <div>Rear Knee: <span className="text-white font-semibold">{backKneeAngle}°</span></div>
                <div>Lead Elbow: <span className="text-white font-semibold">{leadElbowAngle}°</span></div>
                <div>Bat Slope: <span className="text-white font-semibold">{batAngleVal}°</span></div>
              </div>
            )}

            <svg viewBox="0 0 200 200" width="100%" height="250" className="max-w-[280px] drop-shadow-lg select-none">
              {/* Ground surface */}
              <line x1="20" y1="175" x2="180" y2="175" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Pitch markings */}
              <line x1="40" y1="175" x2="40" y2="171" stroke="#334155" strokeWidth="1.5" />
              <line x1="160" y1="175" x2="160" y2="171" stroke="#334155" strokeWidth="1.5" />

              {/* Stumps */}
              <g opacity="0.35">
                <line x1="150" y1="175" x2="150" y2="105" stroke="#475569" strokeWidth="2.5" />
                <line x1="154" y1="175" x2="154" y2="105" stroke="#475569" strokeWidth="2.5" />
                <line x1="158" y1="175" x2="158" y2="105" stroke="#475569" strokeWidth="2.5" />
                <line x1="148" y1="105" x2="160" y2="105" stroke="#475569" strokeWidth="3" strokeLinecap="round" /> {/* Bails */}
              </g>

              {/* Plumb Line (Gravity alignment) */}
              {showPlumbLine && (
                <g opacity="0.65">
                  <line x1={pts.pelvis.x} y1={pts.pelvis.y} x2={pts.pelvis.x} y2="175" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
                  <circle cx={pts.pelvis.x} cy="175" r="3" fill="#f43f5e" />
                  <text x={pts.pelvis.x + 5} y="172" fill="#f43f5e" fontSize="6.5" fontFamily="monospace" fontWeight="bold">COM PLUMB</text>
                </g>
              )}

              {/* Eye Sight Line */}
              {showSightline && (
                <g opacity="0.7">
                  {activeStep === "impact" ? (
                    <>
                      <line x1={pts.head.x - 3} y1={pts.head.y + 3} x2={pts.ball.x} y2={pts.ball.y} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1={pts.ball.x} y1={pts.ball.y} x2={pts.ball.x - 15} y2="175" stroke="#a1a1aa" strokeWidth="0.8" strokeDasharray="2,2" /> {/* projection */}
                    </>
                  ) : (
                    <line x1={pts.head.x - 4} y1={pts.head.y + 2} x2="60" y2="140" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                  )}
                </g>
              )}

              {/* Angle Arc guides directly onto joints */}
              {showAngles && (
                <g opacity="0.8">
                  {/* Front Knee flexion angle circle */}
                  <circle cx={pts.frontKnee.x} cy={pts.frontKnee.y} r="8" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="1,2" />
                  
                  {/* Spine core angle pivot arch */}
                  <circle cx={pts.pelvis.x} cy={pts.pelvis.y} r="10" fill="none" stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="2,2" />
                </g>
              )}

              {/* Incoming Ball overlay on impact state */}
              {activeStep === "impact" && (
                <g>
                  <circle cx={pts.ball.x} cy={pts.ball.y} r="5" fill="#C5A059" className="animate-pulse" />
                  <circle cx={pts.ball.x} cy={pts.ball.y} r="8" fill="none" stroke="#C5A059" strokeWidth="1" opacity="0.4" className="animate-ping" />
                  <ellipse cx={pts.ball.x} cy="175" rx="4" ry="1.5" fill="rgba(0,0,0,0.4)" />
                </g>
              )}

              {/* BATSMAN DYNAMIC VECTOR */}
              <g strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300">
                {/* Back Leg */}
                <path 
                  d={`M ${pts.pelvis.x} ${pts.pelvis.y} L ${pts.backKnee.x} ${pts.backKnee.y} L ${pts.backAnkle.x} ${pts.backAnkle.y}`}
                  fill="none" 
                  stroke="#52525b" 
                  strokeWidth="6" 
                />
                
                {/* Front Leg */}
                <path 
                  d={`M ${pts.pelvis.x} ${pts.pelvis.y} L ${pts.frontKnee.x} ${pts.frontKnee.y} L ${pts.frontAnkle.x} ${pts.frontAnkle.y}`}
                  fill="none" 
                  stroke="#71717a" 
                  strokeWidth="6" 
                />

                {/* Spine/Torso */}
                <line x1={pts.pelvis.x} y1={pts.pelvis.y} x2={pts.neck.x} y2={pts.neck.y} stroke="#a1a1aa" strokeWidth="7" />

                {/* Head & Helmet */}
                <circle cx={pts.head.x} cy={pts.head.y} r="10" fill="#1e293b" />
                <circle cx={pts.head.x} cy={pts.head.y} r="9.5" fill="#C5A059" /> {/* Golden helmet core */}
                <path d={`M ${pts.head.x - 7} ${pts.head.y - 1} L ${pts.head.x - 11} ${pts.head.y + 3}`} stroke="#ffffff" strokeWidth="2.5" />

                {/* Knee Protection Pads */}
                <path d={`M ${pts.backKnee.x} ${pts.backKnee.y - 5} L ${pts.backAnkle.x} ${pts.backAnkle.y + 2}`} stroke="#e4e4e7" strokeWidth="7.5" opacity="0.9" />
                <path d={`M ${pts.frontKnee.x} ${pts.frontKnee.y - 5} L ${pts.frontAnkle.x} ${pts.frontAnkle.y + 2}`} stroke="#ffffff" strokeWidth="7.5" opacity="0.95" />

                {/* Trailing Arm */}
                <path 
                  d={`M ${pts.neck.x} ${pts.neck.y} L ${pts.trailElbow.x} ${pts.trailElbow.y} L ${pts.trailHand.x} ${pts.trailHand.y}`}
                  fill="none"
                  stroke="#d4d4d8" 
                  strokeWidth="4" 
                />
                {/* Leading Arm */}
                <path 
                  d={`M ${pts.neck.x} ${pts.neck.y} L ${pts.leadElbow.x} ${pts.leadElbow.y} L ${pts.leadHand.x} ${pts.leadHand.y}`}
                  fill="none" 
                  stroke="#fafafa" 
                  strokeWidth="4.2" 
                />

                {/* CRICKET BAT */}
                <line x1={pts.leadHand.x} y1={pts.leadHand.y} x2={pts.leadHand.x + (pts.batTip.x - pts.leadHand.x) * 0.3} y2={pts.leadHand.y + (pts.batTip.y - pts.leadHand.y) * 0.3} stroke="#b91c1c" strokeWidth="4.2" />
                <line x1={pts.leadHand.x + (pts.batTip.x - pts.leadHand.x) * 0.3} y1={pts.leadHand.y + (pts.batTip.y - pts.leadHand.y) * 0.3} x2={pts.batTip.x} y2={pts.batTip.y} stroke="#B48A53" strokeWidth="6.8" />

                {/* Gloves */}
                <circle cx={pts.leadHand.x} cy={pts.leadHand.y} r="3.8" fill="#ffffff" stroke="#52525b" strokeWidth="1" />
              </g>

              {/* Clickable Vector Joint Nodes Overlays */}
              {jointNodes.map((joint) => {
                const isSelected = selectedJointId === joint.id;
                return (
                  <g 
                    key={joint.id} 
                    className="cursor-pointer group" 
                    onClick={() => setSelectedJointId(joint.id === selectedJointId ? null : joint.id)}
                  >
                    <circle 
                      cx={joint.pt.x} 
                      cy={joint.pt.y} 
                      r={isSelected ? "6.5" : "5"} 
                      fill={isSelected ? "#C5A059" : "rgba(23, 28, 40, 0.85)"} 
                      stroke={isSelected ? "#111520" : "#ffffff"} 
                      strokeWidth={isSelected ? "2.5" : "1.2"} 
                      className="transition-all duration-200"
                    />
                    <circle 
                      cx={joint.pt.x} 
                      cy={joint.pt.y} 
                      r={isSelected ? "11" : "8"} 
                      fill="none" 
                      stroke={isSelected ? "#C5A059" : "#C5A059"} 
                      strokeWidth="1.2" 
                      opacity={isSelected ? "0.9" : "0"} 
                      className="group-hover:opacity-60 transition-opacity duration-200 animate-pulse"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Floating current position status */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] bg-[#111520] border border-white/5 text-slate-400 px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
              Contact Zone: {activeStep === "impact" ? `🎯 IMPACT LINE at x:${pts.ball.x}` : "ALIGNING COREG"}
            </div>
          </div>

          {/* Diagnostics Overlays Toggles */}
          <div className="bg-[#171C28]/60 border border-white/5 rounded-xl p-3 flex flex-wrap gap-4 items-center justify-center text-xs">
            <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider mr-1">Toggles:</span>
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-[#C5A059] transition select-none">
              <input type="checkbox" checked={showPlumbLine} onChange={(e) => setShowPlumbLine(e.target.checked)} className="rounded border-white/10 bg-[#111520] text-[#C5A059] focus:ring-0 w-3.5 h-3.5 cursor-pointer" />
              <span>Gravity Plumb</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-[#C5A059] transition select-none">
              <input type="checkbox" checked={showSightline} onChange={(e) => setShowSightline(e.target.checked)} className="rounded border-white/10 bg-[#111520] text-[#C5A059] focus:ring-0 w-3.5 h-3.5 cursor-pointer" />
              <span>Eye Alignment</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-[#C5A059] transition select-none">
              <input type="checkbox" checked={showAngles} onChange={(e) => setShowAngles(e.target.checked)} className="rounded border-white/10 bg-[#111520] text-[#C5A059] focus:ring-0 w-3.5 h-3.5 cursor-pointer" />
              <span>Angle Overlays</span>
            </label>
          </div>
        </div>

        {/* Right column: Dynamic telemetry logs, active joint inspection, description */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Active Step Explanatory Header */}
          <div className="bg-[#161B26] border border-[#C5A059]/10 rounded-2xl p-4 font-sans leading-relaxed relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C5A059]/5 to-transparent rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#C5A059] uppercase">
                Step-by-Step Breakdown
              </span>
            </div>
            
            <h4 className="font-serif font-medium text-white text-base mb-1">
              {shot.breakdown[activeStep].title}
            </h4>
            
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {shot.breakdown[activeStep].description}
            </p>
            
            <div className="text-[11px] text-[#C5A059] bg-[#C5A059]/5 border border-[#C5A059]/10 rounded-xl px-3 py-2 flex items-start gap-2">
              <span className="mt-0.5 select-none">⚙️</span>
              <div>
                <span className="font-bold text-white block mb-0.5">Physical Instruction:</span>
                <span>{shot.breakdown[activeStep].bodyVisual}</span>
              </div>
            </div>
          </div>

          {/* Interactive Joint Diagnostic Inspection Desk */}
          <div className="bg-[#131722] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 min-h-[160px] justify-between">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                Anatomical Joint Diagnostics
              </span>
              <span className="text-[9px] font-mono text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded">
                Interactive Map
              </span>
            </div>

            {selectedJointId ? (
              <div className="flex-1 flex flex-col justify-center">
                {jointNodes.filter(j => j.id === selectedJointId).map(joint => (
                  <div key={joint.id} className="animate-fadeIn">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full bg-current ${
                        joint.id === 'head' ? 'text-[#C5A059]' :
                        joint.id === 'leadElbow' ? 'text-sky-400' :
                        joint.id === 'frontKnee' ? 'text-amber-500' :
                        joint.id === 'backKnee' ? 'text-emerald-500' :
                        joint.id === 'pelvis' ? 'text-rose-400' : 'text-purple-400'
                      }`} />
                      <h5 className="font-sans font-bold text-slate-100 text-sm">
                        {joint.label}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {joint.text}
                    </p>
                    
                    {/* Add exact dynamic reading context in biomechanics tooltip */}
                    <div className="mt-3 pt-2.5 border-t border-white/5 flex justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Current Vector Value:</span>
                      <span className="text-[#C5A059] font-bold">
                        {joint.id === 'head' && `Level Focus (Lean: ${spineAngle}°)`}
                        {joint.id === 'leadElbow' && `Lever Flexion: ${leadElbowAngle}°`}
                        {joint.id === 'frontKnee' && `Knee Flexion: ${frontKneeAngle}°`}
                        {joint.id === 'backKnee' && `Rear knee brace: ${backKneeAngle}°`}
                        {joint.id === 'pelvis' && `COM coordinates: [${pts.pelvis.x}, ${pts.pelvis.y}]`}
                        {joint.id === 'batTip' && `Blade incline: ${batAngleVal}°`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-1.5 select-none text-center">
                <span>📍 No Joint Selected</span>
                <span className="text-[10px]">Click any of the glowing circular joints on the poster skeleton to extract coaching details.</span>
              </div>
            )}
          </div>

          {/* Dynamic Biomechanical Telemetry Desk (Live Gauges) */}
          <div className="bg-[#11141E] border border-white/5 rounded-2xl p-4 flex flex-col gap-2.5">
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              Live Biomechanical Telemetry
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-[#171C28]/50 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500">COR BALANCE INDEX</span>
                <span className="text-[#C5A059] font-bold text-sm mt-1">
                  {pkgWeight.desc}
                </span>
                <div className="w-full bg-slate-800 h-1 rounded overflow-hidden mt-1.5">
                  <div className="bg-[#C5A059] h-full transition-all duration-300" style={{ width: `${pkgWeight.front}%` }} />
                </div>
                <div className="flex justify-between text-[8px] text-slate-500 mt-1">
                  <span>Front {pkgWeight.front}%</span>
                  <span>{pkgWeight.back}% Back</span>
                </div>
              </div>

              <div className="bg-[#171C28]/50 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500">LEVER ACCURACY</span>
                <span className="text-sky-400 font-bold text-sm mt-1">
                  {Math.round(100 - (180 - leadElbowAngle) / 3.5)}% Efficiency
                </span>
                <span className="text-[9px] text-slate-400 mt-1">
                  Elbow {leadElbowAngle}° orientation
                </span>
              </div>

              <div className="bg-[#171C28]/50 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500">BAT VERTICALITY</span>
                <span className="text-amber-500 font-bold text-sm mt-1">
                  {batAngleVal < 35 ? "High Vertical Face" : batAngleVal < 65 ? "Diagonal Blade" : "Horizontal Cross"}
                </span>
                <span className="text-[9px] text-slate-400 mt-1">
                  Incline: {batAngleVal}° to ground
                </span>
              </div>

              <div className="bg-[#171C28]/50 border border-white/5 rounded-xl p-2.5 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500">POSTURAL STABILITY</span>
                <span className="text-emerald-500 font-bold text-sm mt-1">
                  {spineAngle < 35 && (Math.abs(pts.head.x - pts.pelvis.x)) < 30 ? "Optimal Alignment" : "Dynamic Lean Shift"}
                </span>
                <span className="text-[9px] text-slate-400 mt-1">
                  Spine lean: {spineAngle}°
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Manual Timeline Slider controls */}
      <div className="mt-5 border-t border-white/5 pt-4">
        {/* Playback Progress Track */}
        <div id="timeline-tabs-row" className="flex justify-between w-full gap-2">
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
      </div>
    </div>
  );
}

