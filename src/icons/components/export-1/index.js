import Export1Bold from "./Export1Bold";
import Export1Broken from "./Export1Broken";
import Export1Bulk from "./Export1Bulk";
import Export1Linear from "./Export1Linear";
import Export1Outline from "./Export1Outline";
import Export1Twotone from "./Export1Twotone";

export { Export1Bold, Export1Broken, Export1Bulk, Export1Linear, Export1Outline, Export1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "export1-bold",
    Component: Export1Bold,
    componentName: "Export1Bold",
  },
  {
    variant: "broken",
    slug: "export1-broken",
    Component: Export1Broken,
    componentName: "Export1Broken",
  },
  {
    variant: "bulk",
    slug: "export1-bulk",
    Component: Export1Bulk,
    componentName: "Export1Bulk",
  },
  {
    variant: "linear",
    slug: "export1-linear",
    Component: Export1Linear,
    componentName: "Export1Linear",
  },
  {
    variant: "outline",
    slug: "export1-outline",
    Component: Export1Outline,
    componentName: "Export1Outline",
  },
  {
    variant: "twotone",
    slug: "export1-twotone",
    Component: Export1Twotone,
    componentName: "Export1Twotone",
  },
];
