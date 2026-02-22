import DriverBold from "./DriverBold";
import DriverBroken from "./DriverBroken";
import DriverBulk from "./DriverBulk";
import DriverLinear from "./DriverLinear";
import DriverOutline from "./DriverOutline";
import DriverTwotone from "./DriverTwotone";

export { DriverBold, DriverBroken, DriverBulk, DriverLinear, DriverOutline, DriverTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "driver-bold",
    Component: DriverBold,
    componentName: "DriverBold",
  },
  {
    variant: "broken",
    slug: "driver-broken",
    Component: DriverBroken,
    componentName: "DriverBroken",
  },
  {
    variant: "bulk",
    slug: "driver-bulk",
    Component: DriverBulk,
    componentName: "DriverBulk",
  },
  {
    variant: "linear",
    slug: "driver-linear",
    Component: DriverLinear,
    componentName: "DriverLinear",
  },
  {
    variant: "outline",
    slug: "driver-outline",
    Component: DriverOutline,
    componentName: "DriverOutline",
  },
  {
    variant: "twotone",
    slug: "driver-twotone",
    Component: DriverTwotone,
    componentName: "DriverTwotone",
  },
];
