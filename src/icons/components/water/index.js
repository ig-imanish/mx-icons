import WaterFilled from "./WaterFilled";
import WaterOff from "./WaterOff";
import WaterOffFilled from "./WaterOffFilled";
import WaterOffTwotone from "./WaterOffTwotone";
import WaterTwotone from "./WaterTwotone";

export { WaterFilled, WaterOff, WaterOffFilled, WaterOffTwotone, WaterTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "water-filled",
    Component: WaterFilled,
    componentName: "WaterFilled",
  },
  {
    variant: "linear",
    slug: "water-off",
    Component: WaterOff,
    componentName: "WaterOff",
  },
  {
    variant: "filled",
    slug: "water-off-filled",
    Component: WaterOffFilled,
    componentName: "WaterOffFilled",
  },
  {
    variant: "twotone",
    slug: "water-off-twotone",
    Component: WaterOffTwotone,
    componentName: "WaterOffTwotone",
  },
  {
    variant: "twotone",
    slug: "water-twotone",
    Component: WaterTwotone,
    componentName: "WaterTwotone",
  },
];
