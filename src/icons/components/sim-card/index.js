import SimCardBold from "./SimCardBold";
import SimCardBroken from "./SimCardBroken";
import SimCardBulk from "./SimCardBulk";
import SimCardLinear from "./SimCardLinear";
import SimCardOutline from "./SimCardOutline";
import SimCardTwotone from "./SimCardTwotone";

export { SimCardBold, SimCardBroken, SimCardBulk, SimCardLinear, SimCardOutline, SimCardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sim-card-bold",
    Component: SimCardBold,
    componentName: "SimCardBold",
  },,
  {
    variant: "broken",
    slug: "sim-card-broken",
    Component: SimCardBroken,
    componentName: "SimCardBroken",
  },,
  {
    variant: "bulk",
    slug: "sim-card-bulk",
    Component: SimCardBulk,
    componentName: "SimCardBulk",
  },,
  {
    variant: "linear",
    slug: "sim-card-linear",
    Component: SimCardLinear,
    componentName: "SimCardLinear",
  },,
  {
    variant: "outline",
    slug: "sim-card-outline",
    Component: SimCardOutline,
    componentName: "SimCardOutline",
  },,
  {
    variant: "twotone",
    slug: "sim-card-twotone",
    Component: SimCardTwotone,
    componentName: "SimCardTwotone",
  }
];

export default { SimCardBold, SimCardBroken, SimCardBulk, SimCardLinear, SimCardOutline, SimCardTwotone };
