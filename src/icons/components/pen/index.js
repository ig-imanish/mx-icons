import PenBold from "./PenBold";
import PenBroken from "./PenBroken";
import PenBulk from "./PenBulk";
import PenLinear from "./PenLinear";
import PenOutline from "./PenOutline";
import PenTwotone from "./PenTwotone";

export { PenBold, PenBroken, PenBulk, PenLinear, PenOutline, PenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-bold",
    Component: PenBold,
    componentName: "PenBold",
  },,
  {
    variant: "broken",
    slug: "pen-broken",
    Component: PenBroken,
    componentName: "PenBroken",
  },,
  {
    variant: "bulk",
    slug: "pen-bulk",
    Component: PenBulk,
    componentName: "PenBulk",
  },,
  {
    variant: "linear",
    slug: "pen-linear",
    Component: PenLinear,
    componentName: "PenLinear",
  },,
  {
    variant: "outline",
    slug: "pen-outline",
    Component: PenOutline,
    componentName: "PenOutline",
  },,
  {
    variant: "twotone",
    slug: "pen-twotone",
    Component: PenTwotone,
    componentName: "PenTwotone",
  }
];

export default { PenBold, PenBroken, PenBulk, PenLinear, PenOutline, PenTwotone };
