import Money3Bold from "./Money3Bold";
import Money3Broken from "./Money3Broken";
import Money3Bulk from "./Money3Bulk";
import Money3Linear from "./Money3Linear";
import Money3Outline from "./Money3Outline";
import Money3Twotone from "./Money3Twotone";

export { Money3Bold, Money3Broken, Money3Bulk, Money3Linear, Money3Outline, Money3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "money3-bold",
    Component: Money3Bold,
    componentName: "Money3Bold",
  },
  {
    variant: "broken",
    slug: "money3-broken",
    Component: Money3Broken,
    componentName: "Money3Broken",
  },
  {
    variant: "bulk",
    slug: "money3-bulk",
    Component: Money3Bulk,
    componentName: "Money3Bulk",
  },
  {
    variant: "linear",
    slug: "money3-linear",
    Component: Money3Linear,
    componentName: "Money3Linear",
  },
  {
    variant: "outline",
    slug: "money3-outline",
    Component: Money3Outline,
    componentName: "Money3Outline",
  },
  {
    variant: "twotone",
    slug: "money3-twotone",
    Component: Money3Twotone,
    componentName: "Money3Twotone",
  },
];
