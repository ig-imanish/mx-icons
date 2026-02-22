import BrifecaseTickBold from "./BrifecaseTickBold";
import BrifecaseTickBroken from "./BrifecaseTickBroken";
import BrifecaseTickBulk from "./BrifecaseTickBulk";
import BrifecaseTickLinear from "./BrifecaseTickLinear";
import BrifecaseTickOutline from "./BrifecaseTickOutline";
import BrifecaseTickTwotone from "./BrifecaseTickTwotone";

export { BrifecaseTickBold, BrifecaseTickBroken, BrifecaseTickBulk, BrifecaseTickLinear, BrifecaseTickOutline, BrifecaseTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "brifecase-tick-bold",
    Component: BrifecaseTickBold,
    componentName: "BrifecaseTickBold",
  },
  {
    variant: "broken",
    slug: "brifecase-tick-broken",
    Component: BrifecaseTickBroken,
    componentName: "BrifecaseTickBroken",
  },
  {
    variant: "bulk",
    slug: "brifecase-tick-bulk",
    Component: BrifecaseTickBulk,
    componentName: "BrifecaseTickBulk",
  },
  {
    variant: "linear",
    slug: "brifecase-tick-linear",
    Component: BrifecaseTickLinear,
    componentName: "BrifecaseTickLinear",
  },
  {
    variant: "outline",
    slug: "brifecase-tick-outline",
    Component: BrifecaseTickOutline,
    componentName: "BrifecaseTickOutline",
  },
  {
    variant: "twotone",
    slug: "brifecase-tick-twotone",
    Component: BrifecaseTickTwotone,
    componentName: "BrifecaseTickTwotone",
  },
];
