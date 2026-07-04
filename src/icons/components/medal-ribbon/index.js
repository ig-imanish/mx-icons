import MedalRibbonBold from "./MedalRibbonBold";
import MedalRibbonBroken from "./MedalRibbonBroken";
import MedalRibbonBulk from "./MedalRibbonBulk";
import MedalRibbonLinear from "./MedalRibbonLinear";
import MedalRibbonOutline from "./MedalRibbonOutline";
import MedalRibbonTwotone from "./MedalRibbonTwotone";

export { MedalRibbonBold, MedalRibbonBroken, MedalRibbonBulk, MedalRibbonLinear, MedalRibbonOutline, MedalRibbonTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medal-ribbon-bold",
    Component: MedalRibbonBold,
    componentName: "MedalRibbonBold",
  },,
  {
    variant: "broken",
    slug: "medal-ribbon-broken",
    Component: MedalRibbonBroken,
    componentName: "MedalRibbonBroken",
  },,
  {
    variant: "bulk",
    slug: "medal-ribbon-bulk",
    Component: MedalRibbonBulk,
    componentName: "MedalRibbonBulk",
  },,
  {
    variant: "linear",
    slug: "medal-ribbon-linear",
    Component: MedalRibbonLinear,
    componentName: "MedalRibbonLinear",
  },,
  {
    variant: "outline",
    slug: "medal-ribbon-outline",
    Component: MedalRibbonOutline,
    componentName: "MedalRibbonOutline",
  },,
  {
    variant: "twotone",
    slug: "medal-ribbon-twotone",
    Component: MedalRibbonTwotone,
    componentName: "MedalRibbonTwotone",
  }
];

export default { MedalRibbonBold, MedalRibbonBroken, MedalRibbonBulk, MedalRibbonLinear, MedalRibbonOutline, MedalRibbonTwotone };
