import EyeBold from "./EyeBold";
import EyeBroken from "./EyeBroken";
import EyeLinear from "./EyeLinear";
import EyeOutline from "./EyeOutline";
import EyeTwotone from "./EyeTwotone";

export { EyeBold, EyeBroken, EyeLinear, EyeOutline, EyeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "eye-bold",
    Component: EyeBold,
    componentName: "EyeBold",
  },
  {
    variant: "broken",
    slug: "eye-broken",
    Component: EyeBroken,
    componentName: "EyeBroken",
  },
  {
    variant: "linear",
    slug: "eye-linear",
    Component: EyeLinear,
    componentName: "EyeLinear",
  },
  {
    variant: "outline",
    slug: "eye-outline",
    Component: EyeOutline,
    componentName: "EyeOutline",
  },
  {
    variant: "twotone",
    slug: "eye-twotone",
    Component: EyeTwotone,
    componentName: "EyeTwotone",
  },
];
