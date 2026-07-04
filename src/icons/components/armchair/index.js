import ArmchairBold from "./ArmchairBold";
import ArmchairBroken from "./ArmchairBroken";
import ArmchairBulk from "./ArmchairBulk";
import ArmchairLinear from "./ArmchairLinear";
import ArmchairOutline from "./ArmchairOutline";
import ArmchairTwotone from "./ArmchairTwotone";

export { ArmchairBold, ArmchairBroken, ArmchairBulk, ArmchairLinear, ArmchairOutline, ArmchairTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "armchair-bold",
    Component: ArmchairBold,
    componentName: "ArmchairBold",
  },,
  {
    variant: "broken",
    slug: "armchair-broken",
    Component: ArmchairBroken,
    componentName: "ArmchairBroken",
  },,
  {
    variant: "bulk",
    slug: "armchair-bulk",
    Component: ArmchairBulk,
    componentName: "ArmchairBulk",
  },,
  {
    variant: "linear",
    slug: "armchair-linear",
    Component: ArmchairLinear,
    componentName: "ArmchairLinear",
  },,
  {
    variant: "outline",
    slug: "armchair-outline",
    Component: ArmchairOutline,
    componentName: "ArmchairOutline",
  },,
  {
    variant: "twotone",
    slug: "armchair-twotone",
    Component: ArmchairTwotone,
    componentName: "ArmchairTwotone",
  }
];

export default { ArmchairBold, ArmchairBroken, ArmchairBulk, ArmchairLinear, ArmchairOutline, ArmchairTwotone };
