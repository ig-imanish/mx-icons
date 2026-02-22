import LayerBold from "./LayerBold";
import LayerBroken from "./LayerBroken";
import LayerBulk from "./LayerBulk";
import LayerLinear from "./LayerLinear";
import LayerOutline from "./LayerOutline";
import LayerTwotone from "./LayerTwotone";

export { LayerBold, LayerBroken, LayerBulk, LayerLinear, LayerOutline, LayerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "layer-bold",
    Component: LayerBold,
    componentName: "LayerBold",
  },
  {
    variant: "broken",
    slug: "layer-broken",
    Component: LayerBroken,
    componentName: "LayerBroken",
  },
  {
    variant: "bulk",
    slug: "layer-bulk",
    Component: LayerBulk,
    componentName: "LayerBulk",
  },
  {
    variant: "linear",
    slug: "layer-linear",
    Component: LayerLinear,
    componentName: "LayerLinear",
  },
  {
    variant: "outline",
    slug: "layer-outline",
    Component: LayerOutline,
    componentName: "LayerOutline",
  },
  {
    variant: "twotone",
    slug: "layer-twotone",
    Component: LayerTwotone,
    componentName: "LayerTwotone",
  },
];
