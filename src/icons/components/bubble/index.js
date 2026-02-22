import BubbleBold from "./BubbleBold";
import BubbleBroken from "./BubbleBroken";
import BubbleBulk from "./BubbleBulk";
import BubbleLinear from "./BubbleLinear";
import BubbleOutline from "./BubbleOutline";
import BubbleTwotone from "./BubbleTwotone";

export { BubbleBold, BubbleBroken, BubbleBulk, BubbleLinear, BubbleOutline, BubbleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bubble-bold",
    Component: BubbleBold,
    componentName: "BubbleBold",
  },
  {
    variant: "broken",
    slug: "bubble-broken",
    Component: BubbleBroken,
    componentName: "BubbleBroken",
  },
  {
    variant: "bulk",
    slug: "bubble-bulk",
    Component: BubbleBulk,
    componentName: "BubbleBulk",
  },
  {
    variant: "linear",
    slug: "bubble-linear",
    Component: BubbleLinear,
    componentName: "BubbleLinear",
  },
  {
    variant: "outline",
    slug: "bubble-outline",
    Component: BubbleOutline,
    componentName: "BubbleOutline",
  },
  {
    variant: "twotone",
    slug: "bubble-twotone",
    Component: BubbleTwotone,
    componentName: "BubbleTwotone",
  },
];
