import TicketStarBold from "./TicketStarBold";
import TicketStarBroken from "./TicketStarBroken";
import TicketStarBulk from "./TicketStarBulk";
import TicketStarLinear from "./TicketStarLinear";
import TicketStarOutline from "./TicketStarOutline";
import TicketStarTwotone from "./TicketStarTwotone";

export { TicketStarBold, TicketStarBroken, TicketStarBulk, TicketStarLinear, TicketStarOutline, TicketStarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticket-star-bold",
    Component: TicketStarBold,
    componentName: "TicketStarBold",
  },
  {
    variant: "broken",
    slug: "ticket-star-broken",
    Component: TicketStarBroken,
    componentName: "TicketStarBroken",
  },
  {
    variant: "bulk",
    slug: "ticket-star-bulk",
    Component: TicketStarBulk,
    componentName: "TicketStarBulk",
  },
  {
    variant: "linear",
    slug: "ticket-star-linear",
    Component: TicketStarLinear,
    componentName: "TicketStarLinear",
  },
  {
    variant: "outline",
    slug: "ticket-star-outline",
    Component: TicketStarOutline,
    componentName: "TicketStarOutline",
  },
  {
    variant: "twotone",
    slug: "ticket-star-twotone",
    Component: TicketStarTwotone,
    componentName: "TicketStarTwotone",
  },
];
