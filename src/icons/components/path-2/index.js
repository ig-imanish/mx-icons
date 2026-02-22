import Path2Bold from "./Path2Bold";
import Path2Broken from "./Path2Broken";
import Path2Bulk from "./Path2Bulk";
import Path2Linear from "./Path2Linear";
import Path2Outline from "./Path2Outline";
import Path2Twotone from "./Path2Twotone";

export { Path2Bold, Path2Broken, Path2Bulk, Path2Linear, Path2Outline, Path2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "path2-bold",
    Component: Path2Bold,
    componentName: "Path2Bold",
  },
  {
    variant: "broken",
    slug: "path2-broken",
    Component: Path2Broken,
    componentName: "Path2Broken",
  },
  {
    variant: "bulk",
    slug: "path2-bulk",
    Component: Path2Bulk,
    componentName: "Path2Bulk",
  },
  {
    variant: "linear",
    slug: "path2-linear",
    Component: Path2Linear,
    componentName: "Path2Linear",
  },
  {
    variant: "outline",
    slug: "path2-outline",
    Component: Path2Outline,
    componentName: "Path2Outline",
  },
  {
    variant: "twotone",
    slug: "path2-twotone",
    Component: Path2Twotone,
    componentName: "Path2Twotone",
  },
];
