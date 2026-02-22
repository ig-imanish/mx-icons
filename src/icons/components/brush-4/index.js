import Brush4Bold from "./Brush4Bold";
import Brush4Broken from "./Brush4Broken";
import Brush4Bulk from "./Brush4Bulk";
import Brush4Outline from "./Brush4Outline";
import Brush4Twotone from "./Brush4Twotone";

export { Brush4Bold, Brush4Broken, Brush4Bulk, Brush4Outline, Brush4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "brush4-bold",
    Component: Brush4Bold,
    componentName: "Brush4Bold",
  },
  {
    variant: "broken",
    slug: "brush4-broken",
    Component: Brush4Broken,
    componentName: "Brush4Broken",
  },
  {
    variant: "bulk",
    slug: "brush4-bulk",
    Component: Brush4Bulk,
    componentName: "Brush4Bulk",
  },
  {
    variant: "outline",
    slug: "brush4-outline",
    Component: Brush4Outline,
    componentName: "Brush4Outline",
  },
  {
    variant: "twotone",
    slug: "brush4-twotone",
    Component: Brush4Twotone,
    componentName: "Brush4Twotone",
  },
];
