import MarkerFilled from "./MarkerFilled";
import MarkerTwotone from "./MarkerTwotone";

export { MarkerFilled, MarkerTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "marker-filled",
    Component: MarkerFilled,
    componentName: "MarkerFilled",
  },
  {
    variant: "twotone",
    slug: "marker-twotone",
    Component: MarkerTwotone,
    componentName: "MarkerTwotone",
  },
];
