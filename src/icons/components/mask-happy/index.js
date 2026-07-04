import MaskHappyBold from "./MaskHappyBold";
import MaskHappyBroken from "./MaskHappyBroken";
import MaskHappyBulk from "./MaskHappyBulk";
import MaskHappyLinear from "./MaskHappyLinear";
import MaskHappyOutline from "./MaskHappyOutline";
import MaskHappyTwotone from "./MaskHappyTwotone";

export { MaskHappyBold, MaskHappyBroken, MaskHappyBulk, MaskHappyLinear, MaskHappyOutline, MaskHappyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mask-happy-bold",
    Component: MaskHappyBold,
    componentName: "MaskHappyBold",
  },,
  {
    variant: "broken",
    slug: "mask-happy-broken",
    Component: MaskHappyBroken,
    componentName: "MaskHappyBroken",
  },,
  {
    variant: "bulk",
    slug: "mask-happy-bulk",
    Component: MaskHappyBulk,
    componentName: "MaskHappyBulk",
  },,
  {
    variant: "linear",
    slug: "mask-happy-linear",
    Component: MaskHappyLinear,
    componentName: "MaskHappyLinear",
  },,
  {
    variant: "outline",
    slug: "mask-happy-outline",
    Component: MaskHappyOutline,
    componentName: "MaskHappyOutline",
  },,
  {
    variant: "twotone",
    slug: "mask-happy-twotone",
    Component: MaskHappyTwotone,
    componentName: "MaskHappyTwotone",
  }
];

export default { MaskHappyBold, MaskHappyBroken, MaskHappyBulk, MaskHappyLinear, MaskHappyOutline, MaskHappyTwotone };
