import BoxTickBold from "./BoxTickBold";
import BoxTickBroken from "./BoxTickBroken";
import BoxTickBulk from "./BoxTickBulk";
import BoxTickLinear from "./BoxTickLinear";
import BoxTickOutline from "./BoxTickOutline";
import BoxTickTwotone from "./BoxTickTwotone";

export { BoxTickBold, BoxTickBroken, BoxTickBulk, BoxTickLinear, BoxTickOutline, BoxTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-tick-bold",
    Component: BoxTickBold,
    componentName: "BoxTickBold",
  },
  {
    variant: "broken",
    slug: "box-tick-broken",
    Component: BoxTickBroken,
    componentName: "BoxTickBroken",
  },
  {
    variant: "bulk",
    slug: "box-tick-bulk",
    Component: BoxTickBulk,
    componentName: "BoxTickBulk",
  },
  {
    variant: "linear",
    slug: "box-tick-linear",
    Component: BoxTickLinear,
    componentName: "BoxTickLinear",
  },
  {
    variant: "outline",
    slug: "box-tick-outline",
    Component: BoxTickOutline,
    componentName: "BoxTickOutline",
  },
  {
    variant: "twotone",
    slug: "box-tick-twotone",
    Component: BoxTickTwotone,
    componentName: "BoxTickTwotone",
  },
];
