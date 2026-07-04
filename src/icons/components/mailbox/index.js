import MailboxBold from "./MailboxBold";
import MailboxBroken from "./MailboxBroken";
import MailboxBulk from "./MailboxBulk";
import MailboxLinear from "./MailboxLinear";
import MailboxOutline from "./MailboxOutline";
import MailboxTwotone from "./MailboxTwotone";

export { MailboxBold, MailboxBroken, MailboxBulk, MailboxLinear, MailboxOutline, MailboxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mailbox-bold",
    Component: MailboxBold,
    componentName: "MailboxBold",
  },,
  {
    variant: "broken",
    slug: "mailbox-broken",
    Component: MailboxBroken,
    componentName: "MailboxBroken",
  },,
  {
    variant: "bulk",
    slug: "mailbox-bulk",
    Component: MailboxBulk,
    componentName: "MailboxBulk",
  },,
  {
    variant: "linear",
    slug: "mailbox-linear",
    Component: MailboxLinear,
    componentName: "MailboxLinear",
  },,
  {
    variant: "outline",
    slug: "mailbox-outline",
    Component: MailboxOutline,
    componentName: "MailboxOutline",
  },,
  {
    variant: "twotone",
    slug: "mailbox-twotone",
    Component: MailboxTwotone,
    componentName: "MailboxTwotone",
  }
];

export default { MailboxBold, MailboxBroken, MailboxBulk, MailboxLinear, MailboxOutline, MailboxTwotone };
