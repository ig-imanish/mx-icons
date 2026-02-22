import Link2Bold from "./Link2Bold";
import Link2Broken from "./Link2Broken";
import Link2Bulk from "./Link2Bulk";
import Link2Linear from "./Link2Linear";
import Link2Outline from "./Link2Outline";
import Link2Twotone from "./Link2Twotone";

export { Link2Bold, Link2Broken, Link2Bulk, Link2Linear, Link2Outline, Link2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "link2-bold",
    Component: Link2Bold,
    componentName: "Link2Bold",
  },
  {
    variant: "broken",
    slug: "link2-broken",
    Component: Link2Broken,
    componentName: "Link2Broken",
  },
  {
    variant: "bulk",
    slug: "link2-bulk",
    Component: Link2Bulk,
    componentName: "Link2Bulk",
  },
  {
    variant: "linear",
    slug: "link2-linear",
    Component: Link2Linear,
    componentName: "Link2Linear",
  },
  {
    variant: "outline",
    slug: "link2-outline",
    Component: Link2Outline,
    componentName: "Link2Outline",
  },
  {
    variant: "twotone",
    slug: "link2-twotone",
    Component: Link2Twotone,
    componentName: "Link2Twotone",
  },
];
