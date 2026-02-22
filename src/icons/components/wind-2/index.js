import Wind2Bold from "./Wind2Bold";
import Wind2Broken from "./Wind2Broken";
import Wind2Bulk from "./Wind2Bulk";
import Wind2Linear from "./Wind2Linear";
import Wind2Outline from "./Wind2Outline";
import Wind2Twotone from "./Wind2Twotone";

export { Wind2Bold, Wind2Broken, Wind2Bulk, Wind2Linear, Wind2Outline, Wind2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "wind2-bold",
    Component: Wind2Bold,
    componentName: "Wind2Bold",
  },
  {
    variant: "broken",
    slug: "wind2-broken",
    Component: Wind2Broken,
    componentName: "Wind2Broken",
  },
  {
    variant: "bulk",
    slug: "wind2-bulk",
    Component: Wind2Bulk,
    componentName: "Wind2Bulk",
  },
  {
    variant: "linear",
    slug: "wind2-linear",
    Component: Wind2Linear,
    componentName: "Wind2Linear",
  },
  {
    variant: "outline",
    slug: "wind2-outline",
    Component: Wind2Outline,
    componentName: "Wind2Outline",
  },
  {
    variant: "twotone",
    slug: "wind2-twotone",
    Component: Wind2Twotone,
    componentName: "Wind2Twotone",
  },
];
