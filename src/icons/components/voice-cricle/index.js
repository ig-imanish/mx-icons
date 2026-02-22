import VoiceCricleBold from "./VoiceCricleBold";
import VoiceCricleBroken from "./VoiceCricleBroken";
import VoiceCricleBulk from "./VoiceCricleBulk";
import VoiceCricleLinear from "./VoiceCricleLinear";
import VoiceCricleOutline from "./VoiceCricleOutline";
import VoiceCricleTwotone from "./VoiceCricleTwotone";

export { VoiceCricleBold, VoiceCricleBroken, VoiceCricleBulk, VoiceCricleLinear, VoiceCricleOutline, VoiceCricleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "voice-cricle-bold",
    Component: VoiceCricleBold,
    componentName: "VoiceCricleBold",
  },
  {
    variant: "broken",
    slug: "voice-cricle-broken",
    Component: VoiceCricleBroken,
    componentName: "VoiceCricleBroken",
  },
  {
    variant: "bulk",
    slug: "voice-cricle-bulk",
    Component: VoiceCricleBulk,
    componentName: "VoiceCricleBulk",
  },
  {
    variant: "linear",
    slug: "voice-cricle-linear",
    Component: VoiceCricleLinear,
    componentName: "VoiceCricleLinear",
  },
  {
    variant: "outline",
    slug: "voice-cricle-outline",
    Component: VoiceCricleOutline,
    componentName: "VoiceCricleOutline",
  },
  {
    variant: "twotone",
    slug: "voice-cricle-twotone",
    Component: VoiceCricleTwotone,
    componentName: "VoiceCricleTwotone",
  },
];
