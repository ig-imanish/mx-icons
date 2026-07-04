import SmartSpeakerBold from "./SmartSpeakerBold";
import SmartSpeakerBroken from "./SmartSpeakerBroken";
import SmartSpeakerBulk from "./SmartSpeakerBulk";
import SmartSpeakerLinear from "./SmartSpeakerLinear";
import SmartSpeakerOutline from "./SmartSpeakerOutline";
import SmartSpeakerTwotone from "./SmartSpeakerTwotone";

export { SmartSpeakerBold, SmartSpeakerBroken, SmartSpeakerBulk, SmartSpeakerLinear, SmartSpeakerOutline, SmartSpeakerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smart-speaker-bold",
    Component: SmartSpeakerBold,
    componentName: "SmartSpeakerBold",
  },,
  {
    variant: "broken",
    slug: "smart-speaker-broken",
    Component: SmartSpeakerBroken,
    componentName: "SmartSpeakerBroken",
  },,
  {
    variant: "bulk",
    slug: "smart-speaker-bulk",
    Component: SmartSpeakerBulk,
    componentName: "SmartSpeakerBulk",
  },,
  {
    variant: "linear",
    slug: "smart-speaker-linear",
    Component: SmartSpeakerLinear,
    componentName: "SmartSpeakerLinear",
  },,
  {
    variant: "outline",
    slug: "smart-speaker-outline",
    Component: SmartSpeakerOutline,
    componentName: "SmartSpeakerOutline",
  },,
  {
    variant: "twotone",
    slug: "smart-speaker-twotone",
    Component: SmartSpeakerTwotone,
    componentName: "SmartSpeakerTwotone",
  }
];

export default { SmartSpeakerBold, SmartSpeakerBroken, SmartSpeakerBulk, SmartSpeakerLinear, SmartSpeakerOutline, SmartSpeakerTwotone };
