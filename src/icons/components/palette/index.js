import PaletteBold from "./PaletteBold";
import PaletteBroken from "./PaletteBroken";
import PaletteBulk from "./PaletteBulk";
import PaletteLinear from "./PaletteLinear";
import PaletteOutline from "./PaletteOutline";
import PaletteTwotone from "./PaletteTwotone";

export { PaletteBold, PaletteBroken, PaletteBulk, PaletteLinear, PaletteOutline, PaletteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "palette-bold",
    Component: PaletteBold,
    componentName: "PaletteBold",
  },,
  {
    variant: "broken",
    slug: "palette-broken",
    Component: PaletteBroken,
    componentName: "PaletteBroken",
  },,
  {
    variant: "bulk",
    slug: "palette-bulk",
    Component: PaletteBulk,
    componentName: "PaletteBulk",
  },,
  {
    variant: "linear",
    slug: "palette-linear",
    Component: PaletteLinear,
    componentName: "PaletteLinear",
  },,
  {
    variant: "outline",
    slug: "palette-outline",
    Component: PaletteOutline,
    componentName: "PaletteOutline",
  },,
  {
    variant: "twotone",
    slug: "palette-twotone",
    Component: PaletteTwotone,
    componentName: "PaletteTwotone",
  }
];

export default { PaletteBold, PaletteBroken, PaletteBulk, PaletteLinear, PaletteOutline, PaletteTwotone };
