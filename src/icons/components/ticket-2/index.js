import Ticket2Bold from "./Ticket2Bold";
import Ticket2Broken from "./Ticket2Broken";
import Ticket2Bulk from "./Ticket2Bulk";
import Ticket2Linear from "./Ticket2Linear";
import Ticket2Outline from "./Ticket2Outline";
import Ticket2Twotone from "./Ticket2Twotone";

export { Ticket2Bold, Ticket2Broken, Ticket2Bulk, Ticket2Linear, Ticket2Outline, Ticket2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticket2-bold",
    Component: Ticket2Bold,
    componentName: "Ticket2Bold",
  },
  {
    variant: "broken",
    slug: "ticket2-broken",
    Component: Ticket2Broken,
    componentName: "Ticket2Broken",
  },
  {
    variant: "bulk",
    slug: "ticket2-bulk",
    Component: Ticket2Bulk,
    componentName: "Ticket2Bulk",
  },
  {
    variant: "linear",
    slug: "ticket2-linear",
    Component: Ticket2Linear,
    componentName: "Ticket2Linear",
  },
  {
    variant: "outline",
    slug: "ticket2-outline",
    Component: Ticket2Outline,
    componentName: "Ticket2Outline",
  },
  {
    variant: "twotone",
    slug: "ticket2-twotone",
    Component: Ticket2Twotone,
    componentName: "Ticket2Twotone",
  },
];
