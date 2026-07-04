import MaskSadBold from "./MaskSadBold";
import MaskSadBroken from "./MaskSadBroken";
import MaskSadBulk from "./MaskSadBulk";
import MaskSadLinear from "./MaskSadLinear";
import MaskSadOutline from "./MaskSadOutline";
import MaskSadTwotone from "./MaskSadTwotone";

export { MaskSadBold, MaskSadBroken, MaskSadBulk, MaskSadLinear, MaskSadOutline, MaskSadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mask-sad-bold",
    Component: MaskSadBold,
    componentName: "MaskSadBold",
  },,
  {
    variant: "broken",
    slug: "mask-sad-broken",
    Component: MaskSadBroken,
    componentName: "MaskSadBroken",
  },,
  {
    variant: "bulk",
    slug: "mask-sad-bulk",
    Component: MaskSadBulk,
    componentName: "MaskSadBulk",
  },,
  {
    variant: "linear",
    slug: "mask-sad-linear",
    Component: MaskSadLinear,
    componentName: "MaskSadLinear",
  },,
  {
    variant: "outline",
    slug: "mask-sad-outline",
    Component: MaskSadOutline,
    componentName: "MaskSadOutline",
  },,
  {
    variant: "twotone",
    slug: "mask-sad-twotone",
    Component: MaskSadTwotone,
    componentName: "MaskSadTwotone",
  }
];

export default { MaskSadBold, MaskSadBroken, MaskSadBulk, MaskSadLinear, MaskSadOutline, MaskSadTwotone };
