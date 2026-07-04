import CameraSquareBold from "./CameraSquareBold";
import CameraSquareBroken from "./CameraSquareBroken";
import CameraSquareBulk from "./CameraSquareBulk";
import CameraSquareLinear from "./CameraSquareLinear";
import CameraSquareOutline from "./CameraSquareOutline";
import CameraSquareTwotone from "./CameraSquareTwotone";

export { CameraSquareBold, CameraSquareBroken, CameraSquareBulk, CameraSquareLinear, CameraSquareOutline, CameraSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "camera-square-bold",
    Component: CameraSquareBold,
    componentName: "CameraSquareBold",
  },,
  {
    variant: "broken",
    slug: "camera-square-broken",
    Component: CameraSquareBroken,
    componentName: "CameraSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "camera-square-bulk",
    Component: CameraSquareBulk,
    componentName: "CameraSquareBulk",
  },,
  {
    variant: "linear",
    slug: "camera-square-linear",
    Component: CameraSquareLinear,
    componentName: "CameraSquareLinear",
  },,
  {
    variant: "outline",
    slug: "camera-square-outline",
    Component: CameraSquareOutline,
    componentName: "CameraSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "camera-square-twotone",
    Component: CameraSquareTwotone,
    componentName: "CameraSquareTwotone",
  }
];

export default { CameraSquareBold, CameraSquareBroken, CameraSquareBulk, CameraSquareLinear, CameraSquareOutline, CameraSquareTwotone };
