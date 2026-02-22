import CardSendBold from "./CardSendBold";
import CardSendBroken from "./CardSendBroken";
import CardSendBulk from "./CardSendBulk";
import CardSendLinear from "./CardSendLinear";
import CardSendOutline from "./CardSendOutline";
import CardSendTwotone from "./CardSendTwotone";

export { CardSendBold, CardSendBroken, CardSendBulk, CardSendLinear, CardSendOutline, CardSendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-send-bold",
    Component: CardSendBold,
    componentName: "CardSendBold",
  },
  {
    variant: "broken",
    slug: "card-send-broken",
    Component: CardSendBroken,
    componentName: "CardSendBroken",
  },
  {
    variant: "bulk",
    slug: "card-send-bulk",
    Component: CardSendBulk,
    componentName: "CardSendBulk",
  },
  {
    variant: "linear",
    slug: "card-send-linear",
    Component: CardSendLinear,
    componentName: "CardSendLinear",
  },
  {
    variant: "outline",
    slug: "card-send-outline",
    Component: CardSendOutline,
    componentName: "CardSendOutline",
  },
  {
    variant: "twotone",
    slug: "card-send-twotone",
    Component: CardSendTwotone,
    componentName: "CardSendTwotone",
  },
];
