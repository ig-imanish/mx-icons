import GlassesBold from "./GlassesBold";
import GlassesBroken from "./GlassesBroken";
import GlassesBulk from "./GlassesBulk";
import GlassesLinear from "./GlassesLinear";
import GlassesOutline from "./GlassesOutline";
import GlassesTwotone from "./GlassesTwotone";

export { GlassesBold, GlassesBroken, GlassesBulk, GlassesLinear, GlassesOutline, GlassesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "glasses-bold",
    Component: GlassesBold,
    componentName: "GlassesBold",
  },,
  {
    variant: "broken",
    slug: "glasses-broken",
    Component: GlassesBroken,
    componentName: "GlassesBroken",
  },,
  {
    variant: "bulk",
    slug: "glasses-bulk",
    Component: GlassesBulk,
    componentName: "GlassesBulk",
  },,
  {
    variant: "linear",
    slug: "glasses-linear",
    Component: GlassesLinear,
    componentName: "GlassesLinear",
  },,
  {
    variant: "outline",
    slug: "glasses-outline",
    Component: GlassesOutline,
    componentName: "GlassesOutline",
  },,
  {
    variant: "twotone",
    slug: "glasses-twotone",
    Component: GlassesTwotone,
    componentName: "GlassesTwotone",
  }
];

export default { GlassesBold, GlassesBroken, GlassesBulk, GlassesLinear, GlassesOutline, GlassesTwotone };
