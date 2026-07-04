import CupHotBold from "./CupHotBold";
import CupHotBroken from "./CupHotBroken";
import CupHotBulk from "./CupHotBulk";
import CupHotLinear from "./CupHotLinear";
import CupHotOutline from "./CupHotOutline";
import CupHotTwotone from "./CupHotTwotone";

export { CupHotBold, CupHotBroken, CupHotBulk, CupHotLinear, CupHotOutline, CupHotTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cup-hot-bold",
    Component: CupHotBold,
    componentName: "CupHotBold",
  },,
  {
    variant: "broken",
    slug: "cup-hot-broken",
    Component: CupHotBroken,
    componentName: "CupHotBroken",
  },,
  {
    variant: "bulk",
    slug: "cup-hot-bulk",
    Component: CupHotBulk,
    componentName: "CupHotBulk",
  },,
  {
    variant: "linear",
    slug: "cup-hot-linear",
    Component: CupHotLinear,
    componentName: "CupHotLinear",
  },,
  {
    variant: "outline",
    slug: "cup-hot-outline",
    Component: CupHotOutline,
    componentName: "CupHotOutline",
  },,
  {
    variant: "twotone",
    slug: "cup-hot-twotone",
    Component: CupHotTwotone,
    componentName: "CupHotTwotone",
  }
];

export default { CupHotBold, CupHotBroken, CupHotBulk, CupHotLinear, CupHotOutline, CupHotTwotone };
