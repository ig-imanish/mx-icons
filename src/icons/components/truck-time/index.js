import TruckTimeBold from "./TruckTimeBold";
import TruckTimeBulk from "./TruckTimeBulk";
import TruckTimeLinear from "./TruckTimeLinear";
import TruckTimeOutline from "./TruckTimeOutline";

export { TruckTimeBold, TruckTimeBulk, TruckTimeLinear, TruckTimeOutline };

export const variants = [
  {
    variant: "bold",
    slug: "truck-time-bold",
    Component: TruckTimeBold,
    componentName: "TruckTimeBold",
  },
  {
    variant: "bulk",
    slug: "truck-time-bulk",
    Component: TruckTimeBulk,
    componentName: "TruckTimeBulk",
  },
  {
    variant: "linear",
    slug: "truck-time-linear",
    Component: TruckTimeLinear,
    componentName: "TruckTimeLinear",
  },
  {
    variant: "outline",
    slug: "truck-time-outline",
    Component: TruckTimeOutline,
    componentName: "TruckTimeOutline",
  },
];
