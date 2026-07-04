import SyringeBold from "./SyringeBold";
import SyringeBroken from "./SyringeBroken";
import SyringeBulk from "./SyringeBulk";
import SyringeLinear from "./SyringeLinear";
import SyringeOutline from "./SyringeOutline";
import SyringeTwotone from "./SyringeTwotone";

export { SyringeBold, SyringeBroken, SyringeBulk, SyringeLinear, SyringeOutline, SyringeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "syringe-bold",
    Component: SyringeBold,
    componentName: "SyringeBold",
  },,
  {
    variant: "broken",
    slug: "syringe-broken",
    Component: SyringeBroken,
    componentName: "SyringeBroken",
  },,
  {
    variant: "bulk",
    slug: "syringe-bulk",
    Component: SyringeBulk,
    componentName: "SyringeBulk",
  },,
  {
    variant: "linear",
    slug: "syringe-linear",
    Component: SyringeLinear,
    componentName: "SyringeLinear",
  },,
  {
    variant: "outline",
    slug: "syringe-outline",
    Component: SyringeOutline,
    componentName: "SyringeOutline",
  },,
  {
    variant: "twotone",
    slug: "syringe-twotone",
    Component: SyringeTwotone,
    componentName: "SyringeTwotone",
  }
];

export default { SyringeBold, SyringeBroken, SyringeBulk, SyringeLinear, SyringeOutline, SyringeTwotone };
