import Export3Bold from "./Export3Bold";
import Export3Broken from "./Export3Broken";
import Export3Bulk from "./Export3Bulk";
import Export3Linear from "./Export3Linear";
import Export3Outline from "./Export3Outline";
import Export3Twotone from "./Export3Twotone";

export { Export3Bold, Export3Broken, Export3Bulk, Export3Linear, Export3Outline, Export3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "export3-bold",
    Component: Export3Bold,
    componentName: "Export3Bold",
  },
  {
    variant: "broken",
    slug: "export3-broken",
    Component: Export3Broken,
    componentName: "Export3Broken",
  },
  {
    variant: "bulk",
    slug: "export3-bulk",
    Component: Export3Bulk,
    componentName: "Export3Bulk",
  },
  {
    variant: "linear",
    slug: "export3-linear",
    Component: Export3Linear,
    componentName: "Export3Linear",
  },
  {
    variant: "outline",
    slug: "export3-outline",
    Component: Export3Outline,
    componentName: "Export3Outline",
  },
  {
    variant: "twotone",
    slug: "export3-twotone",
    Component: Export3Twotone,
    componentName: "Export3Twotone",
  },
];
