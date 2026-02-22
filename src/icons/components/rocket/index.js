import RocketBold from "./RocketBold";
import RocketLinear from "./RocketLinear";
import RocketMini from "./RocketMini";

export { RocketBold, RocketLinear, RocketMini };

export const variants = [
  {
    variant: "bold",
    slug: "rocket-bold",
    Component: RocketBold,
    componentName: "RocketBold",
  },
  {
    variant: "linear",
    slug: "rocket-linear",
    Component: RocketLinear,
    componentName: "RocketLinear",
  },
  {
    variant: "mini",
    slug: "rocket-mini",
    Component: RocketMini,
    componentName: "RocketMini",
  },
];
