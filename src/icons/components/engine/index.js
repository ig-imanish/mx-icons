import EngineFilled from "./EngineFilled";
import EngineOff from "./EngineOff";
import EngineOffFilled from "./EngineOffFilled";
import EngineOffTwotone from "./EngineOffTwotone";
import EngineTwotone from "./EngineTwotone";

export { EngineFilled, EngineOff, EngineOffFilled, EngineOffTwotone, EngineTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "engine-filled",
    Component: EngineFilled,
    componentName: "EngineFilled",
  },
  {
    variant: "linear",
    slug: "engine-off",
    Component: EngineOff,
    componentName: "EngineOff",
  },
  {
    variant: "filled",
    slug: "engine-off-filled",
    Component: EngineOffFilled,
    componentName: "EngineOffFilled",
  },
  {
    variant: "twotone",
    slug: "engine-off-twotone",
    Component: EngineOffTwotone,
    componentName: "EngineOffTwotone",
  },
  {
    variant: "twotone",
    slug: "engine-twotone",
    Component: EngineTwotone,
    componentName: "EngineTwotone",
  },
];
