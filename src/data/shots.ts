import { CricketShot, FieldZone } from "../types";

export const SHOTS_DATA: CricketShot[] = [
  {
    id: "cover-drive",
    name: "Cover Drive",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "The crown jewel of elegant batting. Played by leaning forward onto the front foot and driving a full-pitched ball outside the off-stump through the cover region with a vertical bat.",
    difficulty: 3,
    risk: 2,
    power: 3,
    idealBallTypes: ["Full Length", "Overpitched", "Outside Off-Stump"],
    targetZones: ["Cover", "Extra Cover"],
    famousExponents: ["Virat Kohli", "Babar Azam", "Kumar Sangakkara", "Ian Bell"],
    youtubeId: "Y21v_Y8NNDg",
    coachingTips: [
      "Keep your head leading into the line of the ball.",
      "Ensure the front knee bends toward the pitch of the ball to transfer weight.",
      "The bat face must remain straight and vertical face down to prevent catching in the air.",
      "Keep your top-hand grip tight and bottom-hand loose for control."
    ],
    commonMistakes: [
      "Reaching for the ball without moving the feet, leading to a loose drive or slip catch.",
      "Using too much bottom-hand, which lifts the ball in the air.",
      "Head falling over to the off-side, losing balance."
    ],
    breakdown: {
      stance: {
        title: "Stance & Eye-Line",
        description: "Stand balanced with feet shoulder-width apart, head steady, and eyes completely horizontal. Keep the bat relaxed, ready for backlift.",
        bodyVisual: "Perfect standing balance with knee-flex and neutral back lift pointing to second slip."
      },
      trigger: {
        title: "Trigger & Step Forward",
        description: "Take a step forward towards the line of the ball with your front foot. Point your front shoulder and toe directly towards the cover region.",
        bodyVisual: "Front foot advancing, front shoulder dipping, bat raised high at the backlift phase."
      },
      impact: {
        title: "High-Elbow Contact",
        description: "Strike the ball right below your eyes. Present a straight, vertical bat. Keep the top elbow raised high pointing down the ground/covers.",
        bodyVisual: "Torso bent, front knee bent, vertical bat kissing the ball close to the front pad."
      },
      followThrough: {
        title: "Balanced Flow",
        description: "Allow the bat to follow through in a clean vertical arc. Hold your pose for a second to show total control and balance.",
        bodyVisual: "High shoulder pose, bat high behind the back, weight completely resting on the front foot."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 85,155 L 85,190",
      finish: "M 85,85 L 85,115 M 85,95 L 90,85 M 85,115 L 75,150 L 70,180 M 85,115 L 100,150 L 105,180 M 90,85 L 95,50 M 95,50 L 115,25"
    },
    perfectTimingStart: 0.68,
    perfectTimingEnd: 0.76
  },
  {
    id: "pull-shot",
    name: "Pull Shot",
    category: "back-foot",
    categoryLabel: "Orthodox Back Foot",
    description: "A powerful and cross-batted shot played off the back foot against short-pitched deliveries. The batsman pivots on the front leg, swivels the hips, and pulls the ball through mid-wicket or square leg.",
    difficulty: 4,
    risk: 4,
    power: 5,
    idealBallTypes: ["Short Pitched", "Rib-height", "On/Outside Off-Stump"],
    targetZones: ["Mid-Wicket", "Square Leg"],
    famousExponents: ["Rohit Sharma", "Ricky Ponting", "Viv Richards", "Ben Stokes"],
    youtubeId: "yE7XN9_Ond8",
    coachingTips: [
      "Quickly shift your weight to the back foot to gain room and height.",
      "Keep your body on top of the ball to drag it downwards rather than launching it.",
      "Roll your wrists right at the moment of impact to play it along the ground.",
      "Watch the seam of the ball continuously to handle extra bounce."
    ],
    commonMistakes: [
      "Playing too early or too late, leading to top edges directly to fine leg/square leg.",
      "Not getting back and across, resulting in cramped arms and getting caught or bowled.",
      "Lifting the head early, losing sight of the ball on impact."
    ],
    breakdown: {
      stance: {
        title: "Ready Stance",
        description: "Keep lightweight and fast on your toes. A high, active backlift is critical to respond to short-pitched bouncers.",
        bodyVisual: "Light stance, knees springs, bat held ready to load power."
      },
      trigger: {
        title: "Back and Across Shift",
        description: "Back foot takes a decisive step back and across towards the off-stump. Hips coil, loading energy, as the hands raise the bat high.",
        bodyVisual: "Back leg anchoring, chest turning squarer, chin tucked into front shoulder, bat held toweringly high."
      },
      impact: {
        title: "Swivel & Sweep-Swing",
        description: "Pivot on your front leg, swinging the bat in a horizontal plane. Strike the ball out in front of the body with arms fully extended.",
        bodyVisual: "Hips fully open, chest facing down the wicket, horizontal bat sweeping across the chest level."
      },
      followThrough: {
        title: "The Wrap Follow-through",
        description: "Complete the rotational swivel, wrapping the bat around your back or neck area. The weight ends mostly on the back foot or nicely balanced.",
        bodyVisual: "Full pivot complete, bat slung over opposite shoulder, looking down mid-wicket."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 110,80 L 110,115 M 110,95 L 90,95 M 110,115 L 110,150 L 110,180 M 110,115 L 125,150 L 125,180 M 90,95 L 50,95",
      finish: "M 110,80 L 110,115 M 110,95 L 115,85 M 110,115 L 110,150 L 110,180 M 110,115 L 125,150 L 125,180 M 115,85 L 130,105 L 140,85"
    },
    perfectTimingStart: 0.52,
    perfectTimingEnd: 0.62
  },
  {
    id: "straight-drive",
    name: "Straight Drive",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "The most authoritative orthodox shot in cricket. It requires perfect timing and high-elbow technique, driving the ball directly straight down the ground, often past the bowler.",
    difficulty: 3,
    risk: 1,
    power: 3,
    idealBallTypes: ["Full Length", "Mainly on stumps or middle-off"],
    targetZones: ["Straight Bowl / Straight Long-off", "Long-on"],
    famousExponents: ["Sachin Tendulkar", "Kevin Pietersen", "Damian Martyn", "Kane Williamson"],
    youtubeId: "3tPOfvWfPTo",
    coachingTips: [
      "Play with a high vertical elbow and let the bat swing directly through the line of delivery.",
      "The head should lean directly over the ball on contact to ensure it travels parallel to the grass.",
      "The bat face should remain flat and square to the target.",
      "Do not push with the bottom-hand; it's a touch and timing shot."
    ],
    commonMistakes: [
      "Leading with a closed bat face, leading to a leading edge back to the bowler.",
      "Front heel not planted correctly, causing the drive to slice or spray wide off-side."
    ],
    breakdown: {
      stance: {
        title: "Standard Balanced Stance",
        description: "Stand square, eyes level, focusing closely on the bowler's release hand.",
        bodyVisual: "Balanced neutral posture looking forward, bat resting behind heels."
      },
      trigger: {
        title: "Step Down the Pitch",
        description: "Take a subtle forward trigger step towards the bowler, keeping pelvis and shoulders in absolute alignment.",
        bodyVisual: "Front toe pointing straight, shoulders remaining perpendicular to the crease line."
      },
      impact: {
        title: "T-Elbow Classic Strike",
        description: "Meet the ball close to the front shoe. The bat is fully vertical, with the top elbow making a pristine high-V shape.",
        bodyVisual: "Pristine vertical alignment, bottom hand barely kissing the grip, chest over ball."
      },
      followThrough: {
        title: "The Presentation Finish",
        description: "Keep of flow going. Complete the full swing straight forward so the batter shows the maker's name of the bat to the bowler.",
        bodyVisual: "High upright back, bat looking straight up, complete poise on the forward leg."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 95,80 L 95,115 M 95,95 L 95,115 M 95,115 L 80,150 L 75,180 M 95,115 L 110,150 L 115,180 M 95,115 L 95,160 M 95,160 L 95,195",
      finish: "M 95,80 L 95,115 M 95,95 L 100,85 M 95,115 L 80,150 L 75,180 M 95,115 L 110,150 L 115,180 M 100,85 L 100,45 M 100,45 L 100,15"
    },
    perfectTimingStart: 0.70,
    perfectTimingEnd: 0.78
  },
  {
    id: "sweep-shot",
    name: "Sweep Shot",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot/Spin Special",
    description: "An incredibly valuable tool against spin bowling. The batsman drops low down to one knee and sweeps the ball in a horizontal, low arc towards the square leg or fine leg region.",
    difficulty: 4,
    risk: 3,
    power: 3,
    idealBallTypes: ["Good Length/Full", "On Leg/Middle Stump", "Spinners"],
    targetZones: ["Square Leg", "Fine Leg"],
    famousExponents: ["Joe Root", "Andy Flower", "Younis Khan", "AB de Villiers"],
    youtubeId: "C7cMv0Xm6oA",
    coachingTips: [
      "Step forward and get your head down low, aligned with the ball's bounce.",
      "Your back knee must touch the pitch to act as a stable anchor.",
      "Bring the bat down from high to low to keep the ball of the grass.",
      "Reach out in front of the pad to smother spin before it breaks."
    ],
    commonMistakes: [
      "Sweeping deliveries outside off-stump, frequently resulting in top-edges or LBW.",
      "Lifting the head too early, causing a fresh air shot or leading edge."
    ],
    breakdown: {
      stance: {
        title: "Balanced Stance",
        description: "Active grip ready for forward-knee-kneel.",
        bodyVisual: "Standard stance, active wrists."
      },
      trigger: {
        title: "The Drop & Reach",
        description: "Quick drop of the rear knee to the turf. Reach forward with the front foot, stretching flat towards the ball.",
        bodyVisual: "Front knee bent deeply, rear knee touching grass, torso parallel, hands extending bat."
      },
      impact: {
        title: "The Sweeping Paddle",
        description: "Sweep the bat across the body horizontally to capture the ball around the pad level.",
        bodyVisual: "Low horizontal strike, body extremely low, head over balls contact zone."
      },
      followThrough: {
        title: "Paddled Arc Completion",
        description: "Allow the swing momentum to circle the bat flat around your shoulders.",
        bodyVisual: "Low profile pose, bat fully rested near shoulder blade, looking down the fine leg lane."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,100 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,100 L 75,85 M 75,85 L 60,65",
      contact: "M 90,110 L 90,140 M 90,125 L 75,135 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 75,135 L 50,145 M 50,145 L 20,150",
      finish: "M 90,110 L 90,140 M 90,125 L 95,120 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 95,120 L 110,115 L 125,125"
    },
    perfectTimingStart: 0.65,
    perfectTimingEnd: 0.74
  },
  {
    id: "helicopter-shot",
    name: "Helicopter Shot",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Modern",
    description: "One of the most visually stunning shots in modern cricket. Consists of hitting incredibly full yorker-length balls with absolute wrist speed, ending in an overhead bat-spin resemble helicopter blades.",
    difficulty: 5,
    risk: 5,
    power: 5,
    idealBallTypes: ["Yorker Length", "Full Toss", "At the toes"],
    targetZones: ["Mid-Wicket", "Long-on", "Cow Corner"],
    famousExponents: ["MS Dhoni", "Rashid Khan", "Hardik Pandya"],
    youtubeId: "79-T6a19Pgw",
    coachingTips: [
      "Generate colossal bat speed primarily through a snapping wrist motion right at contact.",
      "Maintain a strong base; keep your feet firmly grounded to absorb back-kick recoil.",
      "Keep your body weight slightly backward to make room under the high-yorker arc.",
      "Unwind your arms fully in a complete vertical circle."
    ],
    commonMistakes: [
      "Mistiming the quick scoop, leading to direct yorker bowled or hitting your own toes.",
      "Ineffective wrist snap, which fails to generate elevation and leaves you caught at mid-wicket."
    ],
    breakdown: {
      stance: {
        title: "Solid Anchor Stance",
        description: "Brace feet firmly. Prepare for high explosive, rapid loading of energy.",
        bodyVisual: "Crouched down, solid core, bat held low in catcher-zone."
      },
      trigger: {
        title: "Wrist Lock Load",
        description: "Raise backlift high. Hand knuckles point upright. Keep feet static and plant the back leg solidly.",
        bodyVisual: "Bat loaded high, wrists cocked, eyes looking laser-sharp on the bowler's hand."
      },
      impact: {
        title: "The Super Wrist Snap",
        description: "Flick the wrists violently upwards just as the ball reaches your shoe level. Force the ball skyward.",
        bodyVisual: "Explosive arm extension, massive bat flex towards the sky, head watching toes."
      },
      followThrough: {
        title: "The Rotor Spin",
        description: "Unleash the wrist recoil, letting the bat circle completely over your head in a full 360-degree rotor motion.",
        bodyVisual: "Full torso twist, bat spinning overhead like blades, massive follow through complete."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,85 L 90,120 M 90,100 L 85,120 M 90,120 L 70,155 L 65,185 M 90,120 L 105,155 L 110,185 M 85,120 L 85,160 M 85,160 L 85,195",
      finish: "M 105,75 L 105,105 M 105,90 L 115,100 M 105,105 L 90,145 L 85,180 M 105,105 L 120,145 L 125,180 M 115,100 L 135,70 L 145,55"
    },
    perfectTimingStart: 0.72,
    perfectTimingEnd: 0.81
  },
  {
    id: "reverse-sweep",
    name: "Reverse Sweep",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Modern",
    description: "An incredibly deceptive shot. Played by switching the hands or bat direction on impact to sweep the ball into the vacant off-side region from a leg-side delivery.",
    difficulty: 5,
    risk: 4,
    power: 2,
    idealBallTypes: ["Good Length", "Middle or Leg-stump line", "Slow or Spin Bowling"],
    targetZones: ["Point", "Third Man"],
    famousExponents: ["Glenn Maxwell", "AB de Villiers", "Eoin Morgan", "Jos Buttler"],
    youtubeId: "qS16h8WovD4",
    coachingTips: [
      "Commit to the sweep early but conceal your wrist flip until the bowler delivers.",
      "Switch your grip or cross your wrists smoothly for control.",
      "The bottom face of the bat must slice the ball safely down to the off-side grass.",
      "Use your core muscles to maintain balance in a crouched state."
    ],
    commonMistakes: [
      "Telegraphing the turn too early, allowing the bowler to adjust line.",
      "Missed connection over off-stump resulting in simple LBW or bowled."
    ],
    breakdown: {
      stance: {
        title: "Standard Stance",
        description: "Maintain a completely normal appearance to deceive the bowler.",
        bodyVisual: "Standard orthodox setup."
      },
      trigger: {
        title: "The Reverse Pivot",
        description: "Get onto one knee. Swivel your shoulders 180 degrees in the opposite direction. Cross your dominant and sub wrists.",
        bodyVisual: "Shoulders turned, torso twisted clockwise, bat raised facing backward towards fine leg."
      },
      impact: {
        title: "The Reverse Slap",
        description: "Sweep the ball towards the off-side. Slap it using the reverse face of the bat across point.",
        bodyVisual: "Low body posture, hands extended reverse direction, making clean contact outside off-stump."
      },
      followThrough: {
        title: "Low Offside Flow",
        description: "Finish with a clean circle down to third-man offside direction.",
        bodyVisual: "Low wrap complete, eyes tracking the ball passing the slip cordon."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,100 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,100 L 75,85 M 75,85 L 60,65",
      contact: "M 90,110 L 90,140 M 90,125 L 105,135 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 105,135 L 130,145 M 130,145 L 160,150",
      finish: "M 90,110 L 90,140 M 90,125 L 85,120 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 85,120 L 70,115 L 55,125"
    },
    perfectTimingStart: 0.63,
    perfectTimingEnd: 0.72
  },
  {
    id: "scoop-shot",
    name: "Scoop / Ramp",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Modern",
    description: "An incredibly fast-paced, high-risk shot. The batsman kneels down on one knee or drops deep into the crease, using the bowler's own speed to scoop full-length balls straight over the wicketkeeper's head.",
    difficulty: 5,
    risk: 5,
    power: 2,
    idealBallTypes: ["Full length / Yorker", "Over 135 km/h (Fast pace)", "Straight"],
    targetZones: ["Fine Leg", "Behind Wicketkeeper / Third Man"],
    famousExponents: ["Tillakaratne Dilshan", "AB de Villiers", "Jos Buttler", "Brendon McCullum"],
    youtubeId: "2Pia_V_J7pA",
    coachingTips: [
      "Use the bowler's raw pace instead of swinging heavily-timing is everything.",
      "Get beneath the bouncing trajectory of the ball.",
      "Keep face of bat fully flat pointing straight skyward under your eyes.",
      "Ensure you wear a secure helmet and keep eyes on the ball until contact."
    ],
    commonMistakes: [
      "Swinging the bat forwards rather than angling it backwards, leading to simple caught-and-bowled.",
      "Getting hit on the helmet or face due to incorrect body position."
    ],
    breakdown: {
      stance: {
        title: "Mobile Stance",
        description: "Stay extremely light on knees, ready to sink down on a full-length delivery.",
        bodyVisual: "Balanced high-ready stance."
      },
      trigger: {
        title: "The Sink Down",
        description: "Drop low under the ball's incoming arc. Align chest and bat face flat under the delivery trajectory.",
        bodyVisual: "Legs deeply crouched, torso falling backward/down, bat raised pointing flat to the sky."
      },
      impact: {
        title: "The Flat Paddle Redirect",
        description: "Let the ball hit the upward-facing bat. Tilt the wrist slightly back to redirect the flyball over the keeper.",
        bodyVisual: "Bat held completely flat overhead under the eye line, redirecting ball backwards."
      },
      followThrough: {
        title: "The Low Balance Hold",
        description: "Cushion the weight after impact. Keep balance to dodge any falling bouncers.",
        bodyVisual: "Fully reclined or ducking posture, bat low on chest, ball sailing behind."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 95,95 L 95,125 M 95,110 L 95,115 M 95,125 L 80,160 L 75,185 M 95,125 L 110,160 L 115,185 M 95,115 L 95,75 M 95,75 L 95,50",
      finish: "M 95,95 L 95,125 M 95,110 L 105,105 M 95,125 L 80,160 L 75,185 M 95,125 L 110,160 L 115,185 M 105,105 L 115,95 M 115,95 L 120,80"
    },
    perfectTimingStart: 0.74,
    perfectTimingEnd: 0.83
  },
  {
    id: "square-cut",
    name: "Square Cut",
    category: "back-foot",
    categoryLabel: "Orthodox Back Foot",
    description: "An elegant and powerful shot played by stepping back and across off-stump with a horizontal bat to hit short, wide deliveries past the point region.",
    difficulty: 3,
    risk: 2,
    power: 4,
    idealBallTypes: ["Short Pitched", "Wide Outside Off-Stump"],
    targetZones: ["Point", "Cover"],
    famousExponents: ["Sachin Tendulkar", "Alastair Cook", "Marcus Trescothick", "Mithali Raj"],
    youtubeId: "EorN_pZkC1E",
    coachingTips: [
      "Step back and across with your rear foot toward the off-stump.",
      "Extend your arms fully to utilize width and speed of delivery.",
      "Roll your wrists downward upon contact to keep the ball on the grass.",
      "Use gravity and fall of hands to chop down on the ball."
    ],
    commonMistakes: [
      "Cutting too close to the body without foot movement, feeding slip catches.",
      "Not getting on top of the bounce, causing a slice flyball to deep point."
    ],
    breakdown: {
      stance: {
        title: "Standard Active Stance",
        description: "Balanced, responsive, prepared for quick weight-shift.",
        bodyVisual: "Steady upright stance, ready to hop back."
      },
      trigger: {
        title: "Step Back and Across",
        description: "Move the rear foot back and toward the offside, opening up room for hands to extend wide.",
        bodyVisual: "Back leg stepped towards off-stump, eyes tracking ball width, hands high."
      },
      impact: {
        title: "The Slashing Cut",
        description: "Bring the bat down in a horizontal slash. Strike the ball with arms fully extended wide outside off-stump.",
        bodyVisual: "Bat horizontal, hands stretched wide, head focused on ball contacting off-side edge of bat."
      },
      followThrough: {
        title: "High Offside Finish",
        description: "Continue the cross-bat swing wrapping around the opposite shoulder in a majestic crescent motion.",
        bodyVisual: "Upper body swiveled, front leg lifted slightly, bat raised high near opposite shoulder."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 105,80 L 105,115 M 105,95 L 85,95 M 105,115 L 105,150 L 105,180 M 105,115 L 120,150 L 120,180 M 85,95 L 45,95",
      finish: "M 110,80 L 110,115 M 110,95 L 115,85 M 110,115 L 110,150 L 110,180 M 110,115 L 125,150 L 125,180 M 115,85 L 130,105 L 135,120"
    },
    perfectTimingStart: 0.55,
    perfectTimingEnd: 0.65
  },
  {
    id: "lofted-drive",
    name: "Lofted Drive",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "A majestic power stroke where the batsman gets under the pitch of a full-length delivery and lofts it cleanly over the infielders. Requires pristine head positioning, complete arm extension, and a dramatic vertical follow-through for safety.",
    difficulty: 4,
    risk: 4,
    power: 4,
    idealBallTypes: ["Full Length", "Overpitched", "Slightly Flighted"],
    targetZones: ["Cover & Extra Cover", "Bowler / Straight Drive", "Mid-On"],
    famousExponents: ["Saurav Ganguly", "MS Dhoni", "Virender Sehwag", "Travis Head"],
    youtubeId: "wEcl5bNqC_Y",
    coachingTips: [
      "Keep your eyes locked on the ball to judge the exact pitch of the delivery.",
      "Extend your arms fully through the swing to attain maximum elevation and power.",
      "Hold your head completely steady down the target line to avoid slicing.",
      "Do not snap your wrists too early; let the bat's natural swing loft the ball."
    ],
    commonMistakes: [
      "Swinging with bent elbows, leading to high caught-out risks at mid-off/mid-on.",
      "Lifting your head early to watch the shot, resulting in a top-edge."
    ],
    breakdown: {
      stance: {
        title: "Balanced Base",
        description: "Stand balanced with a neutral posture and eyes completely level on the bowler.",
        bodyVisual: "Perfect standing balance with knee-flex and neutral backlift."
      },
      trigger: {
        title: "Reach & Load",
        description: "Stride forward toward the pitch of the ball. Lower the front shoulder to load the upward lofting arc.",
        bodyVisual: "Decisive forward stride, front toe pointing towards target, bat cocked high behind."
      },
      impact: {
        title: "Under-Ball Swoop",
        description: "Meet the ball just prior to the bounce peak. Sweep the bat face slightly upwards with clean, explosive arm extension.",
        bodyVisual: "Extended arms, upward tilted bat face, chest facing straight down the ground."
      },
      followThrough: {
        title: "Majestic High Carry",
        description: "Complete a fully extended vertical follow-through, keeping hands extremely high and holding the balanced pose.",
        bodyVisual: "Arms extended sky-high, chest facing straight, weight completely resting on the front foot."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 85,155 L 85,190",
      finish: "M 85,85 L 85,115 M 85,95 L 90,85 M 85,115 L 75,150 L 70,180 M 85,115 L 100,150 L 105,180 M 90,85 L 95,50 M 95,50 L 115,25"
    },
    perfectTimingStart: 0.68,
    perfectTimingEnd: 0.76
  },
  {
    id: "push-shot",
    name: "Controlled Push",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "A highly defensive and tactical shot played with soft hands. The batsman strides forward right next to the pitch of the ball, smothering the spin or movement, and pushes it softly into gaps to rotate strike easily.",
    difficulty: 2,
    risk: 1,
    power: 1,
    idealBallTypes: ["Good Length", "On Stumps", "Spinners on Middle Stump Line"],
    targetZones: ["Cover & Extra Cover", "Bowler / Straight Drive", "Mid-On"],
    famousExponents: ["Rahul Dravid", "Kane Williamson", "Joe Root", "Shivnarine Chanderpaul"],
    youtubeId: "T-T3Wz19P8w",
    coachingTips: [
      "Play with extremely soft hands, relaxing your bottom-hand grip completely.",
      "Step your front foot right next to the line of the ball.",
      "Keep the bat head angled downwards to ensure the ball doesn't fly.",
      "Maintain head weight directly over the landing spot on contact."
    ],
    commonMistakes: [
      "Pushing with a hard bottom wrist, resulting in a catch directly to silly-mid-on or mid-off.",
      "Inadequate front stride, leaving a dangerous gap between bat and pad."
    ],
    breakdown: {
      stance: {
        title: "Classical Stance",
        description: "Remain balanced with your focus centered strictly on the bowler's release point.",
        bodyVisual: "Balanced neutral stance, vertical bat profile."
      },
      trigger: {
        title: "Frontward Lean",
        description: "Small forward trigger following the ball line. Keep your front elbow high and aligned with off-stump.",
        bodyVisual: "Front knee flexing, body weight shifting slightly forward."
      },
      impact: {
        title: "Soft Defensive Touch",
        description: "Let the ball impact the face of the bat directly below the eyes. Soft wrist cushioning keeps it grounded.",
        bodyVisual: "Vertical bat right next to the front pad, head aligned right over the contact point."
      },
      followThrough: {
        title: "Poised Defensive Stop",
        description: "Stop the flow of the bat immediately upon impact to smother any rebound.",
        bodyVisual: "Compact finished shape, vertical bat resting near toes, fully controlled stance."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 85,155 L 85,190",
      finish: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 89,145 M 89,145 L 89,175"
    },
    perfectTimingStart: 0.65,
    perfectTimingEnd: 0.74
  },
  {
    id: "punch-shot",
    name: "Back Foot Punch",
    category: "back-foot",
    categoryLabel: "Orthodox Back Foot",
    description: "An elegant and stylish back-foot stroke. The batsman moves back and across, rises high on their toes to ride the bounce, and punches a short-of-a-length delivery through the cover or point region with superb timing and a straight vertical bat.",
    difficulty: 4,
    risk: 2,
    power: 3,
    idealBallTypes: ["Short of a Length", "Outside Off-Stump", "Bouncing Delivery"],
    targetZones: ["Cover & Extra Cover", "Point"],
    famousExponents: ["Damien Martyn", "Sachin Tendulkar", "Shubman Gill", "Jacques Kallis"],
    youtubeId: "2zLz_bTqC_8",
    coachingTips: [
      "Rise high on your back-foot toes to get your head and chest on top of the bounce.",
      "Punch with a high leading left elbow to guide the ball strictly along the ground.",
      "Extend your arms fully right at contact to achieve pristine timing.",
      "Keep your body weight central and completely upright; do not fall backward."
    ],
    commonMistakes: [
      "Staying flat-footed, which takes away height control and timing.",
      "Cramping yourself by staying too close to the line of delivery, leading to slip catches."
    ],
    breakdown: {
      stance: {
        title: "Upright Stance",
        description: "Maintain a high static poise, waiting for length diagnostic clues.",
        bodyVisual: "Upright balanced ready position."
      },
      trigger: {
        title: "Rise & Across",
        description: "Shift your back foot towards the stump line while coiling the hips to absorb the incoming bounce.",
        bodyVisual: "Back foot stepping back and across, hands elevated high carrying the bat."
      },
      impact: {
        title: "High Vertical Punch",
        description: "Deliver a punch downward into the ball. The vertical bat meets the ball right beneath the eyes for absolute control.",
        bodyVisual: "Standing tall, hips high on back toe, straight vertical bat contacting ball outside off."
      },
      followThrough: {
        title: "Crisp Checked Finish",
        description: "Complete a short, beautiful check-swing holding the elbows high at chest level.",
        bodyVisual: "Upright high posture, vertical bat presented forward at torso height."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 100,80 L 100,115 M 100,95 L 90,115 M 100,115 L 100,150 L 100,180 M 100,115 L 115,150 L 115,180 M 90,115 L 90,155 L 90,190",
      finish: "M 100,80 L 100,115 M 100,95 L 105,85 M 100,115 L 100,150 L 100,180 M 100,115 L 115,150 L 115,180 M 105,85 L 110,50 L 115,25"
    },
    perfectTimingStart: 0.58,
    perfectTimingEnd: 0.68
  },
  {
    id: "steer-shot",
    name: "Late Steer",
    category: "back-foot",
    categoryLabel: "Orthodox Back Foot",
    description: "A highly delicate, touch-player stroke. The batsman waits deep in the crease and uses the bowler's raw pace, opening the face of the bat at the absolute last fraction of a second to guide the ball past the slip cordon down to third man.",
    difficulty: 4,
    risk: 3,
    power: 1,
    idealBallTypes: ["Good Length", "Short of Length", "Outside Off-Stump"],
    targetZones: ["Third Man / Slips", "Point"],
    famousExponents: ["Kane Williamson", "Mahela Jayawardene", "Michael Hussey", "Hashim Amla"],
    youtubeId: "gS9Ah8WovB3",
    coachingTips: [
      "Wait as long as possible; literally guide the ball right inside your body line.",
      "Use the pace of the ball to redirect it; do not swing the arm heavily.",
      "Gently roll the wrists outward to open the bat face late.",
      "Keep your eyes pinned onto the precise contact point of the ball on the edge."
    ],
    commonMistakes: [
      "Swinging or trying to force the shot, which results in a simple edge to the keeper.",
      "Opening the bat face too early, alerting the slip cordon or hitting the stumps."
    ],
    breakdown: {
      stance: {
        title: "Neutral Focus",
        description: "Balanced baseline setup, prepare to hop back deep into the crease.",
        bodyVisual: "Standard standing balance."
      },
      trigger: {
        title: "Create Depth",
        description: "Take a step deep back into the crease to allow extra reaction time.",
        bodyVisual: "Back leg deep beside offstump, elbows relaxed."
      },
      impact: {
        title: "Late Angle Touch",
        description: "Meet the ball right as it passes the hip line. Pivot the wrist slightly to guide it safely backward.",
        bodyVisual: "Hands close to hips, bat face opened pointing towards the slip cordon."
      },
      followThrough: {
        title: "Relaxed Poise",
        description: "Let the bat swing terminate easily with a soft open-faced finish.",
        bodyVisual: "Stable stance, bat pointing down sideways towards slips, completely relaxed wrists."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 100,80 L 100,115 M 100,95 L 90,95 M 100,115 L 100,150 L 100,180 M 100,115 L 115,150 L 115,180 M 90,95 L 120,115 L 125,125",
      finish: "M 100,80 L 100,115 M 100,95 L 105,85 M 100,115 L 100,150 L 100,180 M 100,115 L 115,150 L 115,180 M 105,85 L 120,80 L 125,75"
    },
    perfectTimingStart: 0.74,
    perfectTimingEnd: 0.82
  },
  {
    id: "straight-hit",
    name: "Straight Hit",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "A classic power stroke where the batsman steps forward or stands tall to loft the delivery directly over the bowler's head. Unlike the classical straight drive, it is designed for maximum leverage and aerial route.",
    difficulty: 3,
    risk: 3,
    power: 5,
    idealBallTypes: ["Full Length", "Half-Volley", "Flighted Delivery"],
    targetZones: ["Bowler / Straight Drive", "Mid-On"],
    famousExponents: ["Sir Viv Richards", "Sachin Tendulkar", "Ben Stokes", "Mithali Raj"],
    youtubeId: "vA7XN9_Onb1",
    coachingTips: [
      "Step your front foot firmly down the middle line, forming a rock-solid base.",
      "Swing the bat in a full vertical circle from low to high to maximize loft.",
      "Keep your body fully balanced on contact to transfer weight elegantly.",
      "Ensure your head is steady and facing straight down the target lane."
    ],
    commonMistakes: [
      "Hitting across the line, leading to caught-out errors at mid-on or mid-off.",
      "Losing balance or shifting weight slightly sideways, which saps the power output."
    ],
    breakdown: {
      stance: {
        title: "Active Base",
        description: "Spread feet comfortably, loading the arms for a massive vertical launch.",
        bodyVisual: "Wide-base balanced stance."
      },
      trigger: {
        title: "Solid Foot Plant",
        description: "Commit the front foot down the line of delivery, maintaining absolute alignment of shoulders.",
        bodyVisual: "Front stride planted straight, shoulders perpendicular to crease."
      },
      impact: {
        title: "High-Lift Collision",
        description: "Core uncoils explosively as the vertical bat meets the ball slightly ahead of the front pad.",
        bodyVisual: "Full arm extension, solid head weight leaning forward, high contact center."
      },
      followThrough: {
        title: "Full Sky Flow",
        description: "Let the bat flow skyward in a maximum arc, ending high with chest completely open and facing the target.",
        bodyVisual: "Hands pointing straight up to the sky, spine straight, total control."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 95,80 L 95,115 M 95,95 L 95,115 M 95,115 L 80,150 L 75,180 M 95,115 L 110,150 L 115,180 M 95,115 L 95,160 M 95,160 L 95,195",
      finish: "M 95,80 L 95,115 M 95,95 L 100,85 M 95,115 L 80,150 L 75,180 M 95,115 L 110,150 L 115,180 M 100,85 L 100,45 M 100,45 L 100,15"
    },
    perfectTimingStart: 0.68,
    perfectTimingEnd: 0.77
  },
  {
    id: "flick",
    name: "Flick Shot",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "An elegant, wrist-dominated shot played by flicking a full-ish delivery on middle or leg stump down towards mid-wicket or square leg, utilizing a quick rolling of the wrists at the absolute moment of contact.",
    difficulty: 3,
    risk: 2,
    power: 3,
    idealBallTypes: ["Full Length", "On Leg Stump", "At the Pads"],
    targetZones: ["Mid-Wicket", "Square Leg"],
    famousExponents: ["Mohammad Azharuddin", "VVS Laxman", "Steve Smith", "Virat Kohli"],
    youtubeId: "c_l67Xm52E4",
    coachingTips: [
      "Keep the head steady and aligned with the line of delivery.",
      "Close the face of the bat precisely at impact, rolling the wrists over.",
      "Step forward side-on towards the pitch of the ball, then let the hands flow.",
      "Don't force with shoulder power; rely purely on timing and wrist snap."
    ],
    commonMistakes: [
      "Closing the bat face too early, leading to high leading edges back down the ground.",
      "Foot moving too far across, blocking the bat swing and risking LBW."
    ],
    breakdown: {
      stance: {
        title: "Balanced Stance",
        description: "Stand relaxed, knees soft, with eyes level to monitor the ball trajectory.",
        bodyVisual: "Standard standing balance, vertical bat posture."
      },
      trigger: {
        title: "Step to Line",
        description: "Stride forward towards the ball's pitch line while keeping the shoulders side-on to maintain balance.",
        bodyVisual: "Front knee flexing towards the ball line, hands loaded at waist level."
      },
      impact: {
        title: "The Wrist Flick",
        description: "Strike the ball just out in front of the pad. Roll the wrists sharply under the eyes.",
        bodyVisual: "Vertical bat rolling over at contact point, hips starting to swivel slightly inside."
      },
      followThrough: {
        title: "Wicked Twist Finish",
        description: "Let the bat swing terminate fine towards the leg side, with the wrists completely rolled and torso angled.",
        bodyVisual: "Low profile pose, bat wrapping around waist on leg side, head facing target."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,85 L 90,120 M 90,100 L 85,115 M 90,120 L 72,152 L 68,185 M 90,120 L 106,152 L 112,185 M 85,115 L 74,124 M 74,124 L 62,130",
      finish: "M 90,85 L 90,120 M 90,100 L 86,108 M 90,120 L 72,152 L 68,185 M 90,120 L 106,152 L 112,185 M 86,108 L 72,130 L 58,145"
    },
    perfectTimingStart: 0.66,
    perfectTimingEnd: 0.74
  },
  {
    id: "glance",
    name: "Leg Glance",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "A classic timing shot played by gently angling the face of the vertical bat to redirect a straight or leg-side delivery fine down towards the fine leg region, utilizing the ball's existing momentum.",
    difficulty: 3,
    risk: 1,
    power: 1,
    idealBallTypes: ["Good Length", "On Leg Stump", "At the Pads / Straight"],
    targetZones: ["Fine Leg / Behind Wicket"],
    famousExponents: ["Sachin Tendulkar", "Brian Lara", "Sir Don Bradman", "Alastair Cook"],
    youtubeId: "3v8N9oCnBDg",
    coachingTips: [
      "Lean forward onto your front foot right into the line of delivery.",
      "Wait for the ball to get close to the pads; don't reach out.",
      "Gently deflect the ball with an angled, vertical bat face.",
      "Keep hands relaxed to absorb ball speed."
    ],
    commonMistakes: [
      "Closing the bat face too early, which risks trapping you LBW if you miss.",
      "Pushing too hard instead of letting the pace of the ball do the work."
    ],
    breakdown: {
      stance: {
        title: "Poised Stance",
        description: "Balanced, neutral posture looking down the pitch with a vertical bat profile.",
        bodyVisual: "Perfect standing balance, neutral posture."
      },
      trigger: {
        title: "Forward Slide",
        description: "Stride forward comfortably to smother the bounce, matching the line of the straight delivery.",
        bodyVisual: "Front knee flexing forward, hands holding the bat low near thighs."
      },
      impact: {
        title: "The Subtle Deflection",
        description: "Gently kiss the ball with an open-to-closed angle slip right next to your pads.",
        bodyVisual: "Pristine vertical alignment, bat face twisted slightly towards the leg."
      },
      followThrough: {
        title: "Soft Poised Finish",
        description: "Complete a compact and controlled follow-through, stopping the bat near your front foot.",
        bodyVisual: "Compact finished shape, bat resting near toes, fully poised."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 92,85 L 92,120 M 92,100 L 87,118 M 92,120 L 75,152 L 70,185 M 92,120 L 107,152 L 113,185 M 87,118 L 84,152 L 81,175",
      finish: "M 92,85 L 92,120 M 92,100 L 87,118 M 92,120 L 75,152 L 70,185 M 92,120 L 107,152 L 113,185 M 87,118 L 85,145 L 83,165"
    },
    perfectTimingStart: 0.72,
    perfectTimingEnd: 0.82
  },
  {
    id: "paddle-sweep",
    name: "Paddle Sweep",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Spin Special",
    description: "A highly delicate and deceptive sweep shot against spin bowling. The batsman sinks down onto one knee and gently uses the bat face to scoop, paddle, or tickle the ball over or around short fine leg.",
    difficulty: 4,
    risk: 3,
    power: 2,
    idealBallTypes: ["Good Length", "Middle or Leg Line", "Spin Bowling"],
    targetZones: ["Fine Leg / Behind Wicket"],
    famousExponents: ["Sachin Tendulkar", "Andy Flower", "Steve Smith", "Kane Williamson"],
    youtubeId: "8D_F1u0Xm6o",
    coachingTips: [
      "Sink low with your head directly over the path of the ball.",
      "Reach forward ahead of the pads to capture the spin.",
      "Angle the bat face slightly upwards to guide the ball delicately fine.",
      "Do not swing hard; just absorb and redirect the ball's friction."
    ],
    commonMistakes: [
      "Playing a hard sweep on a straight fast delivery, missing and risking LBW.",
      "Lifting head early, losing sight of the ball edge."
    ],
    breakdown: {
      stance: {
        title: "Classical Base",
        description: "Standard balanced base, with relaxed hands prepared for target alignment.",
        bodyVisual: "Standard standing balance."
      },
      trigger: {
        title: "Kneel and Extend",
        description: "Drop the back knee low to the grass. Step the front foot forward towards the line and extend arms.",
        bodyVisual: "Low profile, back knee grounded, arms reaching forward of pad."
      },
      impact: {
        title: "The Paddle Touch",
        description: "Intercept the ball before the bounce peak with an angled horizontal bat face.",
        bodyVisual: "Low horizontal strike, bat face angled flat, head directly over contact point."
      },
      followThrough: {
        title: "Gentle Arc End",
        description: "Gently carry the bat sideways behind you, watching the ball paddle past short fine leg.",
        bodyVisual: "Relaxed low wrap posture, bat terminating near shoulder."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,100 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,100 L 75,85 M 75,85 L 60,65",
      contact: "M 90,110 L 90,140 M 90,125 L 75,135 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 75,135 L 50,145 L 30,148",
      finish: "M 90,110 L 90,140 M 90,125 L 94,120 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 94,120 L 108,110 L 120,112"
    },
    perfectTimingStart: 0.64,
    perfectTimingEnd: 0.73
  },
  {
    id: "slog-sweep",
    name: "Slog Sweep",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Power Play",
    description: "A high-risk, high-reward power stroke primarily played against spin bowlers. The batsman drops down to one knee, opens up the hips, and swings the bat in a massive diagonal arc to loft the ball over deep mid-wicket.",
    difficulty: 4,
    risk: 4,
    power: 5,
    idealBallTypes: ["Flighted Deliveries", "Good Length on stumps", "Spinners"],
    targetZones: ["Mid-Wicket", "Square Leg"],
    famousExponents: ["Mahela Jayawardene", "Glenn Maxwell", "Yuvraj Singh", "Viv Richards", "KL Rahul"],
    youtubeId: "Z-gS9Ah8Wov",
    coachingTips: [
      "Judge the flight early to get down onto your back knee cleanly.",
      "Swing from low to high in a large diagonal plane to achieve maximum leverage.",
      "Keep your head down on impact to prevent slicing or top-edges.",
      "Clear your front leg to open up your torso power base."
    ],
    commonMistakes: [
      "Sweeping too early or outside off-stump, leading to leading edges directly to deep cover.",
      "Losing balance or falling sideways, which saps power and accuracy."
    ],
    breakdown: {
      stance: {
        title: "Steady Base",
        description: "Stable stance, keeping knees soft and wrists relaxed.",
        bodyVisual: "Standard stance, active wrists."
      },
      trigger: {
        title: "Kneel & Open Up",
        description: "Drop the back knee to the grass while sliding the front foot slightly away to open up the hips.",
        bodyVisual: "Deep front bend, back knee on pitch, torso pivoted slightly open."
      },
      impact: {
        title: "Diagonal Swat",
        description: "Deliver a powerful upward hit, catching the flighted ball at its bounce peak.",
        bodyVisual: "Low body posture, horizontal-to-vertical bat swing, chest facing mid-wicket."
      },
      followThrough: {
        title: "Rotational Wrap",
        description: "Follow through completely, wrapping the bat around your shoulders to complete a massive hip torso rotation.",
        bodyVisual: "Full torso twist, bat slung high over opposite shoulder, eye tracking high ball flight."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,100 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,100 L 75,85 M 75,85 L 60,65",
      contact: "M 90,110 L 90,140 M 90,125 L 75,135 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 75,135 L 50,115 L 35,95",
      finish: "M 90,110 L 90,140 M 90,125 L 95,120 M 90,140 L 60,160 L 50,185 M 90,140 L 115,185 M 95,120 L 110,95 L 125,75"
    },
    perfectTimingStart: 0.62,
    perfectTimingEnd: 0.71
  },
  {
    id: "inside-out",
    name: "Inside Out Drive",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot / Advanced",
    description: "An incredibly elegant stroke requiring immense timing. The batsman backs away towards the leg side to create off-side rooms, then drives a straight or leg-side delivery cleanly over the extra cover region.",
    difficulty: 4,
    risk: 3,
    power: 4,
    idealBallTypes: ["Flighted/Spinners", "Good Length", "Middle or On-Stump Delivery"],
    targetZones: ["Cover & Extra Cover"],
    famousExponents: ["Suresh Raina", "Gautam Gambhir", "AB de Villiers", "Michael Hussey"],
    youtubeId: "X_wEcl5bNqC",
    coachingTips: [
      "Step your front foot wide towards the leg-side to open up offside angles.",
      "Keep your body tall and balanced on contact.",
      "Swing the bat with a high leading elbow, slicing inside the ball trajectory.",
      "Maintain a high vertical finish for control."
    ],
    commonMistakes: [
      "Getting too close to the line, resulting in cramping of arms and thick inside-edges.",
      "Failure to clear the front leg sufficiently, blocking the offside swing."
    ],
    breakdown: {
      stance: {
        title: "Classical Stance",
        description: "Stay balanced, anticipating length clues from spinners.",
        bodyVisual: "Standard standing balance."
      },
      trigger: {
        title: "Legside Slide",
        description: "Back away with the rear foot, letting the front foot follow slightly towards the leg-side crease.",
        bodyVisual: "Torso backed away towards leg-side, shoulders aligned wide of stumps."
      },
      impact: {
        title: "Inside Slice Strike",
        description: "Meet the ball slightly ahead of the pad body line, presenting a wide open vertical face.",
        bodyVisual: "Deep extension of arms, vertical bat face wide of pads, head leaning over ball."
      },
      followThrough: {
        title: "Cover Flow Finish",
        description: "Loft the follow-through high towards cover. Maintain high left elbow poise.",
        bodyVisual: "High elegant stance, bat pointing high over covers behind back."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 85,80 L 85,115 M 85,95 L 76,110 M 85,115 L 70,150 L 65,180 M 85,115 L 100,150 L 105,180 M 76,110 L 66,132 L 56,155",
      finish: "M 85,85 L 85,115 M 85,95 L 90,85 M 85,115 L 70,150 L 65,180 M 85,115 L 100,150 L 105,180 M 90,85 L 95,50 M 95,50 L 120,30"
    },
    perfectTimingStart: 0.68,
    perfectTimingEnd: 0.76
  },
  {
    id: "chip-shot",
    name: "Chip Shot",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot / Advanced",
    description: "A highly controlled check-drive used to loft the ball softly over the close-in fielders. Played with high-timing efficiency and partially relaxed wrists rather than brute muscle power.",
    difficulty: 2,
    risk: 2,
    power: 2,
    idealBallTypes: ["Full Length", "Mainly on stumps", "Medium Pace or Spin"],
    targetZones: ["Bowler / Straight Drive", "Mid-On", "Cover & Extra Cover"],
    famousExponents: ["Virat Kohli", "Kane Williamson", "Mahela Jayawardene", "Michael Clarke"],
    youtubeId: "2Pia_V_J7pB",
    coachingTips: [
      "Let the ball meet the middle of the bat rather than forcing a heavy punch.",
      "Check the follow-through; don't swing fully down-the-ground.",
      "Relax the bottom hand slightly to attain higher cushion control.",
      "Keep head exactly over the ball line."
    ],
    commonMistakes: [
      "Swinging too hard and dragging the ball flat towards mid-off/mid-on catchers.",
      "Failure to reach the pitch, leading to simple caught-and-bowled chances."
    ],
    breakdown: {
      stance: {
        title: "Compact Stance",
        description: "Balanced, focused, preparing for a subtle forward shift.",
        bodyVisual: "Neutral steady stance, vertical bat profile."
      },
      trigger: {
        title: "Minor Trigger",
        description: "Short forward stride towards the ball's bouncing spot.",
        bodyVisual: "Front knee flexing forward, body leaning softly."
      },
      impact: {
        title: "Checked Lift",
        description: "Strike under the ball with a slightly opened vertical face, checking the force right on impact.",
        bodyVisual: "Vertical bat right next to front leg, elbows high but loose, bat face tilted 10 degrees back."
      },
      followThrough: {
        title: "Checked Poise Finish",
        description: "Halt the bat swing midway at shoulder level to prevent excessive height.",
        bodyVisual: "Compact checking pose, elbows held high, bat suspended forward horizontally."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 82,150 L 78,170",
      finish: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 94,105 M 94,105 L 102,95"
    },
    perfectTimingStart: 0.66,
    perfectTimingEnd: 0.75
  },
  {
    id: "slog-shot",
    name: "Slog Shot",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Power Play",
    description: "An aggressive, cross-batted horizontal launch designed strictly for clearing fielders. The batsman plants or clears the front foot, drops the shoulder, and strikes across the line in a furious diagonal arc.",
    difficulty: 3,
    risk: 4,
    power: 5,
    idealBallTypes: ["Good Length", "Middle or Off-Stump", "Underpitched Delivery"],
    targetZones: ["Mid-Wicket", "Square Leg"],
    famousExponents: ["Chris Gayle", "Virender Sehwag", "Sanath Jayasuriya", "Andre Russell"],
    youtubeId: "b8N9oCnBDgy",
    coachingTips: [
      "Clear the front foot early to generate massive chest rotation width.",
      "Keep the base rock-solid to absorb the explosive hip torque.",
      "Swing with fully extended arms for supreme impact speed.",
      "Accept elevated risks in trade of absolute boundary distance."
    ],
    commonMistakes: [
      "Swinging without watching the seam, resulting in bowled/skied top-edges.",
      "Losing footing balance, which compromises the leverage arc completely."
    ],
    breakdown: {
      stance: {
        title: "Explosive Prep",
        description: "Wide stance base, prepared to clear the legs rapidly.",
        bodyVisual: "Wide balanced base, hands held high."
      },
      trigger: {
        title: "Front Foot Clearance",
        description: "Clear the front leg wide towards the legside to unlock massive swing width.",
        bodyVisual: "Front leg stepped aside, back foot solid, bat loaded tower-high."
      },
      impact: {
        title: "Brute Swat",
        description: "Swing the bat diagonally in a massive diagonal crescent to intercept the ball out in front.",
        bodyVisual: "Horizontal shoulder pivot, bat slicing at 45 degrees, chest fully open."
      },
      followThrough: {
        title: "Full Torque Carry",
        description: "Pivot fully on the front leg, looping the bat completely over the back neck line.",
        bodyVisual: "Rotational swivel complete, bat slung deep, facing mid-wicket."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 105,80 L 105,115 M 105,95 L 88,100 M 105,115 L 105,150 L 105,180 M 105,115 L 120,150 L 120,180 M 88,100 L 60,100 L 45,95",
      finish: "M 110,80 L 110,115 M 110,95 L 115,85 M 110,115 L 110,150 L 110,180 M 110,115 L 125,150 L 125,180 M 115,85 L 132,105 L 142,118"
    },
    perfectTimingStart: 0.54,
    perfectTimingEnd: 0.64
  },
  {
    id: "lofted-shot",
    name: "Lofted Shot",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Modern",
    description: "An intentional aerial strike designed to clear the infield. Played by getting underneath the flight of the delivery and driving upwards over the bowler's head or straight boundary lines.",
    difficulty: 3,
    risk: 3,
    power: 4,
    idealBallTypes: ["Full Length", "Mainly on stumps", "Slow or Medium Deliveries"],
    targetZones: ["Bowler / Straight Drive", "Mid-On", "Cover & Extra Cover"],
    famousExponents: ["Virender Sehwag", "Brendon McCullum", "Adam Gilchrist", "Jos Buttler"],
    youtubeId: "wEcl5bNqC_Z",
    coachingTips: [
      "Keep head fully over the midline to curb unwanted slices.",
      "Get beneath the bouncing trajectory of the ball.",
      "Maintain a vertical face but lofted at 30 degrees during impact.",
      "Keep arms fully extended straight through the swing path."
    ],
    commonMistakes: [
      "Swinging with bent elbows, leading to high skied catches in the infield.",
      "Lifting head early, losing ball contact tracing."
    ],
    breakdown: {
      stance: {
        title: "Active Base",
        description: "Balanced baseline, ready for dynamic arm-extension loft.",
        bodyVisual: "Standard standing balance."
      },
      trigger: {
        title: "Slight Forward Stride",
        description: "Step forward toward the ball pitch, lowering the front shoulder slightly to allow upward leverage.",
        bodyVisual: "Front knee flexing, body weight driving slightly forward."
      },
      impact: {
        title: "Vertical Loft Strike",
        description: "Strike under the ball with fully extended arms, presenting an upward-tilted straight face.",
        bodyVisual: "Arms extended, vertical upward bat, head aligned with impact point."
      },
      followThrough: {
        title: "High Balance Finish",
        description: "Complete full upward vertical swing, holding the high balance on front leg.",
        bodyVisual: "High elegant finish, elbows high, bat slung on top of back shoulder."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,80 L 90,115 M 90,95 L 85,115 M 90,115 L 75,150 L 70,180 M 90,115 L 105,150 L 110,180 M 85,115 L 74,136 L 68,155",
      finish: "M 85,85 L 85,115 M 85,95 L 90,85 M 85,115 L 75,150 L 70,180 M 85,115 L 100,150 L 105,180 M 90,85 L 94,52 L 108,32"
    },
    perfectTimingStart: 0.67,
    perfectTimingEnd: 0.76
  },
  {
    id: "deep-inside",
    name: "Deep Inside Out",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Modern",
    description: "An aggressive variation of the classical inside-out stroke. The batsman takes a quick step back and deep inside the crease, clears the front leg to create massive off-side width, and slashes flighted or full deliveries flat over cover or point.",
    difficulty: 5,
    risk: 4,
    power: 4,
    idealBallTypes: ["Flighted Deliveries", "Spinners outside Off-stump", "Full Toss"],
    targetZones: ["Cover & Extra Cover", "Point"],
    famousExponents: ["Glenn Maxwell", "AB de Villiers", "David Miller", "Liam Livingstone"],
    youtubeId: "C7cMv0Xm6oB",
    coachingTips: [
      "Move back and towards the legside early to identify ball height.",
      "Clear the front hip fully to liberate arm speed offside.",
      "Swing flat across offside to generate linear flat trajectory.",
      "Dorsal weight should pivot towards the rear foot."
    ],
    commonMistakes: [
      "Cramping up due to slow footwork, slicing the ball to deep cover.",
      "Inability to lock the core, causing skew/slice catches."
    ],
    breakdown: {
      stance: {
        title: "Aggressive Poise",
        description: "Active high foot movement readiness, balanced base.",
        bodyVisual: "Standard standing base."
      },
      trigger: {
        title: "Step Back Deep",
        description: "Hop deep inside the crease towards leg stumps to maximize clearance length.",
        bodyVisual: "Back foot hopped back-left, front leg open, bat raised high."
      },
      impact: {
        title: "Flat Offside Cleave",
        description: "Deliver a flat slashing impact outside off-stump, slicing inside the ball path.",
        bodyVisual: "Extended offside reach, torso backed away, wrist speed driving bat forward."
      },
      followThrough: {
        title: "Offside Release Finish",
        description: "Sling the bat flat on an offside crescent, maintaining control on the rear foot.",
        bodyVisual: "Upper body swiveled, bat wrapping low around offside chest."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 95,80 L 95,115 M 95,95 L 82,108 M 95,115 L 80,150 L 75,180 M 95,115 L 110,150 L 115,180 M 82,108 L 60,112 L 40,115",
      finish: "M 100,80 L 100,115 M 100,95 L 105,85 M 100,115 L 100,150 L 100,180 M 100,115 L 115,150 L 115,180 M 105,85 L 85,82 L 65,85"
    },
    perfectTimingStart: 0.60,
    perfectTimingEnd: 0.70
  },
  {
    id: "pickup",
    name: "Pick-Up Shot",
    category: "front-foot",
    categoryLabel: "Orthodox Front Foot",
    description: "An elegant, sweep-like vertical drive where the batsman gets underneath a full/overpitched delivery tracking towards the stumps and uses a snapping vertical lift to fly the ball over deep square leg or fine leg.",
    difficulty: 4,
    risk: 3,
    power: 5,
    idealBallTypes: ["Full Length on Leg Stump", "Underpitched On-Stumps", "Overpitched leg-side"],
    targetZones: ["Square Leg", "Fine Leg / Behind Wicket"],
    famousExponents: ["Rohit Sharma", "Yuvraj Singh", "Viv Richards", "Sanath Jayasuriya"],
    youtubeId: "yE7XN9_Ond9",
    coachingTips: [
      "Plant your front foot firmly down the crease, opening up legside lanes.",
      "Get beneath the bouncing trajectory of the delivery.",
      "Exert a dominant bottom-hand snap and vertical shoulder whip.",
      "Rely on ball pace and pristine bat clearance angles."
    ],
    commonMistakes: [
      "Hitting when the ball line is too off-side, risking skied leading edges to deep point.",
      "Unsynchronized footwork, leading to trapping LBW."
    ],
    breakdown: {
      stance: {
        title: "Standard Stance",
        description: "Balanced, active posture targeting full leg-side leverage.",
        bodyVisual: "Upright crouched preparation."
      },
      trigger: {
        title: "Front Foot Plant",
        description: "Stride forward comfortably to smother the pitch, body pivoting towards on-side.",
        bodyVisual: "Front knee flexing, hands loaded at tower height."
      },
      impact: {
        title: "The Upward Whip",
        description: "Meet the ball low under the pad, whipping the wrists skyward down the legside stream.",
        bodyVisual: "Vertical bat kissing ball at pads level, elbows raising high diagonally."
      },
      followThrough: {
        title: "Legside Whip Finish",
        description: "Whip the bat skyward over your left shoulder in a complete diagonal loop.",
        bodyVisual: "Standing tall, bat wrapping sideways over shoulder, chest open to deep square leg."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 90,85 L 90,120 M 90,100 L 84,118 M 90,120 L 72,152 L 68,185 M 90,120 L 106,152 L 112,185 M 84,118 L 65,135 L 48,145",
      finish: "M 92,80 L 92,115 M 92,95 L 96,85 M 92,115 L 75,150 L 70,180 M 92,115 L 108,150 L 113,180 M 96,85 L 110,65 L 125,50"
    },
    perfectTimingStart: 0.64,
    perfectTimingEnd: 0.74
  },
  {
    id: "shuffle-oo",
    name: "Shuffle Outside Off",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Tactical",
    description: "A highly tactical maneuver popularized in T20 cricket. The batsman shuffles widely across the off-stump prior to delivery, completely exposing the stumps, and gently whips or paddles the straight/leg-side ball fine behind the keeper down to fine leg or square leg.",
    difficulty: 5,
    risk: 5,
    power: 3,
    idealBallTypes: ["Straight Good Length", "At the Pads", "Bowler tracking stumps"],
    targetZones: ["Fine Leg / Behind Wicket", "Square Leg", "Mid-Wicket"],
    famousExponents: ["Steve Smith", "AB de Villiers", "Jos Buttler", "Suryakumar Yadav"],
    youtubeId: "qS16h8WovD5",
    coachingTips: [
      "Execute the shuffle only after the bowler commits to their release point.",
      "Get your head and chest behind the line of the incoming delivery.",
      "Absorb the ball speed and gently redirect it fine; do not commit a heavy strike.",
      "Ensure back-knee stays well-aligned to preserve balance."
    ],
    commonMistakes: [
      "Shuffling too early, allowing the bowler to adjust to a wide outside-off bouncer.",
      "Missing contact completely over the stumps, leading to simple bowled/LBW out."
    ],
    breakdown: {
      stance: {
        title: "Standard Balance",
        description: "Balanced baseline setup, focus strictly on the bowler hand.",
        bodyVisual: "Standard standing balance."
      },
      trigger: {
        title: "Offside Shift",
        description: "Shuffle the rear foot across towards offstump, with front leg gliding open.",
        bodyVisual: "Decisive lateral shift across crease towards off-stump, chest front-on."
      },
      impact: {
        title: "Behind-Gate Whip",
        description: "Meet the ball inside your body line and flick/paddle it backwards towards fine-leg.",
        bodyVisual: "Torso aligned outside offstump, bat angled retrowards contacting ball beside legs."
      },
      followThrough: {
        title: "Compact Retro Flow",
        description: "Complete a soft, low follow-through down to fine leg direction.",
        bodyVisual: "Lateral standing pose, bat wrapped low around front hip."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 75,85 L 75,120 M 75,100 L 70,118 M 75,120 L 58,152 L 54,185 M 75,120 L 91,152 L 97,185 M 70,118 L 60,135 L 48,145",
      finish: "M 75,85 L 75,120 M 75,100 L 71,108 M 75,120 L 58,152 L 54,185 M 75,120 L 91,152 L 97,185 M 71,108 L 58,130 L 44,142"
    },
    perfectTimingStart: 0.74,
    perfectTimingEnd: 0.82
  },
  {
    id: "shuffle-ol",
    name: "Shuffle Outside Leg",
    category: "unorthodox",
    categoryLabel: "Unorthodox / Tactical",
    description: "The reverse of the shuffle-oo. The batsman steps back and across towards the leg side crease to open up off-side spaces, late-steering, slashing, or punching the delivery wide of point or slip.",
    difficulty: 5,
    risk: 4,
    power: 2,
    idealBallTypes: ["Short of Length", "Stumps line line", "Spinner or Medium Pace"],
    targetZones: ["Third Man / Slips", "Point", "Cover & Extra Cover"],
    famousExponents: ["Glenn Maxwell", "AB de Villiers", "Kane Williamson", "Steven Smith"],
    youtubeId: "8D_F1u0Xm6p",
    coachingTips: [
      "Deceive the bowler by shifting late into the legside boundary.",
      "Maximize room to fully extend both elbows outside off.",
      "Gently slice the wrists back to guide the ball late towards slip/point.",
      "Maintain weight on the back foot toes."
    ],
    commonMistakes: [
      "Getting cramped if the bowler follows you towards the leg side.",
      "Opening the bat face too early, feeding the first slip catch directly due to rigid hands."
    ],
    breakdown: {
      stance: {
        title: "Standard Prep",
        description: "Standard balanced preparation setup.",
        bodyVisual: "Steady upright stance."
      },
      trigger: {
        title: "Legside Shift",
        description: "Back your shoulder and rear foot deep toward leg stumps direction.",
        bodyVisual: "Back leg moved sideways to leg-stump line, wrists relaxed."
      },
      impact: {
        title: "Late Offside Slice",
        description: "Open the bat face at the absolute last microsecond, guiding pace past slips.",
        bodyVisual: "Arms extended wide away from body, bat face pointing retrospectively to first slip."
      },
      followThrough: {
        title: "Relaxed Offside Arc",
        description: "Let the bat swing terminate sideways naturally, watching the ball fly down to third man.",
        bodyVisual: "Lateral back foot stance, bat pointed low towards slip cordon."
      }
    },
    svgAnimationPath: {
      backlift: "M 100,60 L 100,100 M 100,80 L 70,75 M 100,100 L 90,140 L 90,180 M 100,100 L 115,140 L 115,180 M 70,75 L 75,50 M 75,50 L 55,25",
      swing: "M 100,70 L 100,105 M 100,85 L 85,90 M 100,105 L 85,145 L 80,180 M 100,105 L 110,145 L 110,180 M 85,90 L 80,100 M 80,100 L 65,110",
      contact: "M 115,80 L 115,115 M 115,95 L 105,95 M 115,115 L 115,150 L 115,180 M 115,115 L 130,150 L 130,180 M 105,95 L 135,115 L 140,125",
      finish: "M 115,80 L 115,115 M 115,95 L 120,85 M 115,115 L 115,150 L 115,180 M 115,115 L 130,150 L 130,180 M 120,85 L 135,80 L 140,75"
    },
    perfectTimingStart: 0.74,
    perfectTimingEnd: 0.82
  }
];

export const FIELD_ZONES: FieldZone[] = [
  { id: "slips", name: "Third Man / Slips", angleRange: [135, 180], distance: "close", shots: ["reverse-sweep", "scoop-shot", "steer-shot", "shuffle-ol"] },
  { id: "point", name: "Point", angleRange: [90, 135], distance: "mid", shots: ["square-cut", "reverse-sweep", "punch-shot", "steer-shot", "deep-inside", "shuffle-ol"] },
  { id: "cover", name: "Cover & Extra Cover", angleRange: [45, 90], distance: "mid", shots: ["cover-drive", "square-cut", "lofted-drive", "push-shot", "punch-shot", "inside-out", "chip-shot", "lofted-shot", "deep-inside", "shuffle-ol"] },
  { id: "mid-off", name: "Bowler / Straight Drive", angleRange: [0, 45], distance: "mid", shots: ["straight-drive", "cover-drive", "lofted-drive", "push-shot", "straight-hit", "chip-shot", "lofted-shot"] },
  { id: "mid-on", name: "Mid-On", angleRange: [315, 360], distance: "close", shots: ["straight-drive", "lofted-drive", "push-shot", "straight-hit", "chip-shot", "lofted-shot"] },
  { id: "mid-wicket", name: "Mid-Wicket", angleRange: [270, 315], distance: "mid", shots: ["pull-shot", "helicopter-shot", "flick", "slog-sweep", "slog-shot", "shuffle-oo"] },
  { id: "square-leg", name: "Square Leg", angleRange: [225, 270], distance: "mid", shots: ["pull-shot", "sweep-shot", "flick", "slog-sweep", "slog-shot", "pickup", "shuffle-oo"] },
  { id: "fine-leg", name: "Fine Leg / Behind Wicket", angleRange: [180, 225], distance: "deep", shots: ["sweep-shot", "scoop-shot", "glance", "paddle-sweep", "pickup", "shuffle-oo"] }
];
