import StatusUpBold from "./StatusUpBold";
import StatusUpBroken from "./StatusUpBroken";
import StatusUpBulk from "./StatusUpBulk";
import StatusUpLinear from "./StatusUpLinear";
import StatusUpOutline from "./StatusUpOutline";
import StatusUpTwotone from "./StatusUpTwotone";

export { StatusUpBold, StatusUpBroken, StatusUpBulk, StatusUpLinear, StatusUpOutline, StatusUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "status-up-bold",
    Component: StatusUpBold,
    componentName: "StatusUpBold",
  },
  {
    variant: "broken",
    slug: "status-up-broken",
    Component: StatusUpBroken,
    componentName: "StatusUpBroken",
  },
  {
    variant: "bulk",
    slug: "status-up-bulk",
    Component: StatusUpBulk,
    componentName: "StatusUpBulk",
  },
  {
    variant: "linear",
    slug: "status-up-linear",
    Component: StatusUpLinear,
    componentName: "StatusUpLinear",
  },
  {
    variant: "outline",
    slug: "status-up-outline",
    Component: StatusUpOutline,
    componentName: "StatusUpOutline",
  },
  {
    variant: "twotone",
    slug: "status-up-twotone",
    Component: StatusUpTwotone,
    componentName: "StatusUpTwotone",
  },
];
