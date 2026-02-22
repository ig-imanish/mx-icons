import DriverRefreshBold from "./DriverRefreshBold";
import DriverRefreshBroken from "./DriverRefreshBroken";
import DriverRefreshBulk from "./DriverRefreshBulk";
import DriverRefreshLinear from "./DriverRefreshLinear";
import DriverRefreshOutline from "./DriverRefreshOutline";
import DriverRefreshTwotone from "./DriverRefreshTwotone";

export { DriverRefreshBold, DriverRefreshBroken, DriverRefreshBulk, DriverRefreshLinear, DriverRefreshOutline, DriverRefreshTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "driver-refresh-bold",
    Component: DriverRefreshBold,
    componentName: "DriverRefreshBold",
  },
  {
    variant: "broken",
    slug: "driver-refresh-broken",
    Component: DriverRefreshBroken,
    componentName: "DriverRefreshBroken",
  },
  {
    variant: "bulk",
    slug: "driver-refresh-bulk",
    Component: DriverRefreshBulk,
    componentName: "DriverRefreshBulk",
  },
  {
    variant: "linear",
    slug: "driver-refresh-linear",
    Component: DriverRefreshLinear,
    componentName: "DriverRefreshLinear",
  },
  {
    variant: "outline",
    slug: "driver-refresh-outline",
    Component: DriverRefreshOutline,
    componentName: "DriverRefreshOutline",
  },
  {
    variant: "twotone",
    slug: "driver-refresh-twotone",
    Component: DriverRefreshTwotone,
    componentName: "DriverRefreshTwotone",
  },
];
