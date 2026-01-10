import RocketLinear from "./RocketLinear";
import RocketBold from "./RocketBold";
import RocketMini from "./RocketMini";

export { RocketLinear, RocketBold, RocketMini };

export const variants = [
  {
    variant: "linear",
    slug: "rocket-linear",
    Component: RocketLinear,
    componentName: "RocketLinear",
  },
  {
    variant: "bold",
    slug: "rocket-bold",
    Component: RocketBold,
    componentName: "RocketBold",
  },
  {
    variant: "mini",
    slug: "rocket-mini",
    Component: RocketMini,
    componentName: "RocketMini",
  },
];

export default { RocketLinear, RocketBold, RocketMini };
