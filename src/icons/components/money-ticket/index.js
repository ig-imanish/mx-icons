import MoneyTicketBold from "./MoneyTicketBold";
import MoneyTicketBroken from "./MoneyTicketBroken";
import MoneyTicketBulk from "./MoneyTicketBulk";
import MoneyTicketLinear from "./MoneyTicketLinear";
import MoneyTicketOutline from "./MoneyTicketOutline";
import MoneyTicketTwotone from "./MoneyTicketTwotone";

export { MoneyTicketBold, MoneyTicketBroken, MoneyTicketBulk, MoneyTicketLinear, MoneyTicketOutline, MoneyTicketTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-ticket-bold",
    Component: MoneyTicketBold,
    componentName: "MoneyTicketBold",
  },,
  {
    variant: "broken",
    slug: "money-ticket-broken",
    Component: MoneyTicketBroken,
    componentName: "MoneyTicketBroken",
  },,
  {
    variant: "bulk",
    slug: "money-ticket-bulk",
    Component: MoneyTicketBulk,
    componentName: "MoneyTicketBulk",
  },,
  {
    variant: "linear",
    slug: "money-ticket-linear",
    Component: MoneyTicketLinear,
    componentName: "MoneyTicketLinear",
  },,
  {
    variant: "outline",
    slug: "money-ticket-outline",
    Component: MoneyTicketOutline,
    componentName: "MoneyTicketOutline",
  },,
  {
    variant: "twotone",
    slug: "money-ticket-twotone",
    Component: MoneyTicketTwotone,
    componentName: "MoneyTicketTwotone",
  }
];

export default { MoneyTicketBold, MoneyTicketBroken, MoneyTicketBulk, MoneyTicketLinear, MoneyTicketOutline, MoneyTicketTwotone };
