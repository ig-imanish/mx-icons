import ReplyBold from "./ReplyBold";
import ReplyBroken from "./ReplyBroken";
import ReplyBulk from "./ReplyBulk";
import ReplyLinear from "./ReplyLinear";
import ReplyOutline from "./ReplyOutline";
import ReplyTwotone from "./ReplyTwotone";

export { ReplyBold, ReplyBroken, ReplyBulk, ReplyLinear, ReplyOutline, ReplyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "reply-bold",
    Component: ReplyBold,
    componentName: "ReplyBold",
  },,
  {
    variant: "broken",
    slug: "reply-broken",
    Component: ReplyBroken,
    componentName: "ReplyBroken",
  },,
  {
    variant: "bulk",
    slug: "reply-bulk",
    Component: ReplyBulk,
    componentName: "ReplyBulk",
  },,
  {
    variant: "linear",
    slug: "reply-linear",
    Component: ReplyLinear,
    componentName: "ReplyLinear",
  },,
  {
    variant: "outline",
    slug: "reply-outline",
    Component: ReplyOutline,
    componentName: "ReplyOutline",
  },,
  {
    variant: "twotone",
    slug: "reply-twotone",
    Component: ReplyTwotone,
    componentName: "ReplyTwotone",
  }
];

export default { ReplyBold, ReplyBroken, ReplyBulk, ReplyLinear, ReplyOutline, ReplyTwotone };
