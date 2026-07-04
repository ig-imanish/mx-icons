import InboxOutBold from "./InboxOutBold";
import InboxOutBroken from "./InboxOutBroken";
import InboxOutBulk from "./InboxOutBulk";
import InboxOutLinear from "./InboxOutLinear";
import InboxOutOutline from "./InboxOutOutline";
import InboxOutTwotone from "./InboxOutTwotone";

export { InboxOutBold, InboxOutBroken, InboxOutBulk, InboxOutLinear, InboxOutOutline, InboxOutTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "inbox-out-bold",
    Component: InboxOutBold,
    componentName: "InboxOutBold",
  },,
  {
    variant: "broken",
    slug: "inbox-out-broken",
    Component: InboxOutBroken,
    componentName: "InboxOutBroken",
  },,
  {
    variant: "bulk",
    slug: "inbox-out-bulk",
    Component: InboxOutBulk,
    componentName: "InboxOutBulk",
  },,
  {
    variant: "linear",
    slug: "inbox-out-linear",
    Component: InboxOutLinear,
    componentName: "InboxOutLinear",
  },,
  {
    variant: "outline",
    slug: "inbox-out-outline",
    Component: InboxOutOutline,
    componentName: "InboxOutOutline",
  },,
  {
    variant: "twotone",
    slug: "inbox-out-twotone",
    Component: InboxOutTwotone,
    componentName: "InboxOutTwotone",
  }
];

export default { InboxOutBold, InboxOutBroken, InboxOutBulk, InboxOutLinear, InboxOutOutline, InboxOutTwotone };
