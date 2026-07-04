import GolfBold from "./GolfBold";
import GolfBroken from "./GolfBroken";
import GolfBulk from "./GolfBulk";
import GolfLinear from "./GolfLinear";
import GolfOutline from "./GolfOutline";
import GolfTwotone from "./GolfTwotone";

export { GolfBold, GolfBroken, GolfBulk, GolfLinear, GolfOutline, GolfTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "golf-bold",
    Component: GolfBold,
    componentName: "GolfBold",
  },,
  {
    variant: "broken",
    slug: "golf-broken",
    Component: GolfBroken,
    componentName: "GolfBroken",
  },,
  {
    variant: "bulk",
    slug: "golf-bulk",
    Component: GolfBulk,
    componentName: "GolfBulk",
  },,
  {
    variant: "linear",
    slug: "golf-linear",
    Component: GolfLinear,
    componentName: "GolfLinear",
  },,
  {
    variant: "outline",
    slug: "golf-outline",
    Component: GolfOutline,
    componentName: "GolfOutline",
  },,
  {
    variant: "twotone",
    slug: "golf-twotone",
    Component: GolfTwotone,
    componentName: "GolfTwotone",
  }
];

export default { GolfBold, GolfBroken, GolfBulk, GolfLinear, GolfOutline, GolfTwotone };
