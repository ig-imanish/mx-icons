import MilkBold from "./MilkBold";
import MilkBroken from "./MilkBroken";
import MilkBulk from "./MilkBulk";
import MilkLinear from "./MilkLinear";
import MilkOutline from "./MilkOutline";
import MilkTwotone from "./MilkTwotone";

export { MilkBold, MilkBroken, MilkBulk, MilkLinear, MilkOutline, MilkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "milk-bold",
    Component: MilkBold,
    componentName: "MilkBold",
  },
  {
    variant: "broken",
    slug: "milk-broken",
    Component: MilkBroken,
    componentName: "MilkBroken",
  },
  {
    variant: "bulk",
    slug: "milk-bulk",
    Component: MilkBulk,
    componentName: "MilkBulk",
  },
  {
    variant: "linear",
    slug: "milk-linear",
    Component: MilkLinear,
    componentName: "MilkLinear",
  },
  {
    variant: "outline",
    slug: "milk-outline",
    Component: MilkOutline,
    componentName: "MilkOutline",
  },
  {
    variant: "twotone",
    slug: "milk-twotone",
    Component: MilkTwotone,
    componentName: "MilkTwotone",
  },
];
