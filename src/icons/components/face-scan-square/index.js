import FaceScanSquareBold from "./FaceScanSquareBold";
import FaceScanSquareBroken from "./FaceScanSquareBroken";
import FaceScanSquareBulk from "./FaceScanSquareBulk";
import FaceScanSquareLinear from "./FaceScanSquareLinear";
import FaceScanSquareOutline from "./FaceScanSquareOutline";
import FaceScanSquareTwotone from "./FaceScanSquareTwotone";

export { FaceScanSquareBold, FaceScanSquareBroken, FaceScanSquareBulk, FaceScanSquareLinear, FaceScanSquareOutline, FaceScanSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "face-scan-square-bold",
    Component: FaceScanSquareBold,
    componentName: "FaceScanSquareBold",
  },,
  {
    variant: "broken",
    slug: "face-scan-square-broken",
    Component: FaceScanSquareBroken,
    componentName: "FaceScanSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "face-scan-square-bulk",
    Component: FaceScanSquareBulk,
    componentName: "FaceScanSquareBulk",
  },,
  {
    variant: "linear",
    slug: "face-scan-square-linear",
    Component: FaceScanSquareLinear,
    componentName: "FaceScanSquareLinear",
  },,
  {
    variant: "outline",
    slug: "face-scan-square-outline",
    Component: FaceScanSquareOutline,
    componentName: "FaceScanSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "face-scan-square-twotone",
    Component: FaceScanSquareTwotone,
    componentName: "FaceScanSquareTwotone",
  }
];

export default { FaceScanSquareBold, FaceScanSquareBroken, FaceScanSquareBulk, FaceScanSquareLinear, FaceScanSquareOutline, FaceScanSquareTwotone };
