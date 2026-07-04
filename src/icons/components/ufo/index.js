import UfoBold from "./UfoBold";
import UfoBroken from "./UfoBroken";
import UfoBulk from "./UfoBulk";
import UfoLinear from "./UfoLinear";
import UfoOutline from "./UfoOutline";
import UfoTwotone from "./UfoTwotone";

export { UfoBold, UfoBroken, UfoBulk, UfoLinear, UfoOutline, UfoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ufo-bold",
    Component: UfoBold,
    componentName: "UfoBold",
  },,
  {
    variant: "broken",
    slug: "ufo-broken",
    Component: UfoBroken,
    componentName: "UfoBroken",
  },,
  {
    variant: "bulk",
    slug: "ufo-bulk",
    Component: UfoBulk,
    componentName: "UfoBulk",
  },,
  {
    variant: "linear",
    slug: "ufo-linear",
    Component: UfoLinear,
    componentName: "UfoLinear",
  },,
  {
    variant: "outline",
    slug: "ufo-outline",
    Component: UfoOutline,
    componentName: "UfoOutline",
  },,
  {
    variant: "twotone",
    slug: "ufo-twotone",
    Component: UfoTwotone,
    componentName: "UfoTwotone",
  }
];

export default { UfoBold, UfoBroken, UfoBulk, UfoLinear, UfoOutline, UfoTwotone };
