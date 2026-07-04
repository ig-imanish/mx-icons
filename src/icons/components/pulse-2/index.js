import Pulse2Bold from "./Pulse2Bold";
import Pulse2Broken from "./Pulse2Broken";
import Pulse2Bulk from "./Pulse2Bulk";
import Pulse2Linear from "./Pulse2Linear";
import Pulse2Outline from "./Pulse2Outline";
import Pulse2Twotone from "./Pulse2Twotone";

export { Pulse2Bold, Pulse2Broken, Pulse2Bulk, Pulse2Linear, Pulse2Outline, Pulse2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "pulse-2-bold",
    Component: Pulse2Bold,
    componentName: "Pulse2Bold",
  },,
  {
    variant: "broken",
    slug: "pulse-2-broken",
    Component: Pulse2Broken,
    componentName: "Pulse2Broken",
  },,
  {
    variant: "bulk",
    slug: "pulse-2-bulk",
    Component: Pulse2Bulk,
    componentName: "Pulse2Bulk",
  },,
  {
    variant: "linear",
    slug: "pulse-2-linear",
    Component: Pulse2Linear,
    componentName: "Pulse2Linear",
  },,
  {
    variant: "outline",
    slug: "pulse-2-outline",
    Component: Pulse2Outline,
    componentName: "Pulse2Outline",
  },,
  {
    variant: "twotone",
    slug: "pulse-2-twotone",
    Component: Pulse2Twotone,
    componentName: "Pulse2Twotone",
  }
];

export default { Pulse2Bold, Pulse2Broken, Pulse2Bulk, Pulse2Linear, Pulse2Outline, Pulse2Twotone };
