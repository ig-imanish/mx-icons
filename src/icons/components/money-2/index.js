import Money2Bold from "./Money2Bold";
import Money2Broken from "./Money2Broken";
import Money2Bulk from "./Money2Bulk";
import Money2Linear from "./Money2Linear";
import Money2Outline from "./Money2Outline";
import Money2Twotone from "./Money2Twotone";

export { Money2Bold, Money2Broken, Money2Bulk, Money2Linear, Money2Outline, Money2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "money2-bold",
    Component: Money2Bold,
    componentName: "Money2Bold",
  },
  {
    variant: "broken",
    slug: "money2-broken",
    Component: Money2Broken,
    componentName: "Money2Broken",
  },
  {
    variant: "bulk",
    slug: "money2-bulk",
    Component: Money2Bulk,
    componentName: "Money2Bulk",
  },
  {
    variant: "linear",
    slug: "money2-linear",
    Component: Money2Linear,
    componentName: "Money2Linear",
  },
  {
    variant: "outline",
    slug: "money2-outline",
    Component: Money2Outline,
    componentName: "Money2Outline",
  },
  {
    variant: "twotone",
    slug: "money2-twotone",
    Component: Money2Twotone,
    componentName: "Money2Twotone",
  },
];
