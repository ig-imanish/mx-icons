import GlassBold from "./GlassBold";
import GlassBroken from "./GlassBroken";
import GlassBulk from "./GlassBulk";
import GlassLinear from "./GlassLinear";
import GlassOutline from "./GlassOutline";
import GlassTwotone from "./GlassTwotone";

export { GlassBold, GlassBroken, GlassBulk, GlassLinear, GlassOutline, GlassTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "glass-bold",
    Component: GlassBold,
    componentName: "GlassBold",
  },
  {
    variant: "broken",
    slug: "glass-broken",
    Component: GlassBroken,
    componentName: "GlassBroken",
  },
  {
    variant: "bulk",
    slug: "glass-bulk",
    Component: GlassBulk,
    componentName: "GlassBulk",
  },
  {
    variant: "linear",
    slug: "glass-linear",
    Component: GlassLinear,
    componentName: "GlassLinear",
  },
  {
    variant: "outline",
    slug: "glass-outline",
    Component: GlassOutline,
    componentName: "GlassOutline",
  },
  {
    variant: "twotone",
    slug: "glass-twotone",
    Component: GlassTwotone,
    componentName: "GlassTwotone",
  },
];
