import House2Bold from "./House2Bold";
import House2Broken from "./House2Broken";
import House2Bulk from "./House2Bulk";
import House2Linear from "./House2Linear";
import House2Outline from "./House2Outline";
import House2Twotone from "./House2Twotone";

export { House2Bold, House2Broken, House2Bulk, House2Linear, House2Outline, House2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "house2-bold",
    Component: House2Bold,
    componentName: "House2Bold",
  },
  {
    variant: "broken",
    slug: "house2-broken",
    Component: House2Broken,
    componentName: "House2Broken",
  },
  {
    variant: "bulk",
    slug: "house2-bulk",
    Component: House2Bulk,
    componentName: "House2Bulk",
  },
  {
    variant: "linear",
    slug: "house2-linear",
    Component: House2Linear,
    componentName: "House2Linear",
  },
  {
    variant: "outline",
    slug: "house2-outline",
    Component: House2Outline,
    componentName: "House2Outline",
  },
  {
    variant: "twotone",
    slug: "house2-twotone",
    Component: House2Twotone,
    componentName: "House2Twotone",
  },
];
