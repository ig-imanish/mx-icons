import Archive1Bold from "./Archive1Bold";
import Archive1Broken from "./Archive1Broken";
import Archive1Bulk from "./Archive1Bulk";
import Archive1Linear from "./Archive1Linear";
import Archive1Outline from "./Archive1Outline";
import Archive1Twotone from "./Archive1Twotone";

export { Archive1Bold, Archive1Broken, Archive1Bulk, Archive1Linear, Archive1Outline, Archive1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive1-bold",
    Component: Archive1Bold,
    componentName: "Archive1Bold",
  },
  {
    variant: "broken",
    slug: "archive1-broken",
    Component: Archive1Broken,
    componentName: "Archive1Broken",
  },
  {
    variant: "bulk",
    slug: "archive1-bulk",
    Component: Archive1Bulk,
    componentName: "Archive1Bulk",
  },
  {
    variant: "linear",
    slug: "archive1-linear",
    Component: Archive1Linear,
    componentName: "Archive1Linear",
  },
  {
    variant: "outline",
    slug: "archive1-outline",
    Component: Archive1Outline,
    componentName: "Archive1Outline",
  },
  {
    variant: "twotone",
    slug: "archive1-twotone",
    Component: Archive1Twotone,
    componentName: "Archive1Twotone",
  },
];
