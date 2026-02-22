import ColorSwatchBold from "./ColorSwatchBold";
import ColorSwatchBroken from "./ColorSwatchBroken";
import ColorSwatchBulk from "./ColorSwatchBulk";
import ColorSwatchLinear from "./ColorSwatchLinear";
import ColorSwatchOutline from "./ColorSwatchOutline";
import ColorSwatchTwotone from "./ColorSwatchTwotone";

export { ColorSwatchBold, ColorSwatchBroken, ColorSwatchBulk, ColorSwatchLinear, ColorSwatchOutline, ColorSwatchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "color-swatch-bold",
    Component: ColorSwatchBold,
    componentName: "ColorSwatchBold",
  },
  {
    variant: "broken",
    slug: "color-swatch-broken",
    Component: ColorSwatchBroken,
    componentName: "ColorSwatchBroken",
  },
  {
    variant: "bulk",
    slug: "color-swatch-bulk",
    Component: ColorSwatchBulk,
    componentName: "ColorSwatchBulk",
  },
  {
    variant: "linear",
    slug: "color-swatch-linear",
    Component: ColorSwatchLinear,
    componentName: "ColorSwatchLinear",
  },
  {
    variant: "outline",
    slug: "color-swatch-outline",
    Component: ColorSwatchOutline,
    componentName: "ColorSwatchOutline",
  },
  {
    variant: "twotone",
    slug: "color-swatch-twotone",
    Component: ColorSwatchTwotone,
    componentName: "ColorSwatchTwotone",
  },
];
