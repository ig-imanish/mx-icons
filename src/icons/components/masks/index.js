import MasksBold from "./MasksBold";
import MasksBroken from "./MasksBroken";
import MasksBulk from "./MasksBulk";
import MasksLinear from "./MasksLinear";
import MasksOutline from "./MasksOutline";
import MasksTwotone from "./MasksTwotone";

export { MasksBold, MasksBroken, MasksBulk, MasksLinear, MasksOutline, MasksTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "masks-bold",
    Component: MasksBold,
    componentName: "MasksBold",
  },,
  {
    variant: "broken",
    slug: "masks-broken",
    Component: MasksBroken,
    componentName: "MasksBroken",
  },,
  {
    variant: "bulk",
    slug: "masks-bulk",
    Component: MasksBulk,
    componentName: "MasksBulk",
  },,
  {
    variant: "linear",
    slug: "masks-linear",
    Component: MasksLinear,
    componentName: "MasksLinear",
  },,
  {
    variant: "outline",
    slug: "masks-outline",
    Component: MasksOutline,
    componentName: "MasksOutline",
  },,
  {
    variant: "twotone",
    slug: "masks-twotone",
    Component: MasksTwotone,
    componentName: "MasksTwotone",
  }
];

export default { MasksBold, MasksBroken, MasksBulk, MasksLinear, MasksOutline, MasksTwotone };
