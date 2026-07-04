import TrellisBold from "./TrellisBold";
import TrellisBroken from "./TrellisBroken";
import TrellisBulk from "./TrellisBulk";
import TrellisLinear from "./TrellisLinear";
import TrellisOutline from "./TrellisOutline";
import TrellisTwotone from "./TrellisTwotone";

export { TrellisBold, TrellisBroken, TrellisBulk, TrellisLinear, TrellisOutline, TrellisTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "trellis-bold",
    Component: TrellisBold,
    componentName: "TrellisBold",
  },,
  {
    variant: "broken",
    slug: "trellis-broken",
    Component: TrellisBroken,
    componentName: "TrellisBroken",
  },,
  {
    variant: "bulk",
    slug: "trellis-bulk",
    Component: TrellisBulk,
    componentName: "TrellisBulk",
  },,
  {
    variant: "linear",
    slug: "trellis-linear",
    Component: TrellisLinear,
    componentName: "TrellisLinear",
  },,
  {
    variant: "outline",
    slug: "trellis-outline",
    Component: TrellisOutline,
    componentName: "TrellisOutline",
  },,
  {
    variant: "twotone",
    slug: "trellis-twotone",
    Component: TrellisTwotone,
    componentName: "TrellisTwotone",
  }
];

export default { TrellisBold, TrellisBroken, TrellisBulk, TrellisLinear, TrellisOutline, TrellisTwotone };
