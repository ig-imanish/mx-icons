import CatBold from "./CatBold";
import CatBroken from "./CatBroken";
import CatBulk from "./CatBulk";
import CatLinear from "./CatLinear";
import CatOutline from "./CatOutline";
import CatTwotone from "./CatTwotone";

export { CatBold, CatBroken, CatBulk, CatLinear, CatOutline, CatTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cat-bold",
    Component: CatBold,
    componentName: "CatBold",
  },,
  {
    variant: "broken",
    slug: "cat-broken",
    Component: CatBroken,
    componentName: "CatBroken",
  },,
  {
    variant: "bulk",
    slug: "cat-bulk",
    Component: CatBulk,
    componentName: "CatBulk",
  },,
  {
    variant: "linear",
    slug: "cat-linear",
    Component: CatLinear,
    componentName: "CatLinear",
  },,
  {
    variant: "outline",
    slug: "cat-outline",
    Component: CatOutline,
    componentName: "CatOutline",
  },,
  {
    variant: "twotone",
    slug: "cat-twotone",
    Component: CatTwotone,
    componentName: "CatTwotone",
  }
];

export default { CatBold, CatBroken, CatBulk, CatLinear, CatOutline, CatTwotone };
