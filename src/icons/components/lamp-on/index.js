import LampOnBold from "./LampOnBold";
import LampOnBroken from "./LampOnBroken";
import LampOnBulk from "./LampOnBulk";
import LampOnLinear from "./LampOnLinear";
import LampOnOutline from "./LampOnOutline";
import LampOnTwotone from "./LampOnTwotone";

export { LampOnBold, LampOnBroken, LampOnBulk, LampOnLinear, LampOnOutline, LampOnTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lamp-on-bold",
    Component: LampOnBold,
    componentName: "LampOnBold",
  },
  {
    variant: "broken",
    slug: "lamp-on-broken",
    Component: LampOnBroken,
    componentName: "LampOnBroken",
  },
  {
    variant: "bulk",
    slug: "lamp-on-bulk",
    Component: LampOnBulk,
    componentName: "LampOnBulk",
  },
  {
    variant: "linear",
    slug: "lamp-on-linear",
    Component: LampOnLinear,
    componentName: "LampOnLinear",
  },
  {
    variant: "outline",
    slug: "lamp-on-outline",
    Component: LampOnOutline,
    componentName: "LampOnOutline",
  },
  {
    variant: "twotone",
    slug: "lamp-on-twotone",
    Component: LampOnTwotone,
    componentName: "LampOnTwotone",
  },
];
