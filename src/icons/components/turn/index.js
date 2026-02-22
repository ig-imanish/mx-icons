import TurnLeft from "./TurnLeft";
import TurnRight from "./TurnRight";
import TurnSharpLeft from "./TurnSharpLeft";
import TurnSharpRight from "./TurnSharpRight";
import TurnSlightLeft from "./TurnSlightLeft";
import TurnSlightRight from "./TurnSlightRight";

export { TurnLeft, TurnRight, TurnSharpLeft, TurnSharpRight, TurnSlightLeft, TurnSlightRight };

export const variants = [
  {
    variant: "linear",
    slug: "turn-left",
    Component: TurnLeft,
    componentName: "TurnLeft",
  },
  {
    variant: "linear",
    slug: "turn-right",
    Component: TurnRight,
    componentName: "TurnRight",
  },
  {
    variant: "linear",
    slug: "turn-sharp-left",
    Component: TurnSharpLeft,
    componentName: "TurnSharpLeft",
  },
  {
    variant: "linear",
    slug: "turn-sharp-right",
    Component: TurnSharpRight,
    componentName: "TurnSharpRight",
  },
  {
    variant: "linear",
    slug: "turn-slight-left",
    Component: TurnSlightLeft,
    componentName: "TurnSlightLeft",
  },
  {
    variant: "linear",
    slug: "turn-slight-right",
    Component: TurnSlightRight,
    componentName: "TurnSlightRight",
  },
];
