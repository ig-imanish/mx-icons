import BoneBold from "./BoneBold";
import BoneBroken from "./BoneBroken";
import BoneBulk from "./BoneBulk";
import BoneLinear from "./BoneLinear";
import BoneOutline from "./BoneOutline";
import BoneTwotone from "./BoneTwotone";

export { BoneBold, BoneBroken, BoneBulk, BoneLinear, BoneOutline, BoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bone-bold",
    Component: BoneBold,
    componentName: "BoneBold",
  },,
  {
    variant: "broken",
    slug: "bone-broken",
    Component: BoneBroken,
    componentName: "BoneBroken",
  },,
  {
    variant: "bulk",
    slug: "bone-bulk",
    Component: BoneBulk,
    componentName: "BoneBulk",
  },,
  {
    variant: "linear",
    slug: "bone-linear",
    Component: BoneLinear,
    componentName: "BoneLinear",
  },,
  {
    variant: "outline",
    slug: "bone-outline",
    Component: BoneOutline,
    componentName: "BoneOutline",
  },,
  {
    variant: "twotone",
    slug: "bone-twotone",
    Component: BoneTwotone,
    componentName: "BoneTwotone",
  }
];

export default { BoneBold, BoneBroken, BoneBulk, BoneLinear, BoneOutline, BoneTwotone };
