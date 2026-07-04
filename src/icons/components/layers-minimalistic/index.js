import LayersMinimalisticBold from "./LayersMinimalisticBold";
import LayersMinimalisticBroken from "./LayersMinimalisticBroken";
import LayersMinimalisticBulk from "./LayersMinimalisticBulk";
import LayersMinimalisticLinear from "./LayersMinimalisticLinear";
import LayersMinimalisticOutline from "./LayersMinimalisticOutline";
import LayersMinimalisticTwotone from "./LayersMinimalisticTwotone";

export { LayersMinimalisticBold, LayersMinimalisticBroken, LayersMinimalisticBulk, LayersMinimalisticLinear, LayersMinimalisticOutline, LayersMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "layers-minimalistic-bold",
    Component: LayersMinimalisticBold,
    componentName: "LayersMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "layers-minimalistic-broken",
    Component: LayersMinimalisticBroken,
    componentName: "LayersMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "layers-minimalistic-bulk",
    Component: LayersMinimalisticBulk,
    componentName: "LayersMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "layers-minimalistic-linear",
    Component: LayersMinimalisticLinear,
    componentName: "LayersMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "layers-minimalistic-outline",
    Component: LayersMinimalisticOutline,
    componentName: "LayersMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "layers-minimalistic-twotone",
    Component: LayersMinimalisticTwotone,
    componentName: "LayersMinimalisticTwotone",
  }
];

export default { LayersMinimalisticBold, LayersMinimalisticBroken, LayersMinimalisticBulk, LayersMinimalisticLinear, LayersMinimalisticOutline, LayersMinimalisticTwotone };
