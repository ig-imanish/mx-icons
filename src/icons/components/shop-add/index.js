import ShopAddBold from "./ShopAddBold";
import ShopAddBroken from "./ShopAddBroken";
import ShopAddBulk from "./ShopAddBulk";
import ShopAddLinear from "./ShopAddLinear";
import ShopAddOutline from "./ShopAddOutline";
import ShopAddTwotone from "./ShopAddTwotone";

export { ShopAddBold, ShopAddBroken, ShopAddBulk, ShopAddLinear, ShopAddOutline, ShopAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shop-add-bold",
    Component: ShopAddBold,
    componentName: "ShopAddBold",
  },
  {
    variant: "broken",
    slug: "shop-add-broken",
    Component: ShopAddBroken,
    componentName: "ShopAddBroken",
  },
  {
    variant: "bulk",
    slug: "shop-add-bulk",
    Component: ShopAddBulk,
    componentName: "ShopAddBulk",
  },
  {
    variant: "linear",
    slug: "shop-add-linear",
    Component: ShopAddLinear,
    componentName: "ShopAddLinear",
  },
  {
    variant: "outline",
    slug: "shop-add-outline",
    Component: ShopAddOutline,
    componentName: "ShopAddOutline",
  },
  {
    variant: "twotone",
    slug: "shop-add-twotone",
    Component: ShopAddTwotone,
    componentName: "ShopAddTwotone",
  },
];
