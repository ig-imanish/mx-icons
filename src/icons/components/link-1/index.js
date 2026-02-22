import Link1Bold from "./Link1Bold";
import Link1Broken from "./Link1Broken";
import Link1Bulk from "./Link1Bulk";
import Link1Linear from "./Link1Linear";
import Link1Outline from "./Link1Outline";
import Link1Twotone from "./Link1Twotone";

export { Link1Bold, Link1Broken, Link1Bulk, Link1Linear, Link1Outline, Link1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "link1-bold",
    Component: Link1Bold,
    componentName: "Link1Bold",
  },
  {
    variant: "broken",
    slug: "link1-broken",
    Component: Link1Broken,
    componentName: "Link1Broken",
  },
  {
    variant: "bulk",
    slug: "link1-bulk",
    Component: Link1Bulk,
    componentName: "Link1Bulk",
  },
  {
    variant: "linear",
    slug: "link1-linear",
    Component: Link1Linear,
    componentName: "Link1Linear",
  },
  {
    variant: "outline",
    slug: "link1-outline",
    Component: Link1Outline,
    componentName: "Link1Outline",
  },
  {
    variant: "twotone",
    slug: "link1-twotone",
    Component: Link1Twotone,
    componentName: "Link1Twotone",
  },
];
