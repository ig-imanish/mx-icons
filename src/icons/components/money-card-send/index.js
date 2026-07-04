import MoneyCardSendBold from "./MoneyCardSendBold";
import MoneyCardSendBroken from "./MoneyCardSendBroken";
import MoneyCardSendBulk from "./MoneyCardSendBulk";
import MoneyCardSendLinear from "./MoneyCardSendLinear";
import MoneyCardSendOutline from "./MoneyCardSendOutline";
import MoneyCardSendTwotone from "./MoneyCardSendTwotone";

export { MoneyCardSendBold, MoneyCardSendBroken, MoneyCardSendBulk, MoneyCardSendLinear, MoneyCardSendOutline, MoneyCardSendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-card-send-bold",
    Component: MoneyCardSendBold,
    componentName: "MoneyCardSendBold",
  },,
  {
    variant: "broken",
    slug: "money-card-send-broken",
    Component: MoneyCardSendBroken,
    componentName: "MoneyCardSendBroken",
  },,
  {
    variant: "bulk",
    slug: "money-card-send-bulk",
    Component: MoneyCardSendBulk,
    componentName: "MoneyCardSendBulk",
  },,
  {
    variant: "linear",
    slug: "money-card-send-linear",
    Component: MoneyCardSendLinear,
    componentName: "MoneyCardSendLinear",
  },,
  {
    variant: "outline",
    slug: "money-card-send-outline",
    Component: MoneyCardSendOutline,
    componentName: "MoneyCardSendOutline",
  },,
  {
    variant: "twotone",
    slug: "money-card-send-twotone",
    Component: MoneyCardSendTwotone,
    componentName: "MoneyCardSendTwotone",
  }
];

export default { MoneyCardSendBold, MoneyCardSendBroken, MoneyCardSendBulk, MoneyCardSendLinear, MoneyCardSendOutline, MoneyCardSendTwotone };
