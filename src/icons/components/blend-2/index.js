import Blend2Bold from "./Blend2Bold";
import Blend2Broken from "./Blend2Broken";
import Blend2Bulk from "./Blend2Bulk";
import Blend2Linear from "./Blend2Linear";
import Blend2Outline from "./Blend2Outline";
import Blend2Twotone from "./Blend2Twotone";

export { Blend2Bold, Blend2Broken, Blend2Bulk, Blend2Linear, Blend2Outline, Blend2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "blend2-bold",
    Component: Blend2Bold,
    componentName: "Blend2Bold",
  },
  {
    variant: "broken",
    slug: "blend2-broken",
    Component: Blend2Broken,
    componentName: "Blend2Broken",
  },
  {
    variant: "bulk",
    slug: "blend2-bulk",
    Component: Blend2Bulk,
    componentName: "Blend2Bulk",
  },
  {
    variant: "linear",
    slug: "blend2-linear",
    Component: Blend2Linear,
    componentName: "Blend2Linear",
  },
  {
    variant: "outline",
    slug: "blend2-outline",
    Component: Blend2Outline,
    componentName: "Blend2Outline",
  },
  {
    variant: "twotone",
    slug: "blend2-twotone",
    Component: Blend2Twotone,
    componentName: "Blend2Twotone",
  },
];
