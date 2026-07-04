import VideoPauseBold from "./VideoPauseBold";
import VideoPauseBroken from "./VideoPauseBroken";
import VideoPauseBulk from "./VideoPauseBulk";
import VideoPauseLinear from "./VideoPauseLinear";
import VideoPauseOutline from "./VideoPauseOutline";
import VideoPauseTwotone from "./VideoPauseTwotone";

export { VideoPauseBold, VideoPauseBroken, VideoPauseBulk, VideoPauseLinear, VideoPauseOutline, VideoPauseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-pause-bold",
    Component: VideoPauseBold,
    componentName: "VideoPauseBold",
  },,
  {
    variant: "broken",
    slug: "video-pause-broken",
    Component: VideoPauseBroken,
    componentName: "VideoPauseBroken",
  },,
  {
    variant: "bulk",
    slug: "video-pause-bulk",
    Component: VideoPauseBulk,
    componentName: "VideoPauseBulk",
  },,
  {
    variant: "linear",
    slug: "video-pause-linear",
    Component: VideoPauseLinear,
    componentName: "VideoPauseLinear",
  },,
  {
    variant: "outline",
    slug: "video-pause-outline",
    Component: VideoPauseOutline,
    componentName: "VideoPauseOutline",
  },,
  {
    variant: "twotone",
    slug: "video-pause-twotone",
    Component: VideoPauseTwotone,
    componentName: "VideoPauseTwotone",
  }
];

export default { VideoPauseBold, VideoPauseBroken, VideoPauseBulk, VideoPauseLinear, VideoPauseOutline, VideoPauseTwotone };
