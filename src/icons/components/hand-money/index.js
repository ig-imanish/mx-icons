import HandMoneyBold from "./HandMoneyBold";
import HandMoneyBroken from "./HandMoneyBroken";
import HandMoneyBulk from "./HandMoneyBulk";
import HandMoneyLinear from "./HandMoneyLinear";
import HandMoneyOutline from "./HandMoneyOutline";
import HandMoneyTwotone from "./HandMoneyTwotone";

export { HandMoneyBold, HandMoneyBroken, HandMoneyBulk, HandMoneyLinear, HandMoneyOutline, HandMoneyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hand-money-bold",
    Component: HandMoneyBold,
    componentName: "HandMoneyBold",
  },,
  {
    variant: "broken",
    slug: "hand-money-broken",
    Component: HandMoneyBroken,
    componentName: "HandMoneyBroken",
  },,
  {
    variant: "bulk",
    slug: "hand-money-bulk",
    Component: HandMoneyBulk,
    componentName: "HandMoneyBulk",
  },,
  {
    variant: "linear",
    slug: "hand-money-linear",
    Component: HandMoneyLinear,
    componentName: "HandMoneyLinear",
  },,
  {
    variant: "outline",
    slug: "hand-money-outline",
    Component: HandMoneyOutline,
    componentName: "HandMoneyOutline",
  },,
  {
    variant: "twotone",
    slug: "hand-money-twotone",
    Component: HandMoneyTwotone,
    componentName: "HandMoneyTwotone",
  }
];

export default { HandMoneyBold, HandMoneyBroken, HandMoneyBulk, HandMoneyLinear, HandMoneyOutline, HandMoneyTwotone };
