import Convertshape2Bold from "./Convertshape2Bold";
import Convertshape2Broken from "./Convertshape2Broken";
import Convertshape2Bulk from "./Convertshape2Bulk";
import Convertshape2Linear from "./Convertshape2Linear";
import Convertshape2Outline from "./Convertshape2Outline";
import Convertshape2Twotone from "./Convertshape2Twotone";

export { Convertshape2Bold, Convertshape2Broken, Convertshape2Bulk, Convertshape2Linear, Convertshape2Outline, Convertshape2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "convertshape2-bold",
    Component: Convertshape2Bold,
    componentName: "Convertshape2Bold",
  },
  {
    variant: "broken",
    slug: "convertshape2-broken",
    Component: Convertshape2Broken,
    componentName: "Convertshape2Broken",
  },
  {
    variant: "bulk",
    slug: "convertshape2-bulk",
    Component: Convertshape2Bulk,
    componentName: "Convertshape2Bulk",
  },
  {
    variant: "linear",
    slug: "convertshape2-linear",
    Component: Convertshape2Linear,
    componentName: "Convertshape2Linear",
  },
  {
    variant: "outline",
    slug: "convertshape2-outline",
    Component: Convertshape2Outline,
    componentName: "Convertshape2Outline",
  },
  {
    variant: "twotone",
    slug: "convertshape2-twotone",
    Component: Convertshape2Twotone,
    componentName: "Convertshape2Twotone",
  },
];
