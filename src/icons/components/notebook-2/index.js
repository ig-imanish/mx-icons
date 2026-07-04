import Notebook2Bold from "./Notebook2Bold";
import Notebook2Broken from "./Notebook2Broken";
import Notebook2Bulk from "./Notebook2Bulk";
import Notebook2Linear from "./Notebook2Linear";
import Notebook2Outline from "./Notebook2Outline";
import Notebook2Twotone from "./Notebook2Twotone";

export { Notebook2Bold, Notebook2Broken, Notebook2Bulk, Notebook2Linear, Notebook2Outline, Notebook2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "notebook-2-bold",
    Component: Notebook2Bold,
    componentName: "Notebook2Bold",
  },,
  {
    variant: "broken",
    slug: "notebook-2-broken",
    Component: Notebook2Broken,
    componentName: "Notebook2Broken",
  },,
  {
    variant: "bulk",
    slug: "notebook-2-bulk",
    Component: Notebook2Bulk,
    componentName: "Notebook2Bulk",
  },,
  {
    variant: "linear",
    slug: "notebook-2-linear",
    Component: Notebook2Linear,
    componentName: "Notebook2Linear",
  },,
  {
    variant: "outline",
    slug: "notebook-2-outline",
    Component: Notebook2Outline,
    componentName: "Notebook2Outline",
  },,
  {
    variant: "twotone",
    slug: "notebook-2-twotone",
    Component: Notebook2Twotone,
    componentName: "Notebook2Twotone",
  }
];

export default { Notebook2Bold, Notebook2Broken, Notebook2Bulk, Notebook2Linear, Notebook2Outline, Notebook2Twotone };
