import PillBold from "./PillBold";
import PillBroken from "./PillBroken";
import PillBulk from "./PillBulk";
import PillLinear from "./PillLinear";
import PillOutline from "./PillOutline";
import PillTwotone from "./PillTwotone";

export { PillBold, PillBroken, PillBulk, PillLinear, PillOutline, PillTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pill-bold",
    Component: PillBold,
    componentName: "PillBold",
  },,
  {
    variant: "broken",
    slug: "pill-broken",
    Component: PillBroken,
    componentName: "PillBroken",
  },,
  {
    variant: "bulk",
    slug: "pill-bulk",
    Component: PillBulk,
    componentName: "PillBulk",
  },,
  {
    variant: "linear",
    slug: "pill-linear",
    Component: PillLinear,
    componentName: "PillLinear",
  },,
  {
    variant: "outline",
    slug: "pill-outline",
    Component: PillOutline,
    componentName: "PillOutline",
  },,
  {
    variant: "twotone",
    slug: "pill-twotone",
    Component: PillTwotone,
    componentName: "PillTwotone",
  }
];

export default { PillBold, PillBroken, PillBulk, PillLinear, PillOutline, PillTwotone };
