export interface ShotBreakdownStep {
  title: string;
  description: string;
  bodyVisual: string; // Brief description of batsman body position
}

export interface CricketShot {
  id: string;
  name: string;
  category: "front-foot" | "back-foot" | "unorthodox";
  categoryLabel: string;
  description: string;
  difficulty: number; // 1 to 5
  risk: number; // 1 to 5
  power: number; // 1 to 5
  idealBallTypes: string[]; // e.g., "Full Length", "Short Pitched"
  targetZones: string[]; // e.g., "Cover", "Point"
  famousExponents: string[]; // e.g., ["Virat Kohli", "Babar Azam"]
  youtubeId: string; // YouTube video ID
  coachingTips: string[];
  commonMistakes: string[];
  breakdown: {
    stance: ShotBreakdownStep;
    trigger: ShotBreakdownStep;
    impact: ShotBreakdownStep;
    followThrough: ShotBreakdownStep;
  };
  svgAnimationPath: {
    backlift: string;
    swing: string;
    contact: string;
    finish: string;
  };
  perfectTimingStart: number; // 0.60 (phase of ball flight, e.g. 0.65 to 0.75 is perfect)
  perfectTimingEnd: number;
}

export interface FieldZone {
  id: string;
  name: string;
  angleRange: [number, number]; // degrees on the circle (0 degree is straight down the ground / bowler)
  distance: "close" | "mid" | "deep";
  shots: string[]; // Shot IDs associated with this zone
}
