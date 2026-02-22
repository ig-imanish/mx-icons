import FlagBold from "./FlagBold";
import FlagBroken from "./FlagBroken";
import FlagBulk from "./FlagBulk";
import FlagLinear from "./FlagLinear";
import FlagOutline from "./FlagOutline";
import FlagTwotone from "./FlagTwotone";

export { FlagBold, FlagBroken, FlagBulk, FlagLinear, FlagOutline, FlagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flag-bold",
    Component: FlagBold,
    componentName: "FlagBold",
  },
  {
    variant: "broken",
    slug: "flag-broken",
    Component: FlagBroken,
    componentName: "FlagBroken",
  },
  {
    variant: "bulk",
    slug: "flag-bulk",
    Component: FlagBulk,
    componentName: "FlagBulk",
  },
  {
    variant: "linear",
    slug: "flag-linear",
    Component: FlagLinear,
    componentName: "FlagLinear",
  },
  {
    variant: "outline",
    slug: "flag-outline",
    Component: FlagOutline,
    componentName: "FlagOutline",
  },
  {
    variant: "twotone",
    slug: "flag-twotone",
    Component: FlagTwotone,
    componentName: "FlagTwotone",
  },
];
