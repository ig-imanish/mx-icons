import TicketBold from "./TicketBold";
import TicketBroken from "./TicketBroken";
import TicketBulk from "./TicketBulk";
import TicketLinear from "./TicketLinear";
import TicketOutline from "./TicketOutline";
import TicketTwotone from "./TicketTwotone";

export { TicketBold, TicketBroken, TicketBulk, TicketLinear, TicketOutline, TicketTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticket-bold",
    Component: TicketBold,
    componentName: "TicketBold",
  },
  {
    variant: "broken",
    slug: "ticket-broken",
    Component: TicketBroken,
    componentName: "TicketBroken",
  },
  {
    variant: "bulk",
    slug: "ticket-bulk",
    Component: TicketBulk,
    componentName: "TicketBulk",
  },
  {
    variant: "linear",
    slug: "ticket-linear",
    Component: TicketLinear,
    componentName: "TicketLinear",
  },
  {
    variant: "outline",
    slug: "ticket-outline",
    Component: TicketOutline,
    componentName: "TicketOutline",
  },
  {
    variant: "twotone",
    slug: "ticket-twotone",
    Component: TicketTwotone,
    componentName: "TicketTwotone",
  },
];
