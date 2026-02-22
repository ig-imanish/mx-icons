import DirectNormalBold from "./DirectNormalBold";
import DirectNormalBroken from "./DirectNormalBroken";
import DirectNormalBulk from "./DirectNormalBulk";
import DirectNormalLinear from "./DirectNormalLinear";
import DirectNormalOutline from "./DirectNormalOutline";
import DirectNormalTwotone from "./DirectNormalTwotone";

export { DirectNormalBold, DirectNormalBroken, DirectNormalBulk, DirectNormalLinear, DirectNormalOutline, DirectNormalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-normal-bold",
    Component: DirectNormalBold,
    componentName: "DirectNormalBold",
  },
  {
    variant: "broken",
    slug: "direct-normal-broken",
    Component: DirectNormalBroken,
    componentName: "DirectNormalBroken",
  },
  {
    variant: "bulk",
    slug: "direct-normal-bulk",
    Component: DirectNormalBulk,
    componentName: "DirectNormalBulk",
  },
  {
    variant: "linear",
    slug: "direct-normal-linear",
    Component: DirectNormalLinear,
    componentName: "DirectNormalLinear",
  },
  {
    variant: "outline",
    slug: "direct-normal-outline",
    Component: DirectNormalOutline,
    componentName: "DirectNormalOutline",
  },
  {
    variant: "twotone",
    slug: "direct-normal-twotone",
    Component: DirectNormalTwotone,
    componentName: "DirectNormalTwotone",
  },
];
