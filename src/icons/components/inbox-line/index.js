import InboxLineBold from "./InboxLineBold";
import InboxLineBroken from "./InboxLineBroken";
import InboxLineBulk from "./InboxLineBulk";
import InboxLineLinear from "./InboxLineLinear";
import InboxLineOutline from "./InboxLineOutline";
import InboxLineTwotone from "./InboxLineTwotone";

export { InboxLineBold, InboxLineBroken, InboxLineBulk, InboxLineLinear, InboxLineOutline, InboxLineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "inbox-line-bold",
    Component: InboxLineBold,
    componentName: "InboxLineBold",
  },,
  {
    variant: "broken",
    slug: "inbox-line-broken",
    Component: InboxLineBroken,
    componentName: "InboxLineBroken",
  },,
  {
    variant: "bulk",
    slug: "inbox-line-bulk",
    Component: InboxLineBulk,
    componentName: "InboxLineBulk",
  },,
  {
    variant: "linear",
    slug: "inbox-line-linear",
    Component: InboxLineLinear,
    componentName: "InboxLineLinear",
  },,
  {
    variant: "outline",
    slug: "inbox-line-outline",
    Component: InboxLineOutline,
    componentName: "InboxLineOutline",
  },,
  {
    variant: "twotone",
    slug: "inbox-line-twotone",
    Component: InboxLineTwotone,
    componentName: "InboxLineTwotone",
  }
];

export default { InboxLineBold, InboxLineBroken, InboxLineBulk, InboxLineLinear, InboxLineOutline, InboxLineTwotone };
