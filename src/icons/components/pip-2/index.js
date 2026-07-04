import Pip2Bold from "./Pip2Bold";
import Pip2Broken from "./Pip2Broken";
import Pip2Bulk from "./Pip2Bulk";
import Pip2Linear from "./Pip2Linear";
import Pip2Outline from "./Pip2Outline";
import Pip2Twotone from "./Pip2Twotone";

export { Pip2Bold, Pip2Broken, Pip2Bulk, Pip2Linear, Pip2Outline, Pip2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "pip-2-bold",
    Component: Pip2Bold,
    componentName: "Pip2Bold",
  },,
  {
    variant: "broken",
    slug: "pip-2-broken",
    Component: Pip2Broken,
    componentName: "Pip2Broken",
  },,
  {
    variant: "bulk",
    slug: "pip-2-bulk",
    Component: Pip2Bulk,
    componentName: "Pip2Bulk",
  },,
  {
    variant: "linear",
    slug: "pip-2-linear",
    Component: Pip2Linear,
    componentName: "Pip2Linear",
  },,
  {
    variant: "outline",
    slug: "pip-2-outline",
    Component: Pip2Outline,
    componentName: "Pip2Outline",
  },,
  {
    variant: "twotone",
    slug: "pip-2-twotone",
    Component: Pip2Twotone,
    componentName: "Pip2Twotone",
  }
];

export default { Pip2Bold, Pip2Broken, Pip2Bulk, Pip2Linear, Pip2Outline, Pip2Twotone };
