import SendSquareBold from "./SendSquareBold";
import SendSquareBroken from "./SendSquareBroken";
import SendSquareBulk from "./SendSquareBulk";
import SendSquareLinear from "./SendSquareLinear";
import SendSquareOutline from "./SendSquareOutline";
import SendSquareTwotone from "./SendSquareTwotone";

export { SendSquareBold, SendSquareBroken, SendSquareBulk, SendSquareLinear, SendSquareOutline, SendSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "send-square-bold",
    Component: SendSquareBold,
    componentName: "SendSquareBold",
  },
  {
    variant: "broken",
    slug: "send-square-broken",
    Component: SendSquareBroken,
    componentName: "SendSquareBroken",
  },
  {
    variant: "bulk",
    slug: "send-square-bulk",
    Component: SendSquareBulk,
    componentName: "SendSquareBulk",
  },
  {
    variant: "linear",
    slug: "send-square-linear",
    Component: SendSquareLinear,
    componentName: "SendSquareLinear",
  },
  {
    variant: "outline",
    slug: "send-square-outline",
    Component: SendSquareOutline,
    componentName: "SendSquareOutline",
  },
  {
    variant: "twotone",
    slug: "send-square-twotone",
    Component: SendSquareTwotone,
    componentName: "SendSquareTwotone",
  },
];
