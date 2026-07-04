import SendTwiceSquareBold from "./SendTwiceSquareBold";
import SendTwiceSquareBroken from "./SendTwiceSquareBroken";
import SendTwiceSquareBulk from "./SendTwiceSquareBulk";
import SendTwiceSquareLinear from "./SendTwiceSquareLinear";
import SendTwiceSquareOutline from "./SendTwiceSquareOutline";
import SendTwiceSquareTwotone from "./SendTwiceSquareTwotone";

export { SendTwiceSquareBold, SendTwiceSquareBroken, SendTwiceSquareBulk, SendTwiceSquareLinear, SendTwiceSquareOutline, SendTwiceSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "send-twice-square-bold",
    Component: SendTwiceSquareBold,
    componentName: "SendTwiceSquareBold",
  },,
  {
    variant: "broken",
    slug: "send-twice-square-broken",
    Component: SendTwiceSquareBroken,
    componentName: "SendTwiceSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "send-twice-square-bulk",
    Component: SendTwiceSquareBulk,
    componentName: "SendTwiceSquareBulk",
  },,
  {
    variant: "linear",
    slug: "send-twice-square-linear",
    Component: SendTwiceSquareLinear,
    componentName: "SendTwiceSquareLinear",
  },,
  {
    variant: "outline",
    slug: "send-twice-square-outline",
    Component: SendTwiceSquareOutline,
    componentName: "SendTwiceSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "send-twice-square-twotone",
    Component: SendTwiceSquareTwotone,
    componentName: "SendTwiceSquareTwotone",
  }
];

export default { SendTwiceSquareBold, SendTwiceSquareBroken, SendTwiceSquareBulk, SendTwiceSquareLinear, SendTwiceSquareOutline, SendTwiceSquareTwotone };
