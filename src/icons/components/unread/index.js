import UnreadBold from "./UnreadBold";
import UnreadBroken from "./UnreadBroken";
import UnreadBulk from "./UnreadBulk";
import UnreadLinear from "./UnreadLinear";
import UnreadOutline from "./UnreadOutline";
import UnreadTwotone from "./UnreadTwotone";

export { UnreadBold, UnreadBroken, UnreadBulk, UnreadLinear, UnreadOutline, UnreadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "unread-bold",
    Component: UnreadBold,
    componentName: "UnreadBold",
  },,
  {
    variant: "broken",
    slug: "unread-broken",
    Component: UnreadBroken,
    componentName: "UnreadBroken",
  },,
  {
    variant: "bulk",
    slug: "unread-bulk",
    Component: UnreadBulk,
    componentName: "UnreadBulk",
  },,
  {
    variant: "linear",
    slug: "unread-linear",
    Component: UnreadLinear,
    componentName: "UnreadLinear",
  },,
  {
    variant: "outline",
    slug: "unread-outline",
    Component: UnreadOutline,
    componentName: "UnreadOutline",
  },,
  {
    variant: "twotone",
    slug: "unread-twotone",
    Component: UnreadTwotone,
    componentName: "UnreadTwotone",
  }
];

export default { UnreadBold, UnreadBroken, UnreadBulk, UnreadLinear, UnreadOutline, UnreadTwotone };
