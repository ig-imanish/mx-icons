import CategoryBold from "./CategoryBold";
import CategoryBroken from "./CategoryBroken";
import CategoryBulk from "./CategoryBulk";
import CategoryLinear from "./CategoryLinear";
import CategoryOutline from "./CategoryOutline";
import CategoryTwotone from "./CategoryTwotone";

export { CategoryBold, CategoryBroken, CategoryBulk, CategoryLinear, CategoryOutline, CategoryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "category-bold",
    Component: CategoryBold,
    componentName: "CategoryBold",
  },
  {
    variant: "broken",
    slug: "category-broken",
    Component: CategoryBroken,
    componentName: "CategoryBroken",
  },
  {
    variant: "bulk",
    slug: "category-bulk",
    Component: CategoryBulk,
    componentName: "CategoryBulk",
  },
  {
    variant: "linear",
    slug: "category-linear",
    Component: CategoryLinear,
    componentName: "CategoryLinear",
  },
  {
    variant: "outline",
    slug: "category-outline",
    Component: CategoryOutline,
    componentName: "CategoryOutline",
  },
  {
    variant: "twotone",
    slug: "category-twotone",
    Component: CategoryTwotone,
    componentName: "CategoryTwotone",
  },
];
