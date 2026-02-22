import TruckTickBold from "./TruckTickBold";
import TruckTickBroken from "./TruckTickBroken";
import TruckTickBulk from "./TruckTickBulk";
import TruckTickLinear from "./TruckTickLinear";
import TruckTickOutline from "./TruckTickOutline";
import TruckTickTwotone from "./TruckTickTwotone";

export { TruckTickBold, TruckTickBroken, TruckTickBulk, TruckTickLinear, TruckTickOutline, TruckTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "truck-tick-bold",
    Component: TruckTickBold,
    componentName: "TruckTickBold",
  },
  {
    variant: "broken",
    slug: "truck-tick-broken",
    Component: TruckTickBroken,
    componentName: "TruckTickBroken",
  },
  {
    variant: "bulk",
    slug: "truck-tick-bulk",
    Component: TruckTickBulk,
    componentName: "TruckTickBulk",
  },
  {
    variant: "linear",
    slug: "truck-tick-linear",
    Component: TruckTickLinear,
    componentName: "TruckTickLinear",
  },
  {
    variant: "outline",
    slug: "truck-tick-outline",
    Component: TruckTickOutline,
    componentName: "TruckTickOutline",
  },
  {
    variant: "twotone",
    slug: "truck-tick-twotone",
    Component: TruckTickTwotone,
    componentName: "TruckTickTwotone",
  },
];
