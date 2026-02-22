import SpeakerBold from "./SpeakerBold";
import SpeakerBroken from "./SpeakerBroken";
import SpeakerBulk from "./SpeakerBulk";
import SpeakerLinear from "./SpeakerLinear";
import SpeakerOutline from "./SpeakerOutline";
import SpeakerTwotone from "./SpeakerTwotone";

export { SpeakerBold, SpeakerBroken, SpeakerBulk, SpeakerLinear, SpeakerOutline, SpeakerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "speaker-bold",
    Component: SpeakerBold,
    componentName: "SpeakerBold",
  },
  {
    variant: "broken",
    slug: "speaker-broken",
    Component: SpeakerBroken,
    componentName: "SpeakerBroken",
  },
  {
    variant: "bulk",
    slug: "speaker-bulk",
    Component: SpeakerBulk,
    componentName: "SpeakerBulk",
  },
  {
    variant: "linear",
    slug: "speaker-linear",
    Component: SpeakerLinear,
    componentName: "SpeakerLinear",
  },
  {
    variant: "outline",
    slug: "speaker-outline",
    Component: SpeakerOutline,
    componentName: "SpeakerOutline",
  },
  {
    variant: "twotone",
    slug: "speaker-twotone",
    Component: SpeakerTwotone,
    componentName: "SpeakerTwotone",
  },
];
