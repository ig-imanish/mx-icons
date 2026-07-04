import Banknote2Bold from "./Banknote2Bold";
import Banknote2Broken from "./Banknote2Broken";
import Banknote2Bulk from "./Banknote2Bulk";
import Banknote2Linear from "./Banknote2Linear";
import Banknote2Outline from "./Banknote2Outline";
import Banknote2Twotone from "./Banknote2Twotone";

export { Banknote2Bold, Banknote2Broken, Banknote2Bulk, Banknote2Linear, Banknote2Outline, Banknote2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "banknote-2-bold",
    Component: Banknote2Bold,
    componentName: "Banknote2Bold",
  },,
  {
    variant: "broken",
    slug: "banknote-2-broken",
    Component: Banknote2Broken,
    componentName: "Banknote2Broken",
  },,
  {
    variant: "bulk",
    slug: "banknote-2-bulk",
    Component: Banknote2Bulk,
    componentName: "Banknote2Bulk",
  },,
  {
    variant: "linear",
    slug: "banknote-2-linear",
    Component: Banknote2Linear,
    componentName: "Banknote2Linear",
  },,
  {
    variant: "outline",
    slug: "banknote-2-outline",
    Component: Banknote2Outline,
    componentName: "Banknote2Outline",
  },,
  {
    variant: "twotone",
    slug: "banknote-2-twotone",
    Component: Banknote2Twotone,
    componentName: "Banknote2Twotone",
  }
];

export default { Banknote2Bold, Banknote2Broken, Banknote2Bulk, Banknote2Linear, Banknote2Outline, Banknote2Twotone };
