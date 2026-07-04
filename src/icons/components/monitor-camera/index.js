import MonitorCameraBold from "./MonitorCameraBold";
import MonitorCameraBroken from "./MonitorCameraBroken";
import MonitorCameraBulk from "./MonitorCameraBulk";
import MonitorCameraLinear from "./MonitorCameraLinear";
import MonitorCameraOutline from "./MonitorCameraOutline";
import MonitorCameraTwotone from "./MonitorCameraTwotone";

export { MonitorCameraBold, MonitorCameraBroken, MonitorCameraBulk, MonitorCameraLinear, MonitorCameraOutline, MonitorCameraTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "monitor-camera-bold",
    Component: MonitorCameraBold,
    componentName: "MonitorCameraBold",
  },,
  {
    variant: "broken",
    slug: "monitor-camera-broken",
    Component: MonitorCameraBroken,
    componentName: "MonitorCameraBroken",
  },,
  {
    variant: "bulk",
    slug: "monitor-camera-bulk",
    Component: MonitorCameraBulk,
    componentName: "MonitorCameraBulk",
  },,
  {
    variant: "linear",
    slug: "monitor-camera-linear",
    Component: MonitorCameraLinear,
    componentName: "MonitorCameraLinear",
  },,
  {
    variant: "outline",
    slug: "monitor-camera-outline",
    Component: MonitorCameraOutline,
    componentName: "MonitorCameraOutline",
  },,
  {
    variant: "twotone",
    slug: "monitor-camera-twotone",
    Component: MonitorCameraTwotone,
    componentName: "MonitorCameraTwotone",
  }
];

export default { MonitorCameraBold, MonitorCameraBroken, MonitorCameraBulk, MonitorCameraLinear, MonitorCameraOutline, MonitorCameraTwotone };
