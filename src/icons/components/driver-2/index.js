import Driver2Bold from "./Driver2Bold";
import Driver2Broken from "./Driver2Broken";
import Driver2Bulk from "./Driver2Bulk";
import Driver2Linear from "./Driver2Linear";
import Driver2Outline from "./Driver2Outline";
import Driver2Twotone from "./Driver2Twotone";

export { Driver2Bold, Driver2Broken, Driver2Bulk, Driver2Linear, Driver2Outline, Driver2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "driver2-bold",
    Component: Driver2Bold,
    componentName: "Driver2Bold",
  },
  {
    variant: "broken",
    slug: "driver2-broken",
    Component: Driver2Broken,
    componentName: "Driver2Broken",
  },
  {
    variant: "bulk",
    slug: "driver2-bulk",
    Component: Driver2Bulk,
    componentName: "Driver2Bulk",
  },
  {
    variant: "linear",
    slug: "driver2-linear",
    Component: Driver2Linear,
    componentName: "Driver2Linear",
  },
  {
    variant: "outline",
    slug: "driver2-outline",
    Component: Driver2Outline,
    componentName: "Driver2Outline",
  },
  {
    variant: "twotone",
    slug: "driver2-twotone",
    Component: Driver2Twotone,
    componentName: "Driver2Twotone",
  },
];
