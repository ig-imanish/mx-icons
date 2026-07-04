import HangerBold from "./HangerBold";
import HangerBroken from "./HangerBroken";
import HangerBulk from "./HangerBulk";
import HangerLinear from "./HangerLinear";
import HangerOutline from "./HangerOutline";
import HangerTwotone from "./HangerTwotone";

export { HangerBold, HangerBroken, HangerBulk, HangerLinear, HangerOutline, HangerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hanger-bold",
    Component: HangerBold,
    componentName: "HangerBold",
  },,
  {
    variant: "broken",
    slug: "hanger-broken",
    Component: HangerBroken,
    componentName: "HangerBroken",
  },,
  {
    variant: "bulk",
    slug: "hanger-bulk",
    Component: HangerBulk,
    componentName: "HangerBulk",
  },,
  {
    variant: "linear",
    slug: "hanger-linear",
    Component: HangerLinear,
    componentName: "HangerLinear",
  },,
  {
    variant: "outline",
    slug: "hanger-outline",
    Component: HangerOutline,
    componentName: "HangerOutline",
  },,
  {
    variant: "twotone",
    slug: "hanger-twotone",
    Component: HangerTwotone,
    componentName: "HangerTwotone",
  }
];

export default { HangerBold, HangerBroken, HangerBulk, HangerLinear, HangerOutline, HangerTwotone };
