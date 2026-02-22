import ArrowSwapBold from "./ArrowSwapBold";
import ArrowSwapBroken from "./ArrowSwapBroken";
import ArrowSwapBulk from "./ArrowSwapBulk";
import ArrowSwapOutline from "./ArrowSwapOutline";

export { ArrowSwapBold, ArrowSwapBroken, ArrowSwapBulk, ArrowSwapOutline };

export const variants = [
  {
    variant: "bold",
    slug: "arrow-swap-bold",
    Component: ArrowSwapBold,
    componentName: "ArrowSwapBold",
  },
  {
    variant: "broken",
    slug: "arrow-swap-broken",
    Component: ArrowSwapBroken,
    componentName: "ArrowSwapBroken",
  },
  {
    variant: "bulk",
    slug: "arrow-swap-bulk",
    Component: ArrowSwapBulk,
    componentName: "ArrowSwapBulk",
  },
  {
    variant: "outline",
    slug: "arrow-swap-outline",
    Component: ArrowSwapOutline,
    componentName: "ArrowSwapOutline",
  },
];
