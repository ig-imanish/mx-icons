import PaletteRoundBold from "./PaletteRoundBold";
import PaletteRoundBroken from "./PaletteRoundBroken";
import PaletteRoundBulk from "./PaletteRoundBulk";
import PaletteRoundLinear from "./PaletteRoundLinear";
import PaletteRoundOutline from "./PaletteRoundOutline";
import PaletteRoundTwotone from "./PaletteRoundTwotone";

export { PaletteRoundBold, PaletteRoundBroken, PaletteRoundBulk, PaletteRoundLinear, PaletteRoundOutline, PaletteRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "palette-round-bold",
    Component: PaletteRoundBold,
    componentName: "PaletteRoundBold",
  },,
  {
    variant: "broken",
    slug: "palette-round-broken",
    Component: PaletteRoundBroken,
    componentName: "PaletteRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "palette-round-bulk",
    Component: PaletteRoundBulk,
    componentName: "PaletteRoundBulk",
  },,
  {
    variant: "linear",
    slug: "palette-round-linear",
    Component: PaletteRoundLinear,
    componentName: "PaletteRoundLinear",
  },,
  {
    variant: "outline",
    slug: "palette-round-outline",
    Component: PaletteRoundOutline,
    componentName: "PaletteRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "palette-round-twotone",
    Component: PaletteRoundTwotone,
    componentName: "PaletteRoundTwotone",
  }
];

export default { PaletteRoundBold, PaletteRoundBroken, PaletteRoundBulk, PaletteRoundLinear, PaletteRoundOutline, PaletteRoundTwotone };
