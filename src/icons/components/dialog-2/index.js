import Dialog2Bold from "./Dialog2Bold";
import Dialog2Broken from "./Dialog2Broken";
import Dialog2Bulk from "./Dialog2Bulk";
import Dialog2Linear from "./Dialog2Linear";
import Dialog2Outline from "./Dialog2Outline";
import Dialog2Twotone from "./Dialog2Twotone";

export { Dialog2Bold, Dialog2Broken, Dialog2Bulk, Dialog2Linear, Dialog2Outline, Dialog2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "dialog-2-bold",
    Component: Dialog2Bold,
    componentName: "Dialog2Bold",
  },,
  {
    variant: "broken",
    slug: "dialog-2-broken",
    Component: Dialog2Broken,
    componentName: "Dialog2Broken",
  },,
  {
    variant: "bulk",
    slug: "dialog-2-bulk",
    Component: Dialog2Bulk,
    componentName: "Dialog2Bulk",
  },,
  {
    variant: "linear",
    slug: "dialog-2-linear",
    Component: Dialog2Linear,
    componentName: "Dialog2Linear",
  },,
  {
    variant: "outline",
    slug: "dialog-2-outline",
    Component: Dialog2Outline,
    componentName: "Dialog2Outline",
  },,
  {
    variant: "twotone",
    slug: "dialog-2-twotone",
    Component: Dialog2Twotone,
    componentName: "Dialog2Twotone",
  }
];

export default { Dialog2Bold, Dialog2Broken, Dialog2Bulk, Dialog2Linear, Dialog2Outline, Dialog2Twotone };
