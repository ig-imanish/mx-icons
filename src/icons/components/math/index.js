import MathBold from "./MathBold";
import MathBroken from "./MathBroken";
import MathBulk from "./MathBulk";
import MathLinear from "./MathLinear";
import MathOutline from "./MathOutline";
import MathTwotone from "./MathTwotone";

export { MathBold, MathBroken, MathBulk, MathLinear, MathOutline, MathTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "math-bold",
    Component: MathBold,
    componentName: "MathBold",
  },
  {
    variant: "broken",
    slug: "math-broken",
    Component: MathBroken,
    componentName: "MathBroken",
  },
  {
    variant: "bulk",
    slug: "math-bulk",
    Component: MathBulk,
    componentName: "MathBulk",
  },
  {
    variant: "linear",
    slug: "math-linear",
    Component: MathLinear,
    componentName: "MathLinear",
  },
  {
    variant: "outline",
    slug: "math-outline",
    Component: MathOutline,
    componentName: "MathOutline",
  },
  {
    variant: "twotone",
    slug: "math-twotone",
    Component: MathTwotone,
    componentName: "MathTwotone",
  },
];
