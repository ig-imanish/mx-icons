import ComputingBold from "./ComputingBold";
import ComputingBroken from "./ComputingBroken";
import ComputingBulk from "./ComputingBulk";
import ComputingLinear from "./ComputingLinear";
import ComputingOutline from "./ComputingOutline";
import ComputingTwotone from "./ComputingTwotone";

export { ComputingBold, ComputingBroken, ComputingBulk, ComputingLinear, ComputingOutline, ComputingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "computing-bold",
    Component: ComputingBold,
    componentName: "ComputingBold",
  },
  {
    variant: "broken",
    slug: "computing-broken",
    Component: ComputingBroken,
    componentName: "ComputingBroken",
  },
  {
    variant: "bulk",
    slug: "computing-bulk",
    Component: ComputingBulk,
    componentName: "ComputingBulk",
  },
  {
    variant: "linear",
    slug: "computing-linear",
    Component: ComputingLinear,
    componentName: "ComputingLinear",
  },
  {
    variant: "outline",
    slug: "computing-outline",
    Component: ComputingOutline,
    componentName: "ComputingOutline",
  },
  {
    variant: "twotone",
    slug: "computing-twotone",
    Component: ComputingTwotone,
    componentName: "ComputingTwotone",
  },
];
