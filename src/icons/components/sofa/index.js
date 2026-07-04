import SofaBold from "./SofaBold";
import SofaBroken from "./SofaBroken";
import SofaBulk from "./SofaBulk";
import SofaLinear from "./SofaLinear";
import SofaOutline from "./SofaOutline";
import SofaTwotone from "./SofaTwotone";

export { SofaBold, SofaBroken, SofaBulk, SofaLinear, SofaOutline, SofaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sofa-bold",
    Component: SofaBold,
    componentName: "SofaBold",
  },,
  {
    variant: "broken",
    slug: "sofa-broken",
    Component: SofaBroken,
    componentName: "SofaBroken",
  },,
  {
    variant: "bulk",
    slug: "sofa-bulk",
    Component: SofaBulk,
    componentName: "SofaBulk",
  },,
  {
    variant: "linear",
    slug: "sofa-linear",
    Component: SofaLinear,
    componentName: "SofaLinear",
  },,
  {
    variant: "outline",
    slug: "sofa-outline",
    Component: SofaOutline,
    componentName: "SofaOutline",
  },,
  {
    variant: "twotone",
    slug: "sofa-twotone",
    Component: SofaTwotone,
    componentName: "SofaTwotone",
  }
];

export default { SofaBold, SofaBroken, SofaBulk, SofaLinear, SofaOutline, SofaTwotone };
