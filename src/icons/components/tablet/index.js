import TabletBold from "./TabletBold";
import TabletBroken from "./TabletBroken";
import TabletBulk from "./TabletBulk";
import TabletLinear from "./TabletLinear";
import TabletOutline from "./TabletOutline";
import TabletTwotone from "./TabletTwotone";

export { TabletBold, TabletBroken, TabletBulk, TabletLinear, TabletOutline, TabletTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tablet-bold",
    Component: TabletBold,
    componentName: "TabletBold",
  },,
  {
    variant: "broken",
    slug: "tablet-broken",
    Component: TabletBroken,
    componentName: "TabletBroken",
  },,
  {
    variant: "bulk",
    slug: "tablet-bulk",
    Component: TabletBulk,
    componentName: "TabletBulk",
  },,
  {
    variant: "linear",
    slug: "tablet-linear",
    Component: TabletLinear,
    componentName: "TabletLinear",
  },,
  {
    variant: "outline",
    slug: "tablet-outline",
    Component: TabletOutline,
    componentName: "TabletOutline",
  },,
  {
    variant: "twotone",
    slug: "tablet-twotone",
    Component: TabletTwotone,
    componentName: "TabletTwotone",
  }
];

export default { TabletBold, TabletBroken, TabletBulk, TabletLinear, TabletOutline, TabletTwotone };
