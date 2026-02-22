import CardReceiveBold from "./CardReceiveBold";
import CardReceiveBroken from "./CardReceiveBroken";
import CardReceiveBulk from "./CardReceiveBulk";
import CardReceiveLinear from "./CardReceiveLinear";
import CardReceiveOutline from "./CardReceiveOutline";
import CardReceiveTwotone from "./CardReceiveTwotone";

export { CardReceiveBold, CardReceiveBroken, CardReceiveBulk, CardReceiveLinear, CardReceiveOutline, CardReceiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-receive-bold",
    Component: CardReceiveBold,
    componentName: "CardReceiveBold",
  },
  {
    variant: "broken",
    slug: "card-receive-broken",
    Component: CardReceiveBroken,
    componentName: "CardReceiveBroken",
  },
  {
    variant: "bulk",
    slug: "card-receive-bulk",
    Component: CardReceiveBulk,
    componentName: "CardReceiveBulk",
  },
  {
    variant: "linear",
    slug: "card-receive-linear",
    Component: CardReceiveLinear,
    componentName: "CardReceiveLinear",
  },
  {
    variant: "outline",
    slug: "card-receive-outline",
    Component: CardReceiveOutline,
    componentName: "CardReceiveOutline",
  },
  {
    variant: "twotone",
    slug: "card-receive-twotone",
    Component: CardReceiveTwotone,
    componentName: "CardReceiveTwotone",
  },
];
