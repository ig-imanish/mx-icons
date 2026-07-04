import AlignTopBold from "./AlignTopBold";
import AlignTopBroken from "./AlignTopBroken";
import AlignTopBulk from "./AlignTopBulk";
import AlignTopLinear from "./AlignTopLinear";
import AlignTopOutline from "./AlignTopOutline";
import AlignTopTwotone from "./AlignTopTwotone";

export { AlignTopBold, AlignTopBroken, AlignTopBulk, AlignTopLinear, AlignTopOutline, AlignTopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "align-top-bold",
    Component: AlignTopBold,
    componentName: "AlignTopBold",
  },,
  {
    variant: "broken",
    slug: "align-top-broken",
    Component: AlignTopBroken,
    componentName: "AlignTopBroken",
  },,
  {
    variant: "bulk",
    slug: "align-top-bulk",
    Component: AlignTopBulk,
    componentName: "AlignTopBulk",
  },,
  {
    variant: "linear",
    slug: "align-top-linear",
    Component: AlignTopLinear,
    componentName: "AlignTopLinear",
  },,
  {
    variant: "outline",
    slug: "align-top-outline",
    Component: AlignTopOutline,
    componentName: "AlignTopOutline",
  },,
  {
    variant: "twotone",
    slug: "align-top-twotone",
    Component: AlignTopTwotone,
    componentName: "AlignTopTwotone",
  }
];

export default { AlignTopBold, AlignTopBroken, AlignTopBulk, AlignTopLinear, AlignTopOutline, AlignTopTwotone };
