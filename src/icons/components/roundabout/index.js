import RoundaboutLeft from "./RoundaboutLeft";
import RoundaboutRight from "./RoundaboutRight";

export { RoundaboutLeft, RoundaboutRight };

export const variants = [
  {
    variant: "linear",
    slug: "roundabout-left",
    Component: RoundaboutLeft,
    componentName: "RoundaboutLeft",
  },
  {
    variant: "linear",
    slug: "roundabout-right",
    Component: RoundaboutRight,
    componentName: "RoundaboutRight",
  },
];
