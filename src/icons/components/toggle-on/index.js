import ToggleOnBold from "./ToggleOnBold";
import ToggleOnBroken from "./ToggleOnBroken";
import ToggleOnBulk from "./ToggleOnBulk";
import ToggleOnLinear from "./ToggleOnLinear";
import ToggleOnOutline from "./ToggleOnOutline";
import ToggleOnTwotone from "./ToggleOnTwotone";

export { ToggleOnBold, ToggleOnBroken, ToggleOnBulk, ToggleOnLinear, ToggleOnOutline, ToggleOnTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "toggle-on-bold",
    Component: ToggleOnBold,
    componentName: "ToggleOnBold",
  },
  {
    variant: "broken",
    slug: "toggle-on-broken",
    Component: ToggleOnBroken,
    componentName: "ToggleOnBroken",
  },
  {
    variant: "bulk",
    slug: "toggle-on-bulk",
    Component: ToggleOnBulk,
    componentName: "ToggleOnBulk",
  },
  {
    variant: "linear",
    slug: "toggle-on-linear",
    Component: ToggleOnLinear,
    componentName: "ToggleOnLinear",
  },
  {
    variant: "outline",
    slug: "toggle-on-outline",
    Component: ToggleOnOutline,
    componentName: "ToggleOnOutline",
  },
  {
    variant: "twotone",
    slug: "toggle-on-twotone",
    Component: ToggleOnTwotone,
    componentName: "ToggleOnTwotone",
  },
];
