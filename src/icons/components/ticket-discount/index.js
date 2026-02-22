import TicketDiscountBold from "./TicketDiscountBold";
import TicketDiscountBroken from "./TicketDiscountBroken";
import TicketDiscountBulk from "./TicketDiscountBulk";
import TicketDiscountLinear from "./TicketDiscountLinear";
import TicketDiscountOutline from "./TicketDiscountOutline";
import TicketDiscountTwotone from "./TicketDiscountTwotone";

export { TicketDiscountBold, TicketDiscountBroken, TicketDiscountBulk, TicketDiscountLinear, TicketDiscountOutline, TicketDiscountTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticket-discount-bold",
    Component: TicketDiscountBold,
    componentName: "TicketDiscountBold",
  },
  {
    variant: "broken",
    slug: "ticket-discount-broken",
    Component: TicketDiscountBroken,
    componentName: "TicketDiscountBroken",
  },
  {
    variant: "bulk",
    slug: "ticket-discount-bulk",
    Component: TicketDiscountBulk,
    componentName: "TicketDiscountBulk",
  },
  {
    variant: "linear",
    slug: "ticket-discount-linear",
    Component: TicketDiscountLinear,
    componentName: "TicketDiscountLinear",
  },
  {
    variant: "outline",
    slug: "ticket-discount-outline",
    Component: TicketDiscountOutline,
    componentName: "TicketDiscountOutline",
  },
  {
    variant: "twotone",
    slug: "ticket-discount-twotone",
    Component: TicketDiscountTwotone,
    componentName: "TicketDiscountTwotone",
  },
];
