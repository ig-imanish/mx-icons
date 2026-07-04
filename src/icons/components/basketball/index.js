import BasketballBold from "./BasketballBold";
import BasketballBroken from "./BasketballBroken";
import BasketballBulk from "./BasketballBulk";
import BasketballLinear from "./BasketballLinear";
import BasketballOutline from "./BasketballOutline";
import BasketballTwotone from "./BasketballTwotone";

export { BasketballBold, BasketballBroken, BasketballBulk, BasketballLinear, BasketballOutline, BasketballTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "basketball-bold",
    Component: BasketballBold,
    componentName: "BasketballBold",
  },,
  {
    variant: "broken",
    slug: "basketball-broken",
    Component: BasketballBroken,
    componentName: "BasketballBroken",
  },,
  {
    variant: "bulk",
    slug: "basketball-bulk",
    Component: BasketballBulk,
    componentName: "BasketballBulk",
  },,
  {
    variant: "linear",
    slug: "basketball-linear",
    Component: BasketballLinear,
    componentName: "BasketballLinear",
  },,
  {
    variant: "outline",
    slug: "basketball-outline",
    Component: BasketballOutline,
    componentName: "BasketballOutline",
  },,
  {
    variant: "twotone",
    slug: "basketball-twotone",
    Component: BasketballTwotone,
    componentName: "BasketballTwotone",
  }
];

export default { BasketballBold, BasketballBroken, BasketballBulk, BasketballLinear, BasketballOutline, BasketballTwotone };
