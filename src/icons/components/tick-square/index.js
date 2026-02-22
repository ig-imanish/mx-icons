import TickSquareBold from "./TickSquareBold";
import TickSquareBroken from "./TickSquareBroken";
import TickSquareBulk from "./TickSquareBulk";
import TickSquareLinear from "./TickSquareLinear";
import TickSquareOutline from "./TickSquareOutline";
import TickSquareTwotone from "./TickSquareTwotone";

export { TickSquareBold, TickSquareBroken, TickSquareBulk, TickSquareLinear, TickSquareOutline, TickSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tick-square-bold",
    Component: TickSquareBold,
    componentName: "TickSquareBold",
  },
  {
    variant: "broken",
    slug: "tick-square-broken",
    Component: TickSquareBroken,
    componentName: "TickSquareBroken",
  },
  {
    variant: "bulk",
    slug: "tick-square-bulk",
    Component: TickSquareBulk,
    componentName: "TickSquareBulk",
  },
  {
    variant: "linear",
    slug: "tick-square-linear",
    Component: TickSquareLinear,
    componentName: "TickSquareLinear",
  },
  {
    variant: "outline",
    slug: "tick-square-outline",
    Component: TickSquareOutline,
    componentName: "TickSquareOutline",
  },
  {
    variant: "twotone",
    slug: "tick-square-twotone",
    Component: TickSquareTwotone,
    componentName: "TickSquareTwotone",
  },
];
