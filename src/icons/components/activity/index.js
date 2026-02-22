import ActivityBold from "./ActivityBold";
import ActivityBroken from "./ActivityBroken";
import ActivityBulk from "./ActivityBulk";
import ActivityLinear from "./ActivityLinear";
import ActivityOutline from "./ActivityOutline";
import ActivityTwotone from "./ActivityTwotone";

export { ActivityBold, ActivityBroken, ActivityBulk, ActivityLinear, ActivityOutline, ActivityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "activity-bold",
    Component: ActivityBold,
    componentName: "ActivityBold",
  },
  {
    variant: "broken",
    slug: "activity-broken",
    Component: ActivityBroken,
    componentName: "ActivityBroken",
  },
  {
    variant: "bulk",
    slug: "activity-bulk",
    Component: ActivityBulk,
    componentName: "ActivityBulk",
  },
  {
    variant: "linear",
    slug: "activity-linear",
    Component: ActivityLinear,
    componentName: "ActivityLinear",
  },
  {
    variant: "outline",
    slug: "activity-outline",
    Component: ActivityOutline,
    componentName: "ActivityOutline",
  },
  {
    variant: "twotone",
    slug: "activity-twotone",
    Component: ActivityTwotone,
    componentName: "ActivityTwotone",
  },
];
