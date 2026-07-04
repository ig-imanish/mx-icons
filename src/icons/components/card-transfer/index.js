import CardTransferBold from "./CardTransferBold";
import CardTransferBroken from "./CardTransferBroken";
import CardTransferBulk from "./CardTransferBulk";
import CardTransferLinear from "./CardTransferLinear";
import CardTransferOutline from "./CardTransferOutline";
import CardTransferTwotone from "./CardTransferTwotone";

export { CardTransferBold, CardTransferBroken, CardTransferBulk, CardTransferLinear, CardTransferOutline, CardTransferTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-transfer-bold",
    Component: CardTransferBold,
    componentName: "CardTransferBold",
  },,
  {
    variant: "broken",
    slug: "card-transfer-broken",
    Component: CardTransferBroken,
    componentName: "CardTransferBroken",
  },,
  {
    variant: "bulk",
    slug: "card-transfer-bulk",
    Component: CardTransferBulk,
    componentName: "CardTransferBulk",
  },,
  {
    variant: "linear",
    slug: "card-transfer-linear",
    Component: CardTransferLinear,
    componentName: "CardTransferLinear",
  },,
  {
    variant: "outline",
    slug: "card-transfer-outline",
    Component: CardTransferOutline,
    componentName: "CardTransferOutline",
  },,
  {
    variant: "twotone",
    slug: "card-transfer-twotone",
    Component: CardTransferTwotone,
    componentName: "CardTransferTwotone",
  }
];

export default { CardTransferBold, CardTransferBroken, CardTransferBulk, CardTransferLinear, CardTransferOutline, CardTransferTwotone };
