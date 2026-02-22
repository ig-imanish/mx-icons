import ArrowCircleUpBold from "./ArrowCircleUpBold";
import ArrowCircleUpBroken from "./ArrowCircleUpBroken";
import ArrowCircleUpBulk from "./ArrowCircleUpBulk";
import ArrowCircleUpOutline from "./ArrowCircleUpOutline";

export { ArrowCircleUpBold, ArrowCircleUpBroken, ArrowCircleUpBulk, ArrowCircleUpOutline };

export const variants = [
  {
    variant: "bold",
    slug: "arrow-circle-up-bold",
    Component: ArrowCircleUpBold,
    componentName: "ArrowCircleUpBold",
  },
  {
    variant: "broken",
    slug: "arrow-circle-up-broken",
    Component: ArrowCircleUpBroken,
    componentName: "ArrowCircleUpBroken",
  },
  {
    variant: "bulk",
    slug: "arrow-circle-up-bulk",
    Component: ArrowCircleUpBulk,
    componentName: "ArrowCircleUpBulk",
  },
  {
    variant: "outline",
    slug: "arrow-circle-up-outline",
    Component: ArrowCircleUpOutline,
    componentName: "ArrowCircleUpOutline",
  },
];
