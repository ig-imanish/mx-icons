import NextBold from "./NextBold";
import NextBroken from "./NextBroken";
import NextBulk from "./NextBulk";
import NextLinear from "./NextLinear";
import NextOutline from "./NextOutline";
import NextTwotone from "./NextTwotone";

export { NextBold, NextBroken, NextBulk, NextLinear, NextOutline, NextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "next-bold",
    Component: NextBold,
    componentName: "NextBold",
  },
  {
    variant: "broken",
    slug: "next-broken",
    Component: NextBroken,
    componentName: "NextBroken",
  },
  {
    variant: "bulk",
    slug: "next-bulk",
    Component: NextBulk,
    componentName: "NextBulk",
  },
  {
    variant: "linear",
    slug: "next-linear",
    Component: NextLinear,
    componentName: "NextLinear",
  },
  {
    variant: "outline",
    slug: "next-outline",
    Component: NextOutline,
    componentName: "NextOutline",
  },
  {
    variant: "twotone",
    slug: "next-twotone",
    Component: NextTwotone,
    componentName: "NextTwotone",
  },
];
