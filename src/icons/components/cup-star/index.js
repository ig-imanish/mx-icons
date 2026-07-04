import CupStarBold from "./CupStarBold";
import CupStarBroken from "./CupStarBroken";
import CupStarBulk from "./CupStarBulk";
import CupStarLinear from "./CupStarLinear";
import CupStarOutline from "./CupStarOutline";
import CupStarTwotone from "./CupStarTwotone";

export { CupStarBold, CupStarBroken, CupStarBulk, CupStarLinear, CupStarOutline, CupStarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cup-star-bold",
    Component: CupStarBold,
    componentName: "CupStarBold",
  },,
  {
    variant: "broken",
    slug: "cup-star-broken",
    Component: CupStarBroken,
    componentName: "CupStarBroken",
  },,
  {
    variant: "bulk",
    slug: "cup-star-bulk",
    Component: CupStarBulk,
    componentName: "CupStarBulk",
  },,
  {
    variant: "linear",
    slug: "cup-star-linear",
    Component: CupStarLinear,
    componentName: "CupStarLinear",
  },,
  {
    variant: "outline",
    slug: "cup-star-outline",
    Component: CupStarOutline,
    componentName: "CupStarOutline",
  },,
  {
    variant: "twotone",
    slug: "cup-star-twotone",
    Component: CupStarTwotone,
    componentName: "CupStarTwotone",
  }
];

export default { CupStarBold, CupStarBroken, CupStarBulk, CupStarLinear, CupStarOutline, CupStarTwotone };
