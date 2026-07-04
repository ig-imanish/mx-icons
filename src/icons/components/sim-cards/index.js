import SimCardsBold from "./SimCardsBold";
import SimCardsBroken from "./SimCardsBroken";
import SimCardsBulk from "./SimCardsBulk";
import SimCardsLinear from "./SimCardsLinear";
import SimCardsOutline from "./SimCardsOutline";
import SimCardsTwotone from "./SimCardsTwotone";

export { SimCardsBold, SimCardsBroken, SimCardsBulk, SimCardsLinear, SimCardsOutline, SimCardsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sim-cards-bold",
    Component: SimCardsBold,
    componentName: "SimCardsBold",
  },,
  {
    variant: "broken",
    slug: "sim-cards-broken",
    Component: SimCardsBroken,
    componentName: "SimCardsBroken",
  },,
  {
    variant: "bulk",
    slug: "sim-cards-bulk",
    Component: SimCardsBulk,
    componentName: "SimCardsBulk",
  },,
  {
    variant: "linear",
    slug: "sim-cards-linear",
    Component: SimCardsLinear,
    componentName: "SimCardsLinear",
  },,
  {
    variant: "outline",
    slug: "sim-cards-outline",
    Component: SimCardsOutline,
    componentName: "SimCardsOutline",
  },,
  {
    variant: "twotone",
    slug: "sim-cards-twotone",
    Component: SimCardsTwotone,
    componentName: "SimCardsTwotone",
  }
];

export default { SimCardsBold, SimCardsBroken, SimCardsBulk, SimCardsLinear, SimCardsOutline, SimCardsTwotone };
