import TicketExpiredBold from "./TicketExpiredBold";
import TicketExpiredBroken from "./TicketExpiredBroken";
import TicketExpiredBulk from "./TicketExpiredBulk";
import TicketExpiredLinear from "./TicketExpiredLinear";
import TicketExpiredOutline from "./TicketExpiredOutline";
import TicketExpiredTwotone from "./TicketExpiredTwotone";

export { TicketExpiredBold, TicketExpiredBroken, TicketExpiredBulk, TicketExpiredLinear, TicketExpiredOutline, TicketExpiredTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticket-expired-bold",
    Component: TicketExpiredBold,
    componentName: "TicketExpiredBold",
  },
  {
    variant: "broken",
    slug: "ticket-expired-broken",
    Component: TicketExpiredBroken,
    componentName: "TicketExpiredBroken",
  },
  {
    variant: "bulk",
    slug: "ticket-expired-bulk",
    Component: TicketExpiredBulk,
    componentName: "TicketExpiredBulk",
  },
  {
    variant: "linear",
    slug: "ticket-expired-linear",
    Component: TicketExpiredLinear,
    componentName: "TicketExpiredLinear",
  },
  {
    variant: "outline",
    slug: "ticket-expired-outline",
    Component: TicketExpiredOutline,
    componentName: "TicketExpiredOutline",
  },
  {
    variant: "twotone",
    slug: "ticket-expired-twotone",
    Component: TicketExpiredTwotone,
    componentName: "TicketExpiredTwotone",
  },
];
