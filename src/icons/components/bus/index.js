import BusBold from "./BusBold";
import BusBroken from "./BusBroken";
import BusBulk from "./BusBulk";
import BusLinear from "./BusLinear";
import BusOutline from "./BusOutline";
import BusTwotone from "./BusTwotone";

export { BusBold, BusBroken, BusBulk, BusLinear, BusOutline, BusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bus-bold",
    Component: BusBold,
    componentName: "BusBold",
  },
  {
    variant: "broken",
    slug: "bus-broken",
    Component: BusBroken,
    componentName: "BusBroken",
  },
  {
    variant: "bulk",
    slug: "bus-bulk",
    Component: BusBulk,
    componentName: "BusBulk",
  },
  {
    variant: "linear",
    slug: "bus-linear",
    Component: BusLinear,
    componentName: "BusLinear",
  },
  {
    variant: "outline",
    slug: "bus-outline",
    Component: BusOutline,
    componentName: "BusOutline",
  },
  {
    variant: "twotone",
    slug: "bus-twotone",
    Component: BusTwotone,
    componentName: "BusTwotone",
  },
];
