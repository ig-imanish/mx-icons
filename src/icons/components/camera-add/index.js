import CameraAddBold from "./CameraAddBold";
import CameraAddBroken from "./CameraAddBroken";
import CameraAddBulk from "./CameraAddBulk";
import CameraAddLinear from "./CameraAddLinear";
import CameraAddOutline from "./CameraAddOutline";
import CameraAddTwotone from "./CameraAddTwotone";

export { CameraAddBold, CameraAddBroken, CameraAddBulk, CameraAddLinear, CameraAddOutline, CameraAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "camera-add-bold",
    Component: CameraAddBold,
    componentName: "CameraAddBold",
  },,
  {
    variant: "broken",
    slug: "camera-add-broken",
    Component: CameraAddBroken,
    componentName: "CameraAddBroken",
  },,
  {
    variant: "bulk",
    slug: "camera-add-bulk",
    Component: CameraAddBulk,
    componentName: "CameraAddBulk",
  },,
  {
    variant: "linear",
    slug: "camera-add-linear",
    Component: CameraAddLinear,
    componentName: "CameraAddLinear",
  },,
  {
    variant: "outline",
    slug: "camera-add-outline",
    Component: CameraAddOutline,
    componentName: "CameraAddOutline",
  },,
  {
    variant: "twotone",
    slug: "camera-add-twotone",
    Component: CameraAddTwotone,
    componentName: "CameraAddTwotone",
  }
];

export default { CameraAddBold, CameraAddBroken, CameraAddBulk, CameraAddLinear, CameraAddOutline, CameraAddTwotone };
