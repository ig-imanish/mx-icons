import Export2Bold from "./Export2Bold";
import Export2Broken from "./Export2Broken";
import Export2Bulk from "./Export2Bulk";
import Export2Linear from "./Export2Linear";
import Export2Outline from "./Export2Outline";
import Export2Twotone from "./Export2Twotone";

export { Export2Bold, Export2Broken, Export2Bulk, Export2Linear, Export2Outline, Export2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "export2-bold",
    Component: Export2Bold,
    componentName: "Export2Bold",
  },
  {
    variant: "broken",
    slug: "export2-broken",
    Component: Export2Broken,
    componentName: "Export2Broken",
  },
  {
    variant: "bulk",
    slug: "export2-bulk",
    Component: Export2Bulk,
    componentName: "Export2Bulk",
  },
  {
    variant: "linear",
    slug: "export2-linear",
    Component: Export2Linear,
    componentName: "Export2Linear",
  },
  {
    variant: "outline",
    slug: "export2-outline",
    Component: Export2Outline,
    componentName: "Export2Outline",
  },
  {
    variant: "twotone",
    slug: "export2-twotone",
    Component: Export2Twotone,
    componentName: "Export2Twotone",
  },
];
