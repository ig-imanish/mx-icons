import Receipt1Bold from "./Receipt1Bold";
import Receipt1Broken from "./Receipt1Broken";
import Receipt1Bulk from "./Receipt1Bulk";
import Receipt1Linear from "./Receipt1Linear";
import Receipt1Outline from "./Receipt1Outline";
import Receipt1Twotone from "./Receipt1Twotone";

export { Receipt1Bold, Receipt1Broken, Receipt1Bulk, Receipt1Linear, Receipt1Outline, Receipt1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt1-bold",
    Component: Receipt1Bold,
    componentName: "Receipt1Bold",
  },
  {
    variant: "broken",
    slug: "receipt1-broken",
    Component: Receipt1Broken,
    componentName: "Receipt1Broken",
  },
  {
    variant: "bulk",
    slug: "receipt1-bulk",
    Component: Receipt1Bulk,
    componentName: "Receipt1Bulk",
  },
  {
    variant: "linear",
    slug: "receipt1-linear",
    Component: Receipt1Linear,
    componentName: "Receipt1Linear",
  },
  {
    variant: "outline",
    slug: "receipt1-outline",
    Component: Receipt1Outline,
    componentName: "Receipt1Outline",
  },
  {
    variant: "twotone",
    slug: "receipt1-twotone",
    Component: Receipt1Twotone,
    componentName: "Receipt1Twotone",
  },
];
