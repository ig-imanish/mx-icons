import TruckRemoveBold from "./TruckRemoveBold";
import TruckRemoveBulk from "./TruckRemoveBulk";
import TruckRemoveLinear from "./TruckRemoveLinear";
import TruckRemoveOutline from "./TruckRemoveOutline";

export { TruckRemoveBold, TruckRemoveBulk, TruckRemoveLinear, TruckRemoveOutline };

export const variants = [
  {
    variant: "bold",
    slug: "truck-remove-bold",
    Component: TruckRemoveBold,
    componentName: "TruckRemoveBold",
  },
  {
    variant: "bulk",
    slug: "truck-remove-bulk",
    Component: TruckRemoveBulk,
    componentName: "TruckRemoveBulk",
  },
  {
    variant: "linear",
    slug: "truck-remove-linear",
    Component: TruckRemoveLinear,
    componentName: "TruckRemoveLinear",
  },
  {
    variant: "outline",
    slug: "truck-remove-outline",
    Component: TruckRemoveOutline,
    componentName: "TruckRemoveOutline",
  },
];
