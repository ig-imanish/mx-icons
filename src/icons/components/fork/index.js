import ForkLeft from "./ForkLeft";
import ForkRight from "./ForkRight";

export { ForkLeft, ForkRight };

export const variants = [
  {
    variant: "linear",
    slug: "fork-left",
    Component: ForkLeft,
    componentName: "ForkLeft",
  },
  {
    variant: "linear",
    slug: "fork-right",
    Component: ForkRight,
    componentName: "ForkRight",
  },
];
