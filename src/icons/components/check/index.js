import CheckAll from "./CheckAll";
import CheckBold from "./CheckBold";
import CheckBroken from "./CheckBroken";
import CheckBulk from "./CheckBulk";
import CheckLinear from "./CheckLinear";
import CheckList3 from "./CheckList3";
import CheckList3Filled from "./CheckList3Filled";
import CheckList3Twotone from "./CheckList3Twotone";
import CheckOutline from "./CheckOutline";
import CheckTwotone from "./CheckTwotone";

export { CheckAll, CheckBold, CheckBroken, CheckBulk, CheckLinear, CheckList3, CheckList3Filled, CheckList3Twotone, CheckOutline, CheckTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "check-all",
    Component: CheckAll,
    componentName: "CheckAll",
  },
  {
    variant: "bold",
    slug: "check-bold",
    Component: CheckBold,
    componentName: "CheckBold",
  },
  {
    variant: "broken",
    slug: "check-broken",
    Component: CheckBroken,
    componentName: "CheckBroken",
  },
  {
    variant: "bulk",
    slug: "check-bulk",
    Component: CheckBulk,
    componentName: "CheckBulk",
  },
  {
    variant: "linear",
    slug: "check-linear",
    Component: CheckLinear,
    componentName: "CheckLinear",
  },
  {
    variant: "linear",
    slug: "check-list3",
    Component: CheckList3,
    componentName: "CheckList3",
  },
  {
    variant: "filled",
    slug: "check-list3-filled",
    Component: CheckList3Filled,
    componentName: "CheckList3Filled",
  },
  {
    variant: "twotone",
    slug: "check-list3-twotone",
    Component: CheckList3Twotone,
    componentName: "CheckList3Twotone",
  },
  {
    variant: "outline",
    slug: "check-outline",
    Component: CheckOutline,
    componentName: "CheckOutline",
  },
  {
    variant: "twotone",
    slug: "check-twotone",
    Component: CheckTwotone,
    componentName: "CheckTwotone",
  },
];
