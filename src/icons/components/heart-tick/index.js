import HeartTickBold from "./HeartTickBold";
import HeartTickBroken from "./HeartTickBroken";
import HeartTickBulk from "./HeartTickBulk";
import HeartTickLinear from "./HeartTickLinear";
import HeartTickOutline from "./HeartTickOutline";
import HeartTickTwotone from "./HeartTickTwotone";

export { HeartTickBold, HeartTickBroken, HeartTickBulk, HeartTickLinear, HeartTickOutline, HeartTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-tick-bold",
    Component: HeartTickBold,
    componentName: "HeartTickBold",
  },
  {
    variant: "broken",
    slug: "heart-tick-broken",
    Component: HeartTickBroken,
    componentName: "HeartTickBroken",
  },
  {
    variant: "bulk",
    slug: "heart-tick-bulk",
    Component: HeartTickBulk,
    componentName: "HeartTickBulk",
  },
  {
    variant: "linear",
    slug: "heart-tick-linear",
    Component: HeartTickLinear,
    componentName: "HeartTickLinear",
  },
  {
    variant: "outline",
    slug: "heart-tick-outline",
    Component: HeartTickOutline,
    componentName: "HeartTickOutline",
  },
  {
    variant: "twotone",
    slug: "heart-tick-twotone",
    Component: HeartTickTwotone,
    componentName: "HeartTickTwotone",
  },
];
