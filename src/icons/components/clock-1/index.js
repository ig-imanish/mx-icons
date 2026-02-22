import Clock1Bold from "./Clock1Bold";
import Clock1Broken from "./Clock1Broken";
import Clock1Bulk from "./Clock1Bulk";
import Clock1Linear from "./Clock1Linear";
import Clock1Outline from "./Clock1Outline";
import Clock1Twotone from "./Clock1Twotone";

export { Clock1Bold, Clock1Broken, Clock1Bulk, Clock1Linear, Clock1Outline, Clock1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "clock1-bold",
    Component: Clock1Bold,
    componentName: "Clock1Bold",
  },
  {
    variant: "broken",
    slug: "clock1-broken",
    Component: Clock1Broken,
    componentName: "Clock1Broken",
  },
  {
    variant: "bulk",
    slug: "clock1-bulk",
    Component: Clock1Bulk,
    componentName: "Clock1Bulk",
  },
  {
    variant: "linear",
    slug: "clock1-linear",
    Component: Clock1Linear,
    componentName: "Clock1Linear",
  },
  {
    variant: "outline",
    slug: "clock1-outline",
    Component: Clock1Outline,
    componentName: "Clock1Outline",
  },
  {
    variant: "twotone",
    slug: "clock1-twotone",
    Component: Clock1Twotone,
    componentName: "Clock1Twotone",
  },
];
