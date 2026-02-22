import Shapes1Bold from "./Shapes1Bold";
import Shapes1Broken from "./Shapes1Broken";
import Shapes1Bulk from "./Shapes1Bulk";
import Shapes1Linear from "./Shapes1Linear";
import Shapes1Outline from "./Shapes1Outline";
import Shapes1Twotone from "./Shapes1Twotone";

export { Shapes1Bold, Shapes1Broken, Shapes1Bulk, Shapes1Linear, Shapes1Outline, Shapes1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "shapes1-bold",
    Component: Shapes1Bold,
    componentName: "Shapes1Bold",
  },
  {
    variant: "broken",
    slug: "shapes1-broken",
    Component: Shapes1Broken,
    componentName: "Shapes1Broken",
  },
  {
    variant: "bulk",
    slug: "shapes1-bulk",
    Component: Shapes1Bulk,
    componentName: "Shapes1Bulk",
  },
  {
    variant: "linear",
    slug: "shapes1-linear",
    Component: Shapes1Linear,
    componentName: "Shapes1Linear",
  },
  {
    variant: "outline",
    slug: "shapes1-outline",
    Component: Shapes1Outline,
    componentName: "Shapes1Outline",
  },
  {
    variant: "twotone",
    slug: "shapes1-twotone",
    Component: Shapes1Twotone,
    componentName: "Shapes1Twotone",
  },
];
