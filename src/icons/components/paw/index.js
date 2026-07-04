import PawBold from "./PawBold";
import PawBroken from "./PawBroken";
import PawBulk from "./PawBulk";
import PawLinear from "./PawLinear";
import PawOutline from "./PawOutline";
import PawTwotone from "./PawTwotone";

export { PawBold, PawBroken, PawBulk, PawLinear, PawOutline, PawTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "paw-bold",
    Component: PawBold,
    componentName: "PawBold",
  },,
  {
    variant: "broken",
    slug: "paw-broken",
    Component: PawBroken,
    componentName: "PawBroken",
  },,
  {
    variant: "bulk",
    slug: "paw-bulk",
    Component: PawBulk,
    componentName: "PawBulk",
  },,
  {
    variant: "linear",
    slug: "paw-linear",
    Component: PawLinear,
    componentName: "PawLinear",
  },,
  {
    variant: "outline",
    slug: "paw-outline",
    Component: PawOutline,
    componentName: "PawOutline",
  },,
  {
    variant: "twotone",
    slug: "paw-twotone",
    Component: PawTwotone,
    componentName: "PawTwotone",
  }
];

export default { PawBold, PawBroken, PawBulk, PawLinear, PawOutline, PawTwotone };
