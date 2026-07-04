import AdhesivePlasterBold from "./AdhesivePlasterBold";
import AdhesivePlasterBroken from "./AdhesivePlasterBroken";
import AdhesivePlasterBulk from "./AdhesivePlasterBulk";
import AdhesivePlasterLinear from "./AdhesivePlasterLinear";
import AdhesivePlasterOutline from "./AdhesivePlasterOutline";
import AdhesivePlasterTwotone from "./AdhesivePlasterTwotone";

export { AdhesivePlasterBold, AdhesivePlasterBroken, AdhesivePlasterBulk, AdhesivePlasterLinear, AdhesivePlasterOutline, AdhesivePlasterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "adhesive-plaster-bold",
    Component: AdhesivePlasterBold,
    componentName: "AdhesivePlasterBold",
  },,
  {
    variant: "broken",
    slug: "adhesive-plaster-broken",
    Component: AdhesivePlasterBroken,
    componentName: "AdhesivePlasterBroken",
  },,
  {
    variant: "bulk",
    slug: "adhesive-plaster-bulk",
    Component: AdhesivePlasterBulk,
    componentName: "AdhesivePlasterBulk",
  },,
  {
    variant: "linear",
    slug: "adhesive-plaster-linear",
    Component: AdhesivePlasterLinear,
    componentName: "AdhesivePlasterLinear",
  },,
  {
    variant: "outline",
    slug: "adhesive-plaster-outline",
    Component: AdhesivePlasterOutline,
    componentName: "AdhesivePlasterOutline",
  },,
  {
    variant: "twotone",
    slug: "adhesive-plaster-twotone",
    Component: AdhesivePlasterTwotone,
    componentName: "AdhesivePlasterTwotone",
  }
];

export default { AdhesivePlasterBold, AdhesivePlasterBroken, AdhesivePlasterBulk, AdhesivePlasterLinear, AdhesivePlasterOutline, AdhesivePlasterTwotone };
