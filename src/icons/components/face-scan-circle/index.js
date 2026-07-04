import FaceScanCircleBold from "./FaceScanCircleBold";
import FaceScanCircleBroken from "./FaceScanCircleBroken";
import FaceScanCircleBulk from "./FaceScanCircleBulk";
import FaceScanCircleLinear from "./FaceScanCircleLinear";
import FaceScanCircleOutline from "./FaceScanCircleOutline";
import FaceScanCircleTwotone from "./FaceScanCircleTwotone";

export { FaceScanCircleBold, FaceScanCircleBroken, FaceScanCircleBulk, FaceScanCircleLinear, FaceScanCircleOutline, FaceScanCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "face-scan-circle-bold",
    Component: FaceScanCircleBold,
    componentName: "FaceScanCircleBold",
  },,
  {
    variant: "broken",
    slug: "face-scan-circle-broken",
    Component: FaceScanCircleBroken,
    componentName: "FaceScanCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "face-scan-circle-bulk",
    Component: FaceScanCircleBulk,
    componentName: "FaceScanCircleBulk",
  },,
  {
    variant: "linear",
    slug: "face-scan-circle-linear",
    Component: FaceScanCircleLinear,
    componentName: "FaceScanCircleLinear",
  },,
  {
    variant: "outline",
    slug: "face-scan-circle-outline",
    Component: FaceScanCircleOutline,
    componentName: "FaceScanCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "face-scan-circle-twotone",
    Component: FaceScanCircleTwotone,
    componentName: "FaceScanCircleTwotone",
  }
];

export default { FaceScanCircleBold, FaceScanCircleBroken, FaceScanCircleBulk, FaceScanCircleLinear, FaceScanCircleOutline, FaceScanCircleTwotone };
