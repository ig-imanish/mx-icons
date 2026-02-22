import ShipBold from "./ShipBold";
import ShipBroken from "./ShipBroken";
import ShipBulk from "./ShipBulk";
import ShipLinear from "./ShipLinear";
import ShipOutline from "./ShipOutline";
import ShipTwotone from "./ShipTwotone";

export { ShipBold, ShipBroken, ShipBulk, ShipLinear, ShipOutline, ShipTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ship-bold",
    Component: ShipBold,
    componentName: "ShipBold",
  },
  {
    variant: "broken",
    slug: "ship-broken",
    Component: ShipBroken,
    componentName: "ShipBroken",
  },
  {
    variant: "bulk",
    slug: "ship-bulk",
    Component: ShipBulk,
    componentName: "ShipBulk",
  },
  {
    variant: "linear",
    slug: "ship-linear",
    Component: ShipLinear,
    componentName: "ShipLinear",
  },
  {
    variant: "outline",
    slug: "ship-outline",
    Component: ShipOutline,
    componentName: "ShipOutline",
  },
  {
    variant: "twotone",
    slug: "ship-twotone",
    Component: ShipTwotone,
    componentName: "ShipTwotone",
  },
];
