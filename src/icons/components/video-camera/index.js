import VideoCameraBold from "./VideoCameraBold";
import VideoCameraBroken from "./VideoCameraBroken";
import VideoCameraBulk from "./VideoCameraBulk";
import VideoCameraLinear from "./VideoCameraLinear";
import VideoCameraOutline from "./VideoCameraOutline";
import VideoCameraTwotone from "./VideoCameraTwotone";

export { VideoCameraBold, VideoCameraBroken, VideoCameraBulk, VideoCameraLinear, VideoCameraOutline, VideoCameraTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-camera-bold",
    Component: VideoCameraBold,
    componentName: "VideoCameraBold",
  },,
  {
    variant: "broken",
    slug: "video-camera-broken",
    Component: VideoCameraBroken,
    componentName: "VideoCameraBroken",
  },,
  {
    variant: "bulk",
    slug: "video-camera-bulk",
    Component: VideoCameraBulk,
    componentName: "VideoCameraBulk",
  },,
  {
    variant: "linear",
    slug: "video-camera-linear",
    Component: VideoCameraLinear,
    componentName: "VideoCameraLinear",
  },,
  {
    variant: "outline",
    slug: "video-camera-outline",
    Component: VideoCameraOutline,
    componentName: "VideoCameraOutline",
  },,
  {
    variant: "twotone",
    slug: "video-camera-twotone",
    Component: VideoCameraTwotone,
    componentName: "VideoCameraTwotone",
  }
];

export default { VideoCameraBold, VideoCameraBroken, VideoCameraBulk, VideoCameraLinear, VideoCameraOutline, VideoCameraTwotone };
