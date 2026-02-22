import Devices1Bold from "./Devices1Bold";
import Devices1Broken from "./Devices1Broken";
import Devices1Bulk from "./Devices1Bulk";
import Devices1Linear from "./Devices1Linear";
import Devices1Outline from "./Devices1Outline";

export { Devices1Bold, Devices1Broken, Devices1Bulk, Devices1Linear, Devices1Outline };

export const variants = [
  {
    variant: "bold",
    slug: "devices1-bold",
    Component: Devices1Bold,
    componentName: "Devices1Bold",
  },
  {
    variant: "broken",
    slug: "devices1-broken",
    Component: Devices1Broken,
    componentName: "Devices1Broken",
  },
  {
    variant: "bulk",
    slug: "devices1-bulk",
    Component: Devices1Bulk,
    componentName: "Devices1Bulk",
  },
  {
    variant: "linear",
    slug: "devices1-linear",
    Component: Devices1Linear,
    componentName: "Devices1Linear",
  },
  {
    variant: "outline",
    slug: "devices1-outline",
    Component: Devices1Outline,
    componentName: "Devices1Outline",
  },
];
