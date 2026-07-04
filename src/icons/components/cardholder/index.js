import CardholderBold from "./CardholderBold";
import CardholderBroken from "./CardholderBroken";
import CardholderBulk from "./CardholderBulk";
import CardholderLinear from "./CardholderLinear";
import CardholderOutline from "./CardholderOutline";
import CardholderTwotone from "./CardholderTwotone";

export { CardholderBold, CardholderBroken, CardholderBulk, CardholderLinear, CardholderOutline, CardholderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cardholder-bold",
    Component: CardholderBold,
    componentName: "CardholderBold",
  },,
  {
    variant: "broken",
    slug: "cardholder-broken",
    Component: CardholderBroken,
    componentName: "CardholderBroken",
  },,
  {
    variant: "bulk",
    slug: "cardholder-bulk",
    Component: CardholderBulk,
    componentName: "CardholderBulk",
  },,
  {
    variant: "linear",
    slug: "cardholder-linear",
    Component: CardholderLinear,
    componentName: "CardholderLinear",
  },,
  {
    variant: "outline",
    slug: "cardholder-outline",
    Component: CardholderOutline,
    componentName: "CardholderOutline",
  },,
  {
    variant: "twotone",
    slug: "cardholder-twotone",
    Component: CardholderTwotone,
    componentName: "CardholderTwotone",
  }
];

export default { CardholderBold, CardholderBroken, CardholderBulk, CardholderLinear, CardholderOutline, CardholderTwotone };
