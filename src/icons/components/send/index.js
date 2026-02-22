import SendBold from "./SendBold";
import SendBroken from "./SendBroken";
import SendBulk from "./SendBulk";
import SendLinear from "./SendLinear";
import SendOutline from "./SendOutline";
import SendTwotone from "./SendTwotone";

export { SendBold, SendBroken, SendBulk, SendLinear, SendOutline, SendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "send-bold",
    Component: SendBold,
    componentName: "SendBold",
  },
  {
    variant: "broken",
    slug: "send-broken",
    Component: SendBroken,
    componentName: "SendBroken",
  },
  {
    variant: "bulk",
    slug: "send-bulk",
    Component: SendBulk,
    componentName: "SendBulk",
  },
  {
    variant: "linear",
    slug: "send-linear",
    Component: SendLinear,
    componentName: "SendLinear",
  },
  {
    variant: "outline",
    slug: "send-outline",
    Component: SendOutline,
    componentName: "SendOutline",
  },
  {
    variant: "twotone",
    slug: "send-twotone",
    Component: SendTwotone,
    componentName: "SendTwotone",
  },
];
