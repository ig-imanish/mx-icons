import AlarmBold from "./AlarmBold";
import AlarmBroken from "./AlarmBroken";
import AlarmBulk from "./AlarmBulk";
import AlarmLinear from "./AlarmLinear";
import AlarmOutline from "./AlarmOutline";
import AlarmTwotone from "./AlarmTwotone";

export { AlarmBold, AlarmBroken, AlarmBulk, AlarmLinear, AlarmOutline, AlarmTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "alarm-bold",
    Component: AlarmBold,
    componentName: "AlarmBold",
  },
  {
    variant: "broken",
    slug: "alarm-broken",
    Component: AlarmBroken,
    componentName: "AlarmBroken",
  },
  {
    variant: "bulk",
    slug: "alarm-bulk",
    Component: AlarmBulk,
    componentName: "AlarmBulk",
  },
  {
    variant: "linear",
    slug: "alarm-linear",
    Component: AlarmLinear,
    componentName: "AlarmLinear",
  },
  {
    variant: "outline",
    slug: "alarm-outline",
    Component: AlarmOutline,
    componentName: "AlarmOutline",
  },
  {
    variant: "twotone",
    slug: "alarm-twotone",
    Component: AlarmTwotone,
    componentName: "AlarmTwotone",
  },
];
