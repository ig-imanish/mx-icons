import MedalRibbonStarBold from "./MedalRibbonStarBold";
import MedalRibbonStarBroken from "./MedalRibbonStarBroken";
import MedalRibbonStarBulk from "./MedalRibbonStarBulk";
import MedalRibbonStarLinear from "./MedalRibbonStarLinear";
import MedalRibbonStarOutline from "./MedalRibbonStarOutline";
import MedalRibbonStarTwotone from "./MedalRibbonStarTwotone";

export { MedalRibbonStarBold, MedalRibbonStarBroken, MedalRibbonStarBulk, MedalRibbonStarLinear, MedalRibbonStarOutline, MedalRibbonStarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medal-ribbon-star-bold",
    Component: MedalRibbonStarBold,
    componentName: "MedalRibbonStarBold",
  },,
  {
    variant: "broken",
    slug: "medal-ribbon-star-broken",
    Component: MedalRibbonStarBroken,
    componentName: "MedalRibbonStarBroken",
  },,
  {
    variant: "bulk",
    slug: "medal-ribbon-star-bulk",
    Component: MedalRibbonStarBulk,
    componentName: "MedalRibbonStarBulk",
  },,
  {
    variant: "linear",
    slug: "medal-ribbon-star-linear",
    Component: MedalRibbonStarLinear,
    componentName: "MedalRibbonStarLinear",
  },,
  {
    variant: "outline",
    slug: "medal-ribbon-star-outline",
    Component: MedalRibbonStarOutline,
    componentName: "MedalRibbonStarOutline",
  },,
  {
    variant: "twotone",
    slug: "medal-ribbon-star-twotone",
    Component: MedalRibbonStarTwotone,
    componentName: "MedalRibbonStarTwotone",
  }
];

export default { MedalRibbonStarBold, MedalRibbonStarBroken, MedalRibbonStarBulk, MedalRibbonStarLinear, MedalRibbonStarOutline, MedalRibbonStarTwotone };
