import Discover1Bold from "./Discover1Bold";
import Discover1Broken from "./Discover1Broken";
import Discover1Bulk from "./Discover1Bulk";
import Discover1Linear from "./Discover1Linear";
import Discover1Outline from "./Discover1Outline";

export { Discover1Bold, Discover1Broken, Discover1Bulk, Discover1Linear, Discover1Outline };

export const variants = [
  {
    variant: "bold",
    slug: "discover1-bold",
    Component: Discover1Bold,
    componentName: "Discover1Bold",
  },
  {
    variant: "broken",
    slug: "discover1-broken",
    Component: Discover1Broken,
    componentName: "Discover1Broken",
  },
  {
    variant: "bulk",
    slug: "discover1-bulk",
    Component: Discover1Bulk,
    componentName: "Discover1Bulk",
  },
  {
    variant: "linear",
    slug: "discover1-linear",
    Component: Discover1Linear,
    componentName: "Discover1Linear",
  },
  {
    variant: "outline",
    slug: "discover1-outline",
    Component: Discover1Outline,
    componentName: "Discover1Outline",
  },
];
