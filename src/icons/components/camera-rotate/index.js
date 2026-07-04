import CameraRotateBold from "./CameraRotateBold";
import CameraRotateBroken from "./CameraRotateBroken";
import CameraRotateBulk from "./CameraRotateBulk";
import CameraRotateLinear from "./CameraRotateLinear";
import CameraRotateOutline from "./CameraRotateOutline";
import CameraRotateTwotone from "./CameraRotateTwotone";

export { CameraRotateBold, CameraRotateBroken, CameraRotateBulk, CameraRotateLinear, CameraRotateOutline, CameraRotateTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "camera-rotate-bold",
    Component: CameraRotateBold,
    componentName: "CameraRotateBold",
  },,
  {
    variant: "broken",
    slug: "camera-rotate-broken",
    Component: CameraRotateBroken,
    componentName: "CameraRotateBroken",
  },,
  {
    variant: "bulk",
    slug: "camera-rotate-bulk",
    Component: CameraRotateBulk,
    componentName: "CameraRotateBulk",
  },,
  {
    variant: "linear",
    slug: "camera-rotate-linear",
    Component: CameraRotateLinear,
    componentName: "CameraRotateLinear",
  },,
  {
    variant: "outline",
    slug: "camera-rotate-outline",
    Component: CameraRotateOutline,
    componentName: "CameraRotateOutline",
  },,
  {
    variant: "twotone",
    slug: "camera-rotate-twotone",
    Component: CameraRotateTwotone,
    componentName: "CameraRotateTwotone",
  }
];

export default { CameraRotateBold, CameraRotateBroken, CameraRotateBulk, CameraRotateLinear, CameraRotateOutline, CameraRotateTwotone };
