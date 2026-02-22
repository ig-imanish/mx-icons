import Flag2Bold from "./Flag2Bold";
import Flag2Broken from "./Flag2Broken";
import Flag2Bulk from "./Flag2Bulk";
import Flag2Linear from "./Flag2Linear";
import Flag2Outline from "./Flag2Outline";
import Flag2Twotone from "./Flag2Twotone";

export { Flag2Bold, Flag2Broken, Flag2Bulk, Flag2Linear, Flag2Outline, Flag2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "flag2-bold",
    Component: Flag2Bold,
    componentName: "Flag2Bold",
  },
  {
    variant: "broken",
    slug: "flag2-broken",
    Component: Flag2Broken,
    componentName: "Flag2Broken",
  },
  {
    variant: "bulk",
    slug: "flag2-bulk",
    Component: Flag2Bulk,
    componentName: "Flag2Bulk",
  },
  {
    variant: "linear",
    slug: "flag2-linear",
    Component: Flag2Linear,
    componentName: "Flag2Linear",
  },
  {
    variant: "outline",
    slug: "flag2-outline",
    Component: Flag2Outline,
    componentName: "Flag2Outline",
  },
  {
    variant: "twotone",
    slug: "flag2-twotone",
    Component: Flag2Twotone,
    componentName: "Flag2Twotone",
  },
];
