import StatusBold from "./StatusBold";
import StatusBroken from "./StatusBroken";
import StatusBulk from "./StatusBulk";
import StatusLinear from "./StatusLinear";
import StatusOutline from "./StatusOutline";
import StatusTwotone from "./StatusTwotone";

export { StatusBold, StatusBroken, StatusBulk, StatusLinear, StatusOutline, StatusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "status-bold",
    Component: StatusBold,
    componentName: "StatusBold",
  },
  {
    variant: "broken",
    slug: "status-broken",
    Component: StatusBroken,
    componentName: "StatusBroken",
  },
  {
    variant: "bulk",
    slug: "status-bulk",
    Component: StatusBulk,
    componentName: "StatusBulk",
  },
  {
    variant: "linear",
    slug: "status-linear",
    Component: StatusLinear,
    componentName: "StatusLinear",
  },
  {
    variant: "outline",
    slug: "status-outline",
    Component: StatusOutline,
    componentName: "StatusOutline",
  },
  {
    variant: "twotone",
    slug: "status-twotone",
    Component: StatusTwotone,
    componentName: "StatusTwotone",
  },
];
