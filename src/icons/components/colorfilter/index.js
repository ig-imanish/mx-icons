import ColorfilterBold from "./ColorfilterBold";
import ColorfilterBroken from "./ColorfilterBroken";
import ColorfilterBulk from "./ColorfilterBulk";
import ColorfilterLinear from "./ColorfilterLinear";
import ColorfilterOutline from "./ColorfilterOutline";
import ColorfilterTwotone from "./ColorfilterTwotone";

export { ColorfilterBold, ColorfilterBroken, ColorfilterBulk, ColorfilterLinear, ColorfilterOutline, ColorfilterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "colorfilter-bold",
    Component: ColorfilterBold,
    componentName: "ColorfilterBold",
  },
  {
    variant: "broken",
    slug: "colorfilter-broken",
    Component: ColorfilterBroken,
    componentName: "ColorfilterBroken",
  },
  {
    variant: "bulk",
    slug: "colorfilter-bulk",
    Component: ColorfilterBulk,
    componentName: "ColorfilterBulk",
  },
  {
    variant: "linear",
    slug: "colorfilter-linear",
    Component: ColorfilterLinear,
    componentName: "ColorfilterLinear",
  },
  {
    variant: "outline",
    slug: "colorfilter-outline",
    Component: ColorfilterOutline,
    componentName: "ColorfilterOutline",
  },
  {
    variant: "twotone",
    slug: "colorfilter-twotone",
    Component: ColorfilterTwotone,
    componentName: "ColorfilterTwotone",
  },
];
