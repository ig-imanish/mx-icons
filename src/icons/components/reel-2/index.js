import Reel2Bold from "./Reel2Bold";
import Reel2Broken from "./Reel2Broken";
import Reel2Bulk from "./Reel2Bulk";
import Reel2Linear from "./Reel2Linear";
import Reel2Outline from "./Reel2Outline";
import Reel2Twotone from "./Reel2Twotone";

export { Reel2Bold, Reel2Broken, Reel2Bulk, Reel2Linear, Reel2Outline, Reel2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "reel-2-bold",
    Component: Reel2Bold,
    componentName: "Reel2Bold",
  },,
  {
    variant: "broken",
    slug: "reel-2-broken",
    Component: Reel2Broken,
    componentName: "Reel2Broken",
  },,
  {
    variant: "bulk",
    slug: "reel-2-bulk",
    Component: Reel2Bulk,
    componentName: "Reel2Bulk",
  },,
  {
    variant: "linear",
    slug: "reel-2-linear",
    Component: Reel2Linear,
    componentName: "Reel2Linear",
  },,
  {
    variant: "outline",
    slug: "reel-2-outline",
    Component: Reel2Outline,
    componentName: "Reel2Outline",
  },,
  {
    variant: "twotone",
    slug: "reel-2-twotone",
    Component: Reel2Twotone,
    componentName: "Reel2Twotone",
  }
];

export default { Reel2Bold, Reel2Broken, Reel2Bulk, Reel2Linear, Reel2Outline, Reel2Twotone };
