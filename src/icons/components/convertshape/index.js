import ConvertshapeBold from "./ConvertshapeBold";
import ConvertshapeBroken from "./ConvertshapeBroken";
import ConvertshapeBulk from "./ConvertshapeBulk";
import ConvertshapeLinear from "./ConvertshapeLinear";
import ConvertshapeOutline from "./ConvertshapeOutline";
import ConvertshapeTwotone from "./ConvertshapeTwotone";

export { ConvertshapeBold, ConvertshapeBroken, ConvertshapeBulk, ConvertshapeLinear, ConvertshapeOutline, ConvertshapeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "convertshape-bold",
    Component: ConvertshapeBold,
    componentName: "ConvertshapeBold",
  },
  {
    variant: "broken",
    slug: "convertshape-broken",
    Component: ConvertshapeBroken,
    componentName: "ConvertshapeBroken",
  },
  {
    variant: "bulk",
    slug: "convertshape-bulk",
    Component: ConvertshapeBulk,
    componentName: "ConvertshapeBulk",
  },
  {
    variant: "linear",
    slug: "convertshape-linear",
    Component: ConvertshapeLinear,
    componentName: "ConvertshapeLinear",
  },
  {
    variant: "outline",
    slug: "convertshape-outline",
    Component: ConvertshapeOutline,
    componentName: "ConvertshapeOutline",
  },
  {
    variant: "twotone",
    slug: "convertshape-twotone",
    Component: ConvertshapeTwotone,
    componentName: "ConvertshapeTwotone",
  },
];
