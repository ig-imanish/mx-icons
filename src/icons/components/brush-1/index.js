import Brush1Bold from "./Brush1Bold";
import Brush1Broken from "./Brush1Broken";
import Brush1Bulk from "./Brush1Bulk";
import Brush1Linear from "./Brush1Linear";
import Brush1Outline from "./Brush1Outline";
import Brush1Twotone from "./Brush1Twotone";

export { Brush1Bold, Brush1Broken, Brush1Bulk, Brush1Linear, Brush1Outline, Brush1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "brush1-bold",
    Component: Brush1Bold,
    componentName: "Brush1Bold",
  },
  {
    variant: "broken",
    slug: "brush1-broken",
    Component: Brush1Broken,
    componentName: "Brush1Broken",
  },
  {
    variant: "bulk",
    slug: "brush1-bulk",
    Component: Brush1Bulk,
    componentName: "Brush1Bulk",
  },
  {
    variant: "linear",
    slug: "brush1-linear",
    Component: Brush1Linear,
    componentName: "Brush1Linear",
  },
  {
    variant: "outline",
    slug: "brush1-outline",
    Component: Brush1Outline,
    componentName: "Brush1Outline",
  },
  {
    variant: "twotone",
    slug: "brush1-twotone",
    Component: Brush1Twotone,
    componentName: "Brush1Twotone",
  },
];
