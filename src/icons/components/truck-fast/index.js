import TruckFastBold from "./TruckFastBold";
import TruckFastBroken from "./TruckFastBroken";
import TruckFastOutline from "./TruckFastOutline";
import TruckFastTwotone from "./TruckFastTwotone";

export { TruckFastBold, TruckFastBroken, TruckFastOutline, TruckFastTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "truck-fast-bold",
    Component: TruckFastBold,
    componentName: "TruckFastBold",
  },
  {
    variant: "broken",
    slug: "truck-fast-broken",
    Component: TruckFastBroken,
    componentName: "TruckFastBroken",
  },
  {
    variant: "outline",
    slug: "truck-fast-outline",
    Component: TruckFastOutline,
    componentName: "TruckFastOutline",
  },
  {
    variant: "twotone",
    slug: "truck-fast-twotone",
    Component: TruckFastTwotone,
    componentName: "TruckFastTwotone",
  },
];
