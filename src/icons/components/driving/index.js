import DrivingBold from "./DrivingBold";
import DrivingBroken from "./DrivingBroken";
import DrivingBulk from "./DrivingBulk";
import DrivingLinear from "./DrivingLinear";
import DrivingOutline from "./DrivingOutline";
import DrivingTwotone from "./DrivingTwotone";

export { DrivingBold, DrivingBroken, DrivingBulk, DrivingLinear, DrivingOutline, DrivingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "driving-bold",
    Component: DrivingBold,
    componentName: "DrivingBold",
  },
  {
    variant: "broken",
    slug: "driving-broken",
    Component: DrivingBroken,
    componentName: "DrivingBroken",
  },
  {
    variant: "bulk",
    slug: "driving-bulk",
    Component: DrivingBulk,
    componentName: "DrivingBulk",
  },
  {
    variant: "linear",
    slug: "driving-linear",
    Component: DrivingLinear,
    componentName: "DrivingLinear",
  },
  {
    variant: "outline",
    slug: "driving-outline",
    Component: DrivingOutline,
    componentName: "DrivingOutline",
  },
  {
    variant: "twotone",
    slug: "driving-twotone",
    Component: DrivingTwotone,
    componentName: "DrivingTwotone",
  },
];
