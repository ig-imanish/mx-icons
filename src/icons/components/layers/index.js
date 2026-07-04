import LayersBold from "./LayersBold";
import LayersBroken from "./LayersBroken";
import LayersBulk from "./LayersBulk";
import LayersLinear from "./LayersLinear";
import LayersOutline from "./LayersOutline";
import LayersTwotone from "./LayersTwotone";

export { LayersBold, LayersBroken, LayersBulk, LayersLinear, LayersOutline, LayersTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "layers-bold",
    Component: LayersBold,
    componentName: "LayersBold",
  },,
  {
    variant: "broken",
    slug: "layers-broken",
    Component: LayersBroken,
    componentName: "LayersBroken",
  },,
  {
    variant: "bulk",
    slug: "layers-bulk",
    Component: LayersBulk,
    componentName: "LayersBulk",
  },,
  {
    variant: "linear",
    slug: "layers-linear",
    Component: LayersLinear,
    componentName: "LayersLinear",
  },,
  {
    variant: "outline",
    slug: "layers-outline",
    Component: LayersOutline,
    componentName: "LayersOutline",
  },,
  {
    variant: "twotone",
    slug: "layers-twotone",
    Component: LayersTwotone,
    componentName: "LayersTwotone",
  }
];

export default { LayersBold, LayersBroken, LayersBulk, LayersLinear, LayersOutline, LayersTwotone };
