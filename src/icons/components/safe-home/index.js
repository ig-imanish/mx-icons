import SafeHomeBold from "./SafeHomeBold";
import SafeHomeBroken from "./SafeHomeBroken";
import SafeHomeBulk from "./SafeHomeBulk";
import SafeHomeLinear from "./SafeHomeLinear";
import SafeHomeOutline from "./SafeHomeOutline";
import SafeHomeTwotone from "./SafeHomeTwotone";

export { SafeHomeBold, SafeHomeBroken, SafeHomeBulk, SafeHomeLinear, SafeHomeOutline, SafeHomeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "safe-home-bold",
    Component: SafeHomeBold,
    componentName: "SafeHomeBold",
  },
  {
    variant: "broken",
    slug: "safe-home-broken",
    Component: SafeHomeBroken,
    componentName: "SafeHomeBroken",
  },
  {
    variant: "bulk",
    slug: "safe-home-bulk",
    Component: SafeHomeBulk,
    componentName: "SafeHomeBulk",
  },
  {
    variant: "linear",
    slug: "safe-home-linear",
    Component: SafeHomeLinear,
    componentName: "SafeHomeLinear",
  },
  {
    variant: "outline",
    slug: "safe-home-outline",
    Component: SafeHomeOutline,
    componentName: "SafeHomeOutline",
  },
  {
    variant: "twotone",
    slug: "safe-home-twotone",
    Component: SafeHomeTwotone,
    componentName: "SafeHomeTwotone",
  },
];
