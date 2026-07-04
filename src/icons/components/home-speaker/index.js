import HomeSpeakerBold from "./HomeSpeakerBold";
import HomeSpeakerBroken from "./HomeSpeakerBroken";
import HomeSpeakerBulk from "./HomeSpeakerBulk";
import HomeSpeakerLinear from "./HomeSpeakerLinear";
import HomeSpeakerOutline from "./HomeSpeakerOutline";
import HomeSpeakerTwotone from "./HomeSpeakerTwotone";

export { HomeSpeakerBold, HomeSpeakerBroken, HomeSpeakerBulk, HomeSpeakerLinear, HomeSpeakerOutline, HomeSpeakerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-speaker-bold",
    Component: HomeSpeakerBold,
    componentName: "HomeSpeakerBold",
  },,
  {
    variant: "broken",
    slug: "home-speaker-broken",
    Component: HomeSpeakerBroken,
    componentName: "HomeSpeakerBroken",
  },,
  {
    variant: "bulk",
    slug: "home-speaker-bulk",
    Component: HomeSpeakerBulk,
    componentName: "HomeSpeakerBulk",
  },,
  {
    variant: "linear",
    slug: "home-speaker-linear",
    Component: HomeSpeakerLinear,
    componentName: "HomeSpeakerLinear",
  },,
  {
    variant: "outline",
    slug: "home-speaker-outline",
    Component: HomeSpeakerOutline,
    componentName: "HomeSpeakerOutline",
  },,
  {
    variant: "twotone",
    slug: "home-speaker-twotone",
    Component: HomeSpeakerTwotone,
    componentName: "HomeSpeakerTwotone",
  }
];

export default { HomeSpeakerBold, HomeSpeakerBroken, HomeSpeakerBulk, HomeSpeakerLinear, HomeSpeakerOutline, HomeSpeakerTwotone };
