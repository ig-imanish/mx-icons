import RadialBlurBold from "./RadialBlurBold";
import RadialBlurBroken from "./RadialBlurBroken";
import RadialBlurBulk from "./RadialBlurBulk";
import RadialBlurLinear from "./RadialBlurLinear";
import RadialBlurOutline from "./RadialBlurOutline";
import RadialBlurTwotone from "./RadialBlurTwotone";

export { RadialBlurBold, RadialBlurBroken, RadialBlurBulk, RadialBlurLinear, RadialBlurOutline, RadialBlurTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "radial-blur-bold",
    Component: RadialBlurBold,
    componentName: "RadialBlurBold",
  },,
  {
    variant: "broken",
    slug: "radial-blur-broken",
    Component: RadialBlurBroken,
    componentName: "RadialBlurBroken",
  },,
  {
    variant: "bulk",
    slug: "radial-blur-bulk",
    Component: RadialBlurBulk,
    componentName: "RadialBlurBulk",
  },,
  {
    variant: "linear",
    slug: "radial-blur-linear",
    Component: RadialBlurLinear,
    componentName: "RadialBlurLinear",
  },,
  {
    variant: "outline",
    slug: "radial-blur-outline",
    Component: RadialBlurOutline,
    componentName: "RadialBlurOutline",
  },,
  {
    variant: "twotone",
    slug: "radial-blur-twotone",
    Component: RadialBlurTwotone,
    componentName: "RadialBlurTwotone",
  }
];

export default { RadialBlurBold, RadialBlurBroken, RadialBlurBulk, RadialBlurLinear, RadialBlurOutline, RadialBlurTwotone };
