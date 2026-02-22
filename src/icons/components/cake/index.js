import CakeBold from "./CakeBold";
import CakeBroken from "./CakeBroken";
import CakeBulk from "./CakeBulk";
import CakeFilled from "./CakeFilled";
import CakeLinear from "./CakeLinear";
import CakeOutline from "./CakeOutline";
import CakeTwotone from "./CakeTwotone";

export { CakeBold, CakeBroken, CakeBulk, CakeFilled, CakeLinear, CakeOutline, CakeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cake-bold",
    Component: CakeBold,
    componentName: "CakeBold",
  },
  {
    variant: "broken",
    slug: "cake-broken",
    Component: CakeBroken,
    componentName: "CakeBroken",
  },
  {
    variant: "bulk",
    slug: "cake-bulk",
    Component: CakeBulk,
    componentName: "CakeBulk",
  },
  {
    variant: "filled",
    slug: "cake-filled",
    Component: CakeFilled,
    componentName: "CakeFilled",
  },
  {
    variant: "linear",
    slug: "cake-linear",
    Component: CakeLinear,
    componentName: "CakeLinear",
  },
  {
    variant: "outline",
    slug: "cake-outline",
    Component: CakeOutline,
    componentName: "CakeOutline",
  },
  {
    variant: "twotone",
    slug: "cake-twotone",
    Component: CakeTwotone,
    componentName: "CakeTwotone",
  },
];
