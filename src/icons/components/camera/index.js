import CameraBold from "./CameraBold";
import CameraBroken from "./CameraBroken";
import CameraBulk from "./CameraBulk";
import CameraLinear from "./CameraLinear";
import CameraOutline from "./CameraOutline";
import CameraTwotone from "./CameraTwotone";

export { CameraBold, CameraBroken, CameraBulk, CameraLinear, CameraOutline, CameraTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "camera-bold",
    Component: CameraBold,
    componentName: "CameraBold",
  },
  {
    variant: "broken",
    slug: "camera-broken",
    Component: CameraBroken,
    componentName: "CameraBroken",
  },
  {
    variant: "bulk",
    slug: "camera-bulk",
    Component: CameraBulk,
    componentName: "CameraBulk",
  },
  {
    variant: "linear",
    slug: "camera-linear",
    Component: CameraLinear,
    componentName: "CameraLinear",
  },
  {
    variant: "outline",
    slug: "camera-outline",
    Component: CameraOutline,
    componentName: "CameraOutline",
  },
  {
    variant: "twotone",
    slug: "camera-twotone",
    Component: CameraTwotone,
    componentName: "CameraTwotone",
  },
];
