import DangerBold from "./DangerBold";
import DangerBroken from "./DangerBroken";
import DangerBulk from "./DangerBulk";
import DangerLinear from "./DangerLinear";
import DangerOutline from "./DangerOutline";
import DangerTwotone from "./DangerTwotone";

export { DangerBold, DangerBroken, DangerBulk, DangerLinear, DangerOutline, DangerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "danger-bold",
    Component: DangerBold,
    componentName: "DangerBold",
  },
  {
    variant: "broken",
    slug: "danger-broken",
    Component: DangerBroken,
    componentName: "DangerBroken",
  },
  {
    variant: "bulk",
    slug: "danger-bulk",
    Component: DangerBulk,
    componentName: "DangerBulk",
  },
  {
    variant: "linear",
    slug: "danger-linear",
    Component: DangerLinear,
    componentName: "DangerLinear",
  },
  {
    variant: "outline",
    slug: "danger-outline",
    Component: DangerOutline,
    componentName: "DangerOutline",
  },
  {
    variant: "twotone",
    slug: "danger-twotone",
    Component: DangerTwotone,
    componentName: "DangerTwotone",
  },
];
