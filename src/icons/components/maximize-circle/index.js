import MaximizeCircleBold from "./MaximizeCircleBold";
import MaximizeCircleBroken from "./MaximizeCircleBroken";
import MaximizeCircleLinear from "./MaximizeCircleLinear";
import MaximizeCircleOutline from "./MaximizeCircleOutline";
import MaximizeCircleTwotone from "./MaximizeCircleTwotone";

export { MaximizeCircleBold, MaximizeCircleBroken, MaximizeCircleLinear, MaximizeCircleOutline, MaximizeCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "maximize-circle-bold",
    Component: MaximizeCircleBold,
    componentName: "MaximizeCircleBold",
  },
  {
    variant: "broken",
    slug: "maximize-circle-broken",
    Component: MaximizeCircleBroken,
    componentName: "MaximizeCircleBroken",
  },
  {
    variant: "linear",
    slug: "maximize-circle-linear",
    Component: MaximizeCircleLinear,
    componentName: "MaximizeCircleLinear",
  },
  {
    variant: "outline",
    slug: "maximize-circle-outline",
    Component: MaximizeCircleOutline,
    componentName: "MaximizeCircleOutline",
  },
  {
    variant: "twotone",
    slug: "maximize-circle-twotone",
    Component: MaximizeCircleTwotone,
    componentName: "MaximizeCircleTwotone",
  },
];
