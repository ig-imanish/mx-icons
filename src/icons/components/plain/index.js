import PlainBold from "./PlainBold";
import PlainBroken from "./PlainBroken";
import PlainBulk from "./PlainBulk";
import PlainLinear from "./PlainLinear";
import PlainOutline from "./PlainOutline";
import PlainTwotone from "./PlainTwotone";

export { PlainBold, PlainBroken, PlainBulk, PlainLinear, PlainOutline, PlainTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "plain-bold",
    Component: PlainBold,
    componentName: "PlainBold",
  },,
  {
    variant: "broken",
    slug: "plain-broken",
    Component: PlainBroken,
    componentName: "PlainBroken",
  },,
  {
    variant: "bulk",
    slug: "plain-bulk",
    Component: PlainBulk,
    componentName: "PlainBulk",
  },,
  {
    variant: "linear",
    slug: "plain-linear",
    Component: PlainLinear,
    componentName: "PlainLinear",
  },,
  {
    variant: "outline",
    slug: "plain-outline",
    Component: PlainOutline,
    componentName: "PlainOutline",
  },,
  {
    variant: "twotone",
    slug: "plain-twotone",
    Component: PlainTwotone,
    componentName: "PlainTwotone",
  }
];

export default { PlainBold, PlainBroken, PlainBulk, PlainLinear, PlainOutline, PlainTwotone };
