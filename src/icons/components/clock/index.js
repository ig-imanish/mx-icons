import ClockBold from "./ClockBold";
import ClockBroken from "./ClockBroken";
import ClockBulk from "./ClockBulk";
import ClockLinear from "./ClockLinear";
import ClockOutline from "./ClockOutline";
import ClockTwotone from "./ClockTwotone";

export { ClockBold, ClockBroken, ClockBulk, ClockLinear, ClockOutline, ClockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clock-bold",
    Component: ClockBold,
    componentName: "ClockBold",
  },
  {
    variant: "broken",
    slug: "clock-broken",
    Component: ClockBroken,
    componentName: "ClockBroken",
  },
  {
    variant: "bulk",
    slug: "clock-bulk",
    Component: ClockBulk,
    componentName: "ClockBulk",
  },
  {
    variant: "linear",
    slug: "clock-linear",
    Component: ClockLinear,
    componentName: "ClockLinear",
  },
  {
    variant: "outline",
    slug: "clock-outline",
    Component: ClockOutline,
    componentName: "ClockOutline",
  },
  {
    variant: "twotone",
    slug: "clock-twotone",
    Component: ClockTwotone,
    componentName: "ClockTwotone",
  },
];
