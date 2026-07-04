import SquareForwardBold from "./SquareForwardBold";
import SquareForwardBroken from "./SquareForwardBroken";
import SquareForwardBulk from "./SquareForwardBulk";
import SquareForwardLinear from "./SquareForwardLinear";
import SquareForwardOutline from "./SquareForwardOutline";
import SquareForwardTwotone from "./SquareForwardTwotone";

export { SquareForwardBold, SquareForwardBroken, SquareForwardBulk, SquareForwardLinear, SquareForwardOutline, SquareForwardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "square-forward-bold",
    Component: SquareForwardBold,
    componentName: "SquareForwardBold",
  },,
  {
    variant: "broken",
    slug: "square-forward-broken",
    Component: SquareForwardBroken,
    componentName: "SquareForwardBroken",
  },,
  {
    variant: "bulk",
    slug: "square-forward-bulk",
    Component: SquareForwardBulk,
    componentName: "SquareForwardBulk",
  },,
  {
    variant: "linear",
    slug: "square-forward-linear",
    Component: SquareForwardLinear,
    componentName: "SquareForwardLinear",
  },,
  {
    variant: "outline",
    slug: "square-forward-outline",
    Component: SquareForwardOutline,
    componentName: "SquareForwardOutline",
  },,
  {
    variant: "twotone",
    slug: "square-forward-twotone",
    Component: SquareForwardTwotone,
    componentName: "SquareForwardTwotone",
  }
];

export default { SquareForwardBold, SquareForwardBroken, SquareForwardBulk, SquareForwardLinear, SquareForwardOutline, SquareForwardTwotone };
