import Planet2Bold from "./Planet2Bold";
import Planet2Broken from "./Planet2Broken";
import Planet2Bulk from "./Planet2Bulk";
import Planet2Linear from "./Planet2Linear";
import Planet2Outline from "./Planet2Outline";
import Planet2Twotone from "./Planet2Twotone";

export { Planet2Bold, Planet2Broken, Planet2Bulk, Planet2Linear, Planet2Outline, Planet2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "planet-2-bold",
    Component: Planet2Bold,
    componentName: "Planet2Bold",
  },,
  {
    variant: "broken",
    slug: "planet-2-broken",
    Component: Planet2Broken,
    componentName: "Planet2Broken",
  },,
  {
    variant: "bulk",
    slug: "planet-2-bulk",
    Component: Planet2Bulk,
    componentName: "Planet2Bulk",
  },,
  {
    variant: "linear",
    slug: "planet-2-linear",
    Component: Planet2Linear,
    componentName: "Planet2Linear",
  },,
  {
    variant: "outline",
    slug: "planet-2-outline",
    Component: Planet2Outline,
    componentName: "Planet2Outline",
  },,
  {
    variant: "twotone",
    slug: "planet-2-twotone",
    Component: Planet2Twotone,
    componentName: "Planet2Twotone",
  }
];

export default { Planet2Bold, Planet2Broken, Planet2Bulk, Planet2Linear, Planet2Outline, Planet2Twotone };
