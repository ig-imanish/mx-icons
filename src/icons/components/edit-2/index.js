import Edit2Bold from "./Edit2Bold";
import Edit2Broken from "./Edit2Broken";
import Edit2Bulk from "./Edit2Bulk";
import Edit2Linear from "./Edit2Linear";
import Edit2Outline from "./Edit2Outline";
import Edit2Twotone from "./Edit2Twotone";

export { Edit2Bold, Edit2Broken, Edit2Bulk, Edit2Linear, Edit2Outline, Edit2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "edit2-bold",
    Component: Edit2Bold,
    componentName: "Edit2Bold",
  },
  {
    variant: "broken",
    slug: "edit2-broken",
    Component: Edit2Broken,
    componentName: "Edit2Broken",
  },
  {
    variant: "bulk",
    slug: "edit2-bulk",
    Component: Edit2Bulk,
    componentName: "Edit2Bulk",
  },
  {
    variant: "linear",
    slug: "edit2-linear",
    Component: Edit2Linear,
    componentName: "Edit2Linear",
  },
  {
    variant: "outline",
    slug: "edit2-outline",
    Component: Edit2Outline,
    componentName: "Edit2Outline",
  },
  {
    variant: "twotone",
    slug: "edit2-twotone",
    Component: Edit2Twotone,
    componentName: "Edit2Twotone",
  },
];
