import Link21Bold from "./Link21Bold";
import Link21Broken from "./Link21Broken";
import Link21Bulk from "./Link21Bulk";
import Link21Linear from "./Link21Linear";
import Link21Outline from "./Link21Outline";
import Link21Twotone from "./Link21Twotone";

export { Link21Bold, Link21Broken, Link21Bulk, Link21Linear, Link21Outline, Link21Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "link21-bold",
    Component: Link21Bold,
    componentName: "Link21Bold",
  },
  {
    variant: "broken",
    slug: "link21-broken",
    Component: Link21Broken,
    componentName: "Link21Broken",
  },
  {
    variant: "bulk",
    slug: "link21-bulk",
    Component: Link21Bulk,
    componentName: "Link21Bulk",
  },
  {
    variant: "linear",
    slug: "link21-linear",
    Component: Link21Linear,
    componentName: "Link21Linear",
  },
  {
    variant: "outline",
    slug: "link21-outline",
    Component: Link21Outline,
    componentName: "Link21Outline",
  },
  {
    variant: "twotone",
    slug: "link21-twotone",
    Component: Link21Twotone,
    componentName: "Link21Twotone",
  },
];
