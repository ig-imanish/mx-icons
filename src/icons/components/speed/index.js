import SpeedLoop from "./SpeedLoop";
import SpeedTwotone from "./SpeedTwotone";
import SpeedTwotoneLoop from "./SpeedTwotoneLoop";

export { SpeedLoop, SpeedTwotone, SpeedTwotoneLoop };

export const variants = [
  {
    variant: "linear",
    slug: "speed-loop",
    Component: SpeedLoop,
    componentName: "SpeedLoop",
  },
  {
    variant: "twotone",
    slug: "speed-twotone",
    Component: SpeedTwotone,
    componentName: "SpeedTwotone",
  },
  {
    variant: "twotone",
    slug: "speed-twotone-loop",
    Component: SpeedTwotoneLoop,
    componentName: "SpeedTwotoneLoop",
  },
];
