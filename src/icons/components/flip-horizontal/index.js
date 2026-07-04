import FlipHorizontalBold from "./FlipHorizontalBold";
import FlipHorizontalBroken from "./FlipHorizontalBroken";
import FlipHorizontalBulk from "./FlipHorizontalBulk";
import FlipHorizontalLinear from "./FlipHorizontalLinear";
import FlipHorizontalOutline from "./FlipHorizontalOutline";
import FlipHorizontalTwotone from "./FlipHorizontalTwotone";

export { FlipHorizontalBold, FlipHorizontalBroken, FlipHorizontalBulk, FlipHorizontalLinear, FlipHorizontalOutline, FlipHorizontalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flip-horizontal-bold",
    Component: FlipHorizontalBold,
    componentName: "FlipHorizontalBold",
  },,
  {
    variant: "broken",
    slug: "flip-horizontal-broken",
    Component: FlipHorizontalBroken,
    componentName: "FlipHorizontalBroken",
  },,
  {
    variant: "bulk",
    slug: "flip-horizontal-bulk",
    Component: FlipHorizontalBulk,
    componentName: "FlipHorizontalBulk",
  },,
  {
    variant: "linear",
    slug: "flip-horizontal-linear",
    Component: FlipHorizontalLinear,
    componentName: "FlipHorizontalLinear",
  },,
  {
    variant: "outline",
    slug: "flip-horizontal-outline",
    Component: FlipHorizontalOutline,
    componentName: "FlipHorizontalOutline",
  },,
  {
    variant: "twotone",
    slug: "flip-horizontal-twotone",
    Component: FlipHorizontalTwotone,
    componentName: "FlipHorizontalTwotone",
  }
];

export default { FlipHorizontalBold, FlipHorizontalBroken, FlipHorizontalBulk, FlipHorizontalLinear, FlipHorizontalOutline, FlipHorizontalTwotone };
