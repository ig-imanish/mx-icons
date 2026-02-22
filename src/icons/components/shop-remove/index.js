import ShopRemoveBold from "./ShopRemoveBold";
import ShopRemoveBroken from "./ShopRemoveBroken";
import ShopRemoveBulk from "./ShopRemoveBulk";
import ShopRemoveLinear from "./ShopRemoveLinear";
import ShopRemoveOutline from "./ShopRemoveOutline";
import ShopRemoveTwotone from "./ShopRemoveTwotone";

export { ShopRemoveBold, ShopRemoveBroken, ShopRemoveBulk, ShopRemoveLinear, ShopRemoveOutline, ShopRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shop-remove-bold",
    Component: ShopRemoveBold,
    componentName: "ShopRemoveBold",
  },
  {
    variant: "broken",
    slug: "shop-remove-broken",
    Component: ShopRemoveBroken,
    componentName: "ShopRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "shop-remove-bulk",
    Component: ShopRemoveBulk,
    componentName: "ShopRemoveBulk",
  },
  {
    variant: "linear",
    slug: "shop-remove-linear",
    Component: ShopRemoveLinear,
    componentName: "ShopRemoveLinear",
  },
  {
    variant: "outline",
    slug: "shop-remove-outline",
    Component: ShopRemoveOutline,
    componentName: "ShopRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "shop-remove-twotone",
    Component: ShopRemoveTwotone,
    componentName: "ShopRemoveTwotone",
  },
];
