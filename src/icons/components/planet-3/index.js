import Planet3Bold from "./Planet3Bold";
import Planet3Broken from "./Planet3Broken";
import Planet3Bulk from "./Planet3Bulk";
import Planet3Linear from "./Planet3Linear";
import Planet3Outline from "./Planet3Outline";
import Planet3Twotone from "./Planet3Twotone";

export { Planet3Bold, Planet3Broken, Planet3Bulk, Planet3Linear, Planet3Outline, Planet3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "planet-3-bold",
    Component: Planet3Bold,
    componentName: "Planet3Bold",
  },,
  {
    variant: "broken",
    slug: "planet-3-broken",
    Component: Planet3Broken,
    componentName: "Planet3Broken",
  },,
  {
    variant: "bulk",
    slug: "planet-3-bulk",
    Component: Planet3Bulk,
    componentName: "Planet3Bulk",
  },,
  {
    variant: "linear",
    slug: "planet-3-linear",
    Component: Planet3Linear,
    componentName: "Planet3Linear",
  },,
  {
    variant: "outline",
    slug: "planet-3-outline",
    Component: Planet3Outline,
    componentName: "Planet3Outline",
  },,
  {
    variant: "twotone",
    slug: "planet-3-twotone",
    Component: Planet3Twotone,
    componentName: "Planet3Twotone",
  }
];

export default { Planet3Bold, Planet3Broken, Planet3Bulk, Planet3Linear, Planet3Outline, Planet3Twotone };
