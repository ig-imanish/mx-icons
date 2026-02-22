import BoxAddBold from "./BoxAddBold";
import BoxAddBroken from "./BoxAddBroken";
import BoxAddBulk from "./BoxAddBulk";
import BoxAddLinear from "./BoxAddLinear";
import BoxAddOutline from "./BoxAddOutline";
import BoxAddTwotone from "./BoxAddTwotone";

export { BoxAddBold, BoxAddBroken, BoxAddBulk, BoxAddLinear, BoxAddOutline, BoxAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-add-bold",
    Component: BoxAddBold,
    componentName: "BoxAddBold",
  },
  {
    variant: "broken",
    slug: "box-add-broken",
    Component: BoxAddBroken,
    componentName: "BoxAddBroken",
  },
  {
    variant: "bulk",
    slug: "box-add-bulk",
    Component: BoxAddBulk,
    componentName: "BoxAddBulk",
  },
  {
    variant: "linear",
    slug: "box-add-linear",
    Component: BoxAddLinear,
    componentName: "BoxAddLinear",
  },
  {
    variant: "outline",
    slug: "box-add-outline",
    Component: BoxAddOutline,
    componentName: "BoxAddOutline",
  },
  {
    variant: "twotone",
    slug: "box-add-twotone",
    Component: BoxAddTwotone,
    componentName: "BoxAddTwotone",
  },
];
