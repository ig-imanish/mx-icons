import MoneySendBold from "./MoneySendBold";
import MoneySendBroken from "./MoneySendBroken";
import MoneySendBulk from "./MoneySendBulk";
import MoneySendLinear from "./MoneySendLinear";
import MoneySendOutline from "./MoneySendOutline";
import MoneySendTwotone from "./MoneySendTwotone";

export { MoneySendBold, MoneySendBroken, MoneySendBulk, MoneySendLinear, MoneySendOutline, MoneySendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-send-bold",
    Component: MoneySendBold,
    componentName: "MoneySendBold",
  },
  {
    variant: "broken",
    slug: "money-send-broken",
    Component: MoneySendBroken,
    componentName: "MoneySendBroken",
  },
  {
    variant: "bulk",
    slug: "money-send-bulk",
    Component: MoneySendBulk,
    componentName: "MoneySendBulk",
  },
  {
    variant: "linear",
    slug: "money-send-linear",
    Component: MoneySendLinear,
    componentName: "MoneySendLinear",
  },
  {
    variant: "outline",
    slug: "money-send-outline",
    Component: MoneySendOutline,
    componentName: "MoneySendOutline",
  },
  {
    variant: "twotone",
    slug: "money-send-twotone",
    Component: MoneySendTwotone,
    componentName: "MoneySendTwotone",
  },
];
