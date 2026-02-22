import ShieldCrossBold from "./ShieldCrossBold";
import ShieldCrossBroken from "./ShieldCrossBroken";
import ShieldCrossBulk from "./ShieldCrossBulk";
import ShieldCrossLinear from "./ShieldCrossLinear";
import ShieldCrossOutline from "./ShieldCrossOutline";
import ShieldCrossTwotone from "./ShieldCrossTwotone";

export { ShieldCrossBold, ShieldCrossBroken, ShieldCrossBulk, ShieldCrossLinear, ShieldCrossOutline, ShieldCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-cross-bold",
    Component: ShieldCrossBold,
    componentName: "ShieldCrossBold",
  },
  {
    variant: "broken",
    slug: "shield-cross-broken",
    Component: ShieldCrossBroken,
    componentName: "ShieldCrossBroken",
  },
  {
    variant: "bulk",
    slug: "shield-cross-bulk",
    Component: ShieldCrossBulk,
    componentName: "ShieldCrossBulk",
  },
  {
    variant: "linear",
    slug: "shield-cross-linear",
    Component: ShieldCrossLinear,
    componentName: "ShieldCrossLinear",
  },
  {
    variant: "outline",
    slug: "shield-cross-outline",
    Component: ShieldCrossOutline,
    componentName: "ShieldCrossOutline",
  },
  {
    variant: "twotone",
    slug: "shield-cross-twotone",
    Component: ShieldCrossTwotone,
    componentName: "ShieldCrossTwotone",
  },
];
