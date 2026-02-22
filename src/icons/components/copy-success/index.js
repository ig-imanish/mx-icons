import CopySuccessBold from "./CopySuccessBold";
import CopySuccessBroken from "./CopySuccessBroken";
import CopySuccessBulk from "./CopySuccessBulk";
import CopySuccessLinear from "./CopySuccessLinear";
import CopySuccessOutline from "./CopySuccessOutline";
import CopySuccessTwotone from "./CopySuccessTwotone";

export { CopySuccessBold, CopySuccessBroken, CopySuccessBulk, CopySuccessLinear, CopySuccessOutline, CopySuccessTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "copy-success-bold",
    Component: CopySuccessBold,
    componentName: "CopySuccessBold",
  },
  {
    variant: "broken",
    slug: "copy-success-broken",
    Component: CopySuccessBroken,
    componentName: "CopySuccessBroken",
  },
  {
    variant: "bulk",
    slug: "copy-success-bulk",
    Component: CopySuccessBulk,
    componentName: "CopySuccessBulk",
  },
  {
    variant: "linear",
    slug: "copy-success-linear",
    Component: CopySuccessLinear,
    componentName: "CopySuccessLinear",
  },
  {
    variant: "outline",
    slug: "copy-success-outline",
    Component: CopySuccessOutline,
    componentName: "CopySuccessOutline",
  },
  {
    variant: "twotone",
    slug: "copy-success-twotone",
    Component: CopySuccessTwotone,
    componentName: "CopySuccessTwotone",
  },
];
