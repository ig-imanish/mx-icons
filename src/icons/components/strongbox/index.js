import StrongboxBold from "./StrongboxBold";
import StrongboxBroken from "./StrongboxBroken";
import StrongboxBulk from "./StrongboxBulk";
import StrongboxLinear from "./StrongboxLinear";
import StrongboxOutline from "./StrongboxOutline";
import StrongboxTwotone from "./StrongboxTwotone";

export { StrongboxBold, StrongboxBroken, StrongboxBulk, StrongboxLinear, StrongboxOutline, StrongboxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "strongbox-bold",
    Component: StrongboxBold,
    componentName: "StrongboxBold",
  },
  {
    variant: "broken",
    slug: "strongbox-broken",
    Component: StrongboxBroken,
    componentName: "StrongboxBroken",
  },
  {
    variant: "bulk",
    slug: "strongbox-bulk",
    Component: StrongboxBulk,
    componentName: "StrongboxBulk",
  },
  {
    variant: "linear",
    slug: "strongbox-linear",
    Component: StrongboxLinear,
    componentName: "StrongboxLinear",
  },
  {
    variant: "outline",
    slug: "strongbox-outline",
    Component: StrongboxOutline,
    componentName: "StrongboxOutline",
  },
  {
    variant: "twotone",
    slug: "strongbox-twotone",
    Component: StrongboxTwotone,
    componentName: "StrongboxTwotone",
  },
];
