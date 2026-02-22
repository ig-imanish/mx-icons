import Home2Bold from "./Home2Bold";
import Home2Broken from "./Home2Broken";
import Home2Bulk from "./Home2Bulk";
import Home2Linear from "./Home2Linear";
import Home2Outline from "./Home2Outline";
import Home2Twotone from "./Home2Twotone";

export { Home2Bold, Home2Broken, Home2Bulk, Home2Linear, Home2Outline, Home2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "home2-bold",
    Component: Home2Bold,
    componentName: "Home2Bold",
  },
  {
    variant: "broken",
    slug: "home2-broken",
    Component: Home2Broken,
    componentName: "Home2Broken",
  },
  {
    variant: "bulk",
    slug: "home2-bulk",
    Component: Home2Bulk,
    componentName: "Home2Bulk",
  },
  {
    variant: "linear",
    slug: "home2-linear",
    Component: Home2Linear,
    componentName: "Home2Linear",
  },
  {
    variant: "outline",
    slug: "home2-outline",
    Component: Home2Outline,
    componentName: "Home2Outline",
  },
  {
    variant: "twotone",
    slug: "home2-twotone",
    Component: Home2Twotone,
    componentName: "Home2Twotone",
  },
];
