import Archive2Bold from "./Archive2Bold";
import Archive2Broken from "./Archive2Broken";
import Archive2Bulk from "./Archive2Bulk";
import Archive2Outline from "./Archive2Outline";

export { Archive2Bold, Archive2Broken, Archive2Bulk, Archive2Outline };

export const variants = [
  {
    variant: "bold",
    slug: "archive2-bold",
    Component: Archive2Bold,
    componentName: "Archive2Bold",
  },
  {
    variant: "broken",
    slug: "archive2-broken",
    Component: Archive2Broken,
    componentName: "Archive2Broken",
  },
  {
    variant: "bulk",
    slug: "archive2-bulk",
    Component: Archive2Bulk,
    componentName: "Archive2Bulk",
  },
  {
    variant: "outline",
    slug: "archive2-outline",
    Component: Archive2Outline,
    componentName: "Archive2Outline",
  },
];
