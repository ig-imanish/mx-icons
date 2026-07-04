import FlipVerticalBold from "./FlipVerticalBold";
import FlipVerticalBroken from "./FlipVerticalBroken";
import FlipVerticalBulk from "./FlipVerticalBulk";
import FlipVerticalLinear from "./FlipVerticalLinear";
import FlipVerticalOutline from "./FlipVerticalOutline";
import FlipVerticalTwotone from "./FlipVerticalTwotone";

export { FlipVerticalBold, FlipVerticalBroken, FlipVerticalBulk, FlipVerticalLinear, FlipVerticalOutline, FlipVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flip-vertical-bold",
    Component: FlipVerticalBold,
    componentName: "FlipVerticalBold",
  },,
  {
    variant: "broken",
    slug: "flip-vertical-broken",
    Component: FlipVerticalBroken,
    componentName: "FlipVerticalBroken",
  },,
  {
    variant: "bulk",
    slug: "flip-vertical-bulk",
    Component: FlipVerticalBulk,
    componentName: "FlipVerticalBulk",
  },,
  {
    variant: "linear",
    slug: "flip-vertical-linear",
    Component: FlipVerticalLinear,
    componentName: "FlipVerticalLinear",
  },,
  {
    variant: "outline",
    slug: "flip-vertical-outline",
    Component: FlipVerticalOutline,
    componentName: "FlipVerticalOutline",
  },,
  {
    variant: "twotone",
    slug: "flip-vertical-twotone",
    Component: FlipVerticalTwotone,
    componentName: "FlipVerticalTwotone",
  }
];

export default { FlipVerticalBold, FlipVerticalBroken, FlipVerticalBulk, FlipVerticalLinear, FlipVerticalOutline, FlipVerticalTwotone };
