import BlendBold from "./BlendBold";
import BlendBroken from "./BlendBroken";
import BlendBulk from "./BlendBulk";
import BlendLinear from "./BlendLinear";
import BlendOutline from "./BlendOutline";
import BlendTwotone from "./BlendTwotone";

export { BlendBold, BlendBroken, BlendBulk, BlendLinear, BlendOutline, BlendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "blend-bold",
    Component: BlendBold,
    componentName: "BlendBold",
  },
  {
    variant: "broken",
    slug: "blend-broken",
    Component: BlendBroken,
    componentName: "BlendBroken",
  },
  {
    variant: "bulk",
    slug: "blend-bulk",
    Component: BlendBulk,
    componentName: "BlendBulk",
  },
  {
    variant: "linear",
    slug: "blend-linear",
    Component: BlendLinear,
    componentName: "BlendLinear",
  },
  {
    variant: "outline",
    slug: "blend-outline",
    Component: BlendOutline,
    componentName: "BlendOutline",
  },
  {
    variant: "twotone",
    slug: "blend-twotone",
    Component: BlendTwotone,
    componentName: "BlendTwotone",
  },
];
