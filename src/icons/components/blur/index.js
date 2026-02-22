import BlurBold from "./BlurBold";
import BlurBroken from "./BlurBroken";
import BlurBulk from "./BlurBulk";
import BlurLinear from "./BlurLinear";
import BlurOutline from "./BlurOutline";
import BlurTwotone from "./BlurTwotone";

export { BlurBold, BlurBroken, BlurBulk, BlurLinear, BlurOutline, BlurTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "blur-bold",
    Component: BlurBold,
    componentName: "BlurBold",
  },
  {
    variant: "broken",
    slug: "blur-broken",
    Component: BlurBroken,
    componentName: "BlurBroken",
  },
  {
    variant: "bulk",
    slug: "blur-bulk",
    Component: BlurBulk,
    componentName: "BlurBulk",
  },
  {
    variant: "linear",
    slug: "blur-linear",
    Component: BlurLinear,
    componentName: "BlurLinear",
  },
  {
    variant: "outline",
    slug: "blur-outline",
    Component: BlurOutline,
    componentName: "BlurOutline",
  },
  {
    variant: "twotone",
    slug: "blur-twotone",
    Component: BlurTwotone,
    componentName: "BlurTwotone",
  },
];
