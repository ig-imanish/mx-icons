import Brush3Bold from "./Brush3Bold";
import Brush3Broken from "./Brush3Broken";
import Brush3Bulk from "./Brush3Bulk";
import Brush3Linear from "./Brush3Linear";
import Brush3Outline from "./Brush3Outline";
import Brush3Twotone from "./Brush3Twotone";

export { Brush3Bold, Brush3Broken, Brush3Bulk, Brush3Linear, Brush3Outline, Brush3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "brush3-bold",
    Component: Brush3Bold,
    componentName: "Brush3Bold",
  },
  {
    variant: "broken",
    slug: "brush3-broken",
    Component: Brush3Broken,
    componentName: "Brush3Broken",
  },
  {
    variant: "bulk",
    slug: "brush3-bulk",
    Component: Brush3Bulk,
    componentName: "Brush3Bulk",
  },
  {
    variant: "linear",
    slug: "brush3-linear",
    Component: Brush3Linear,
    componentName: "Brush3Linear",
  },
  {
    variant: "outline",
    slug: "brush3-outline",
    Component: Brush3Outline,
    componentName: "Brush3Outline",
  },
  {
    variant: "twotone",
    slug: "brush3-twotone",
    Component: Brush3Twotone,
    componentName: "Brush3Twotone",
  },
];
