import Save2Bold from "./Save2Bold";
import Save2Broken from "./Save2Broken";
import Save2Bulk from "./Save2Bulk";
import Save2Linear from "./Save2Linear";
import Save2Outline from "./Save2Outline";
import Save2Twotone from "./Save2Twotone";

export { Save2Bold, Save2Broken, Save2Bulk, Save2Linear, Save2Outline, Save2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "save2-bold",
    Component: Save2Bold,
    componentName: "Save2Bold",
  },
  {
    variant: "broken",
    slug: "save2-broken",
    Component: Save2Broken,
    componentName: "Save2Broken",
  },
  {
    variant: "bulk",
    slug: "save2-bulk",
    Component: Save2Bulk,
    componentName: "Save2Bulk",
  },
  {
    variant: "linear",
    slug: "save2-linear",
    Component: Save2Linear,
    componentName: "Save2Linear",
  },
  {
    variant: "outline",
    slug: "save2-outline",
    Component: Save2Outline,
    componentName: "Save2Outline",
  },
  {
    variant: "twotone",
    slug: "save2-twotone",
    Component: Save2Twotone,
    componentName: "Save2Twotone",
  },
];
