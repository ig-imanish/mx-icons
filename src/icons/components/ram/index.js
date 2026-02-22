import RamBold from "./RamBold";
import RamBroken from "./RamBroken";
import RamBulk from "./RamBulk";
import RamLinear from "./RamLinear";
import RamOutline from "./RamOutline";
import RamTwotone from "./RamTwotone";

export { RamBold, RamBroken, RamBulk, RamLinear, RamOutline, RamTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ram-bold",
    Component: RamBold,
    componentName: "RamBold",
  },
  {
    variant: "broken",
    slug: "ram-broken",
    Component: RamBroken,
    componentName: "RamBroken",
  },
  {
    variant: "bulk",
    slug: "ram-bulk",
    Component: RamBulk,
    componentName: "RamBulk",
  },
  {
    variant: "linear",
    slug: "ram-linear",
    Component: RamLinear,
    componentName: "RamLinear",
  },
  {
    variant: "outline",
    slug: "ram-outline",
    Component: RamOutline,
    componentName: "RamOutline",
  },
  {
    variant: "twotone",
    slug: "ram-twotone",
    Component: RamTwotone,
    componentName: "RamTwotone",
  },
];
