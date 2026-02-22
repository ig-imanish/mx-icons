import Lock1Bold from "./Lock1Bold";
import Lock1Broken from "./Lock1Broken";
import Lock1Bulk from "./Lock1Bulk";
import Lock1Linear from "./Lock1Linear";
import Lock1Outline from "./Lock1Outline";
import Lock1Twotone from "./Lock1Twotone";

export { Lock1Bold, Lock1Broken, Lock1Bulk, Lock1Linear, Lock1Outline, Lock1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock1-bold",
    Component: Lock1Bold,
    componentName: "Lock1Bold",
  },
  {
    variant: "broken",
    slug: "lock1-broken",
    Component: Lock1Broken,
    componentName: "Lock1Broken",
  },
  {
    variant: "bulk",
    slug: "lock1-bulk",
    Component: Lock1Bulk,
    componentName: "Lock1Bulk",
  },
  {
    variant: "linear",
    slug: "lock1-linear",
    Component: Lock1Linear,
    componentName: "Lock1Linear",
  },
  {
    variant: "outline",
    slug: "lock1-outline",
    Component: Lock1Outline,
    componentName: "Lock1Outline",
  },
  {
    variant: "twotone",
    slug: "lock1-twotone",
    Component: Lock1Twotone,
    componentName: "Lock1Twotone",
  },
];
