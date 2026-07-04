import Tuning4Bold from "./Tuning4Bold";
import Tuning4Broken from "./Tuning4Broken";
import Tuning4Bulk from "./Tuning4Bulk";
import Tuning4Linear from "./Tuning4Linear";
import Tuning4Outline from "./Tuning4Outline";
import Tuning4Twotone from "./Tuning4Twotone";

export { Tuning4Bold, Tuning4Broken, Tuning4Bulk, Tuning4Linear, Tuning4Outline, Tuning4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "tuning-4-bold",
    Component: Tuning4Bold,
    componentName: "Tuning4Bold",
  },,
  {
    variant: "broken",
    slug: "tuning-4-broken",
    Component: Tuning4Broken,
    componentName: "Tuning4Broken",
  },,
  {
    variant: "bulk",
    slug: "tuning-4-bulk",
    Component: Tuning4Bulk,
    componentName: "Tuning4Bulk",
  },,
  {
    variant: "linear",
    slug: "tuning-4-linear",
    Component: Tuning4Linear,
    componentName: "Tuning4Linear",
  },,
  {
    variant: "outline",
    slug: "tuning-4-outline",
    Component: Tuning4Outline,
    componentName: "Tuning4Outline",
  },,
  {
    variant: "twotone",
    slug: "tuning-4-twotone",
    Component: Tuning4Twotone,
    componentName: "Tuning4Twotone",
  }
];

export default { Tuning4Bold, Tuning4Broken, Tuning4Bulk, Tuning4Linear, Tuning4Outline, Tuning4Twotone };
