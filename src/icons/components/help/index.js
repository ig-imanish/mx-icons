import HelpBold from "./HelpBold";
import HelpBroken from "./HelpBroken";
import HelpBulk from "./HelpBulk";
import HelpLinear from "./HelpLinear";
import HelpOutline from "./HelpOutline";
import HelpTwotone from "./HelpTwotone";

export { HelpBold, HelpBroken, HelpBulk, HelpLinear, HelpOutline, HelpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "help-bold",
    Component: HelpBold,
    componentName: "HelpBold",
  },,
  {
    variant: "broken",
    slug: "help-broken",
    Component: HelpBroken,
    componentName: "HelpBroken",
  },,
  {
    variant: "bulk",
    slug: "help-bulk",
    Component: HelpBulk,
    componentName: "HelpBulk",
  },,
  {
    variant: "linear",
    slug: "help-linear",
    Component: HelpLinear,
    componentName: "HelpLinear",
  },,
  {
    variant: "outline",
    slug: "help-outline",
    Component: HelpOutline,
    componentName: "HelpOutline",
  },,
  {
    variant: "twotone",
    slug: "help-twotone",
    Component: HelpTwotone,
    componentName: "HelpTwotone",
  }
];

export default { HelpBold, HelpBroken, HelpBulk, HelpLinear, HelpOutline, HelpTwotone };
