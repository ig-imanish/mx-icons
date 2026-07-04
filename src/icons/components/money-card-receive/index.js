import MoneyCardReceiveBold from "./MoneyCardReceiveBold";
import MoneyCardReceiveBroken from "./MoneyCardReceiveBroken";
import MoneyCardReceiveBulk from "./MoneyCardReceiveBulk";
import MoneyCardReceiveLinear from "./MoneyCardReceiveLinear";
import MoneyCardReceiveOutline from "./MoneyCardReceiveOutline";
import MoneyCardReceiveTwotone from "./MoneyCardReceiveTwotone";

export { MoneyCardReceiveBold, MoneyCardReceiveBroken, MoneyCardReceiveBulk, MoneyCardReceiveLinear, MoneyCardReceiveOutline, MoneyCardReceiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-card-receive-bold",
    Component: MoneyCardReceiveBold,
    componentName: "MoneyCardReceiveBold",
  },,
  {
    variant: "broken",
    slug: "money-card-receive-broken",
    Component: MoneyCardReceiveBroken,
    componentName: "MoneyCardReceiveBroken",
  },,
  {
    variant: "bulk",
    slug: "money-card-receive-bulk",
    Component: MoneyCardReceiveBulk,
    componentName: "MoneyCardReceiveBulk",
  },,
  {
    variant: "linear",
    slug: "money-card-receive-linear",
    Component: MoneyCardReceiveLinear,
    componentName: "MoneyCardReceiveLinear",
  },,
  {
    variant: "outline",
    slug: "money-card-receive-outline",
    Component: MoneyCardReceiveOutline,
    componentName: "MoneyCardReceiveOutline",
  },,
  {
    variant: "twotone",
    slug: "money-card-receive-twotone",
    Component: MoneyCardReceiveTwotone,
    componentName: "MoneyCardReceiveTwotone",
  }
];

export default { MoneyCardReceiveBold, MoneyCardReceiveBroken, MoneyCardReceiveBulk, MoneyCardReceiveLinear, MoneyCardReceiveOutline, MoneyCardReceiveTwotone };
