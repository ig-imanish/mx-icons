import DirectboxDefaultBold from "./DirectboxDefaultBold";
import DirectboxDefaultBroken from "./DirectboxDefaultBroken";
import DirectboxDefaultBulk from "./DirectboxDefaultBulk";
import DirectboxDefaultLinear from "./DirectboxDefaultLinear";
import DirectboxDefaultOutline from "./DirectboxDefaultOutline";
import DirectboxDefaultTwotone from "./DirectboxDefaultTwotone";

export { DirectboxDefaultBold, DirectboxDefaultBroken, DirectboxDefaultBulk, DirectboxDefaultLinear, DirectboxDefaultOutline, DirectboxDefaultTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "directbox-default-bold",
    Component: DirectboxDefaultBold,
    componentName: "DirectboxDefaultBold",
  },
  {
    variant: "broken",
    slug: "directbox-default-broken",
    Component: DirectboxDefaultBroken,
    componentName: "DirectboxDefaultBroken",
  },
  {
    variant: "bulk",
    slug: "directbox-default-bulk",
    Component: DirectboxDefaultBulk,
    componentName: "DirectboxDefaultBulk",
  },
  {
    variant: "linear",
    slug: "directbox-default-linear",
    Component: DirectboxDefaultLinear,
    componentName: "DirectboxDefaultLinear",
  },
  {
    variant: "outline",
    slug: "directbox-default-outline",
    Component: DirectboxDefaultOutline,
    componentName: "DirectboxDefaultOutline",
  },
  {
    variant: "twotone",
    slug: "directbox-default-twotone",
    Component: DirectboxDefaultTwotone,
    componentName: "DirectboxDefaultTwotone",
  },
];
