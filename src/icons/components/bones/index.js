import BonesBold from "./BonesBold";
import BonesBroken from "./BonesBroken";
import BonesBulk from "./BonesBulk";
import BonesLinear from "./BonesLinear";
import BonesOutline from "./BonesOutline";
import BonesTwotone from "./BonesTwotone";

export { BonesBold, BonesBroken, BonesBulk, BonesLinear, BonesOutline, BonesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bones-bold",
    Component: BonesBold,
    componentName: "BonesBold",
  },,
  {
    variant: "broken",
    slug: "bones-broken",
    Component: BonesBroken,
    componentName: "BonesBroken",
  },,
  {
    variant: "bulk",
    slug: "bones-bulk",
    Component: BonesBulk,
    componentName: "BonesBulk",
  },,
  {
    variant: "linear",
    slug: "bones-linear",
    Component: BonesLinear,
    componentName: "BonesLinear",
  },,
  {
    variant: "outline",
    slug: "bones-outline",
    Component: BonesOutline,
    componentName: "BonesOutline",
  },,
  {
    variant: "twotone",
    slug: "bones-twotone",
    Component: BonesTwotone,
    componentName: "BonesTwotone",
  }
];

export default { BonesBold, BonesBroken, BonesBulk, BonesLinear, BonesOutline, BonesTwotone };
