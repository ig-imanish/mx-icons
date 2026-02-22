import CancelCircleBold from "./CancelCircleBold";
import CancelCircleLinear from "./CancelCircleLinear";

export { CancelCircleBold, CancelCircleLinear };

export const variants = [
  {
    variant: "bold",
    slug: "cancel-circle-bold",
    Component: CancelCircleBold,
    componentName: "CancelCircleBold",
  },
  {
    variant: "linear",
    slug: "cancel-circle-linear",
    Component: CancelCircleLinear,
    componentName: "CancelCircleLinear",
  },
];
