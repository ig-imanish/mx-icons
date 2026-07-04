import TicketSaleBold from "./TicketSaleBold";
import TicketSaleBroken from "./TicketSaleBroken";
import TicketSaleBulk from "./TicketSaleBulk";
import TicketSaleLinear from "./TicketSaleLinear";
import TicketSaleOutline from "./TicketSaleOutline";
import TicketSaleTwotone from "./TicketSaleTwotone";

export { TicketSaleBold, TicketSaleBroken, TicketSaleBulk, TicketSaleLinear, TicketSaleOutline, TicketSaleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticket-sale-bold",
    Component: TicketSaleBold,
    componentName: "TicketSaleBold",
  },,
  {
    variant: "broken",
    slug: "ticket-sale-broken",
    Component: TicketSaleBroken,
    componentName: "TicketSaleBroken",
  },,
  {
    variant: "bulk",
    slug: "ticket-sale-bulk",
    Component: TicketSaleBulk,
    componentName: "TicketSaleBulk",
  },,
  {
    variant: "linear",
    slug: "ticket-sale-linear",
    Component: TicketSaleLinear,
    componentName: "TicketSaleLinear",
  },,
  {
    variant: "outline",
    slug: "ticket-sale-outline",
    Component: TicketSaleOutline,
    componentName: "TicketSaleOutline",
  },,
  {
    variant: "twotone",
    slug: "ticket-sale-twotone",
    Component: TicketSaleTwotone,
    componentName: "TicketSaleTwotone",
  }
];

export default { TicketSaleBold, TicketSaleBroken, TicketSaleBulk, TicketSaleLinear, TicketSaleOutline, TicketSaleTwotone };
