import Buildings2Bold from "./Buildings2Bold";
import Buildings2Broken from "./Buildings2Broken";
import Buildings2Bulk from "./Buildings2Bulk";
import Buildings2Linear from "./Buildings2Linear";
import Buildings2Outline from "./Buildings2Outline";
import Buildings2Twotone from "./Buildings2Twotone";

export { Buildings2Bold, Buildings2Broken, Buildings2Bulk, Buildings2Linear, Buildings2Outline, Buildings2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "buildings2-bold",
    Component: Buildings2Bold,
    componentName: "Buildings2Bold",
  },
  {
    variant: "broken",
    slug: "buildings2-broken",
    Component: Buildings2Broken,
    componentName: "Buildings2Broken",
  },
  {
    variant: "bulk",
    slug: "buildings2-bulk",
    Component: Buildings2Bulk,
    componentName: "Buildings2Bulk",
  },
  {
    variant: "linear",
    slug: "buildings2-linear",
    Component: Buildings2Linear,
    componentName: "Buildings2Linear",
  },
  {
    variant: "outline",
    slug: "buildings2-outline",
    Component: Buildings2Outline,
    componentName: "Buildings2Outline",
  },
  {
    variant: "twotone",
    slug: "buildings2-twotone",
    Component: Buildings2Twotone,
    componentName: "Buildings2Twotone",
  },
];
