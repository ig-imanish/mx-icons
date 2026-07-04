import InboxArchiveBold from "./InboxArchiveBold";
import InboxArchiveBroken from "./InboxArchiveBroken";
import InboxArchiveBulk from "./InboxArchiveBulk";
import InboxArchiveLinear from "./InboxArchiveLinear";
import InboxArchiveOutline from "./InboxArchiveOutline";
import InboxArchiveTwotone from "./InboxArchiveTwotone";

export { InboxArchiveBold, InboxArchiveBroken, InboxArchiveBulk, InboxArchiveLinear, InboxArchiveOutline, InboxArchiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "inbox-archive-bold",
    Component: InboxArchiveBold,
    componentName: "InboxArchiveBold",
  },,
  {
    variant: "broken",
    slug: "inbox-archive-broken",
    Component: InboxArchiveBroken,
    componentName: "InboxArchiveBroken",
  },,
  {
    variant: "bulk",
    slug: "inbox-archive-bulk",
    Component: InboxArchiveBulk,
    componentName: "InboxArchiveBulk",
  },,
  {
    variant: "linear",
    slug: "inbox-archive-linear",
    Component: InboxArchiveLinear,
    componentName: "InboxArchiveLinear",
  },,
  {
    variant: "outline",
    slug: "inbox-archive-outline",
    Component: InboxArchiveOutline,
    componentName: "InboxArchiveOutline",
  },,
  {
    variant: "twotone",
    slug: "inbox-archive-twotone",
    Component: InboxArchiveTwotone,
    componentName: "InboxArchiveTwotone",
  }
];

export default { InboxArchiveBold, InboxArchiveBroken, InboxArchiveBulk, InboxArchiveLinear, InboxArchiveOutline, InboxArchiveTwotone };
