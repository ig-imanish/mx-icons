import WindowFrameBold from "./WindowFrameBold";
import WindowFrameBroken from "./WindowFrameBroken";
import WindowFrameBulk from "./WindowFrameBulk";
import WindowFrameLinear from "./WindowFrameLinear";
import WindowFrameOutline from "./WindowFrameOutline";
import WindowFrameTwotone from "./WindowFrameTwotone";

export { WindowFrameBold, WindowFrameBroken, WindowFrameBulk, WindowFrameLinear, WindowFrameOutline, WindowFrameTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "window-frame-bold",
    Component: WindowFrameBold,
    componentName: "WindowFrameBold",
  },,
  {
    variant: "broken",
    slug: "window-frame-broken",
    Component: WindowFrameBroken,
    componentName: "WindowFrameBroken",
  },,
  {
    variant: "bulk",
    slug: "window-frame-bulk",
    Component: WindowFrameBulk,
    componentName: "WindowFrameBulk",
  },,
  {
    variant: "linear",
    slug: "window-frame-linear",
    Component: WindowFrameLinear,
    componentName: "WindowFrameLinear",
  },,
  {
    variant: "outline",
    slug: "window-frame-outline",
    Component: WindowFrameOutline,
    componentName: "WindowFrameOutline",
  },,
  {
    variant: "twotone",
    slug: "window-frame-twotone",
    Component: WindowFrameTwotone,
    componentName: "WindowFrameTwotone",
  }
];

export default { WindowFrameBold, WindowFrameBroken, WindowFrameBulk, WindowFrameLinear, WindowFrameOutline, WindowFrameTwotone };
