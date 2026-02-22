import Money4Bold from "./Money4Bold";
import Money4Broken from "./Money4Broken";
import Money4Bulk from "./Money4Bulk";
import Money4Linear from "./Money4Linear";
import Money4Outline from "./Money4Outline";
import Money4Twotone from "./Money4Twotone";

export { Money4Bold, Money4Broken, Money4Bulk, Money4Linear, Money4Outline, Money4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "money4-bold",
    Component: Money4Bold,
    componentName: "Money4Bold",
  },
  {
    variant: "broken",
    slug: "money4-broken",
    Component: Money4Broken,
    componentName: "Money4Broken",
  },
  {
    variant: "bulk",
    slug: "money4-bulk",
    Component: Money4Bulk,
    componentName: "Money4Bulk",
  },
  {
    variant: "linear",
    slug: "money4-linear",
    Component: Money4Linear,
    componentName: "Money4Linear",
  },
  {
    variant: "outline",
    slug: "money4-outline",
    Component: Money4Outline,
    componentName: "Money4Outline",
  },
  {
    variant: "twotone",
    slug: "money4-twotone",
    Component: Money4Twotone,
    componentName: "Money4Twotone",
  },
];
