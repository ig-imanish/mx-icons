import LampBold from "./LampBold";
import LampBroken from "./LampBroken";
import LampBulk from "./LampBulk";
import LampLinear from "./LampLinear";
import LampOutline from "./LampOutline";
import LampTwotone from "./LampTwotone";

export { LampBold, LampBroken, LampBulk, LampLinear, LampOutline, LampTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lamp-bold",
    Component: LampBold,
    componentName: "LampBold",
  },
  {
    variant: "broken",
    slug: "lamp-broken",
    Component: LampBroken,
    componentName: "LampBroken",
  },
  {
    variant: "bulk",
    slug: "lamp-bulk",
    Component: LampBulk,
    componentName: "LampBulk",
  },
  {
    variant: "linear",
    slug: "lamp-linear",
    Component: LampLinear,
    componentName: "LampLinear",
  },
  {
    variant: "outline",
    slug: "lamp-outline",
    Component: LampOutline,
    componentName: "LampOutline",
  },
  {
    variant: "twotone",
    slug: "lamp-twotone",
    Component: LampTwotone,
    componentName: "LampTwotone",
  },
];
