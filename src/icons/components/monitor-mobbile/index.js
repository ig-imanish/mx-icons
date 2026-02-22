import MonitorMobbileBold from "./MonitorMobbileBold";
import MonitorMobbileBroken from "./MonitorMobbileBroken";
import MonitorMobbileBulk from "./MonitorMobbileBulk";
import MonitorMobbileLinear from "./MonitorMobbileLinear";
import MonitorMobbileOutline from "./MonitorMobbileOutline";
import MonitorMobbileTwotone from "./MonitorMobbileTwotone";

export { MonitorMobbileBold, MonitorMobbileBroken, MonitorMobbileBulk, MonitorMobbileLinear, MonitorMobbileOutline, MonitorMobbileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "monitor-mobbile-bold",
    Component: MonitorMobbileBold,
    componentName: "MonitorMobbileBold",
  },
  {
    variant: "broken",
    slug: "monitor-mobbile-broken",
    Component: MonitorMobbileBroken,
    componentName: "MonitorMobbileBroken",
  },
  {
    variant: "bulk",
    slug: "monitor-mobbile-bulk",
    Component: MonitorMobbileBulk,
    componentName: "MonitorMobbileBulk",
  },
  {
    variant: "linear",
    slug: "monitor-mobbile-linear",
    Component: MonitorMobbileLinear,
    componentName: "MonitorMobbileLinear",
  },
  {
    variant: "outline",
    slug: "monitor-mobbile-outline",
    Component: MonitorMobbileOutline,
    componentName: "MonitorMobbileOutline",
  },
  {
    variant: "twotone",
    slug: "monitor-mobbile-twotone",
    Component: MonitorMobbileTwotone,
    componentName: "MonitorMobbileTwotone",
  },
];
