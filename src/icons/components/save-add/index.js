import SaveAddBold from "./SaveAddBold";
import SaveAddBroken from "./SaveAddBroken";
import SaveAddBulk from "./SaveAddBulk";
import SaveAddLinear from "./SaveAddLinear";
import SaveAddOutline from "./SaveAddOutline";
import SaveAddTwotone from "./SaveAddTwotone";

export { SaveAddBold, SaveAddBroken, SaveAddBulk, SaveAddLinear, SaveAddOutline, SaveAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "save-add-bold",
    Component: SaveAddBold,
    componentName: "SaveAddBold",
  },
  {
    variant: "broken",
    slug: "save-add-broken",
    Component: SaveAddBroken,
    componentName: "SaveAddBroken",
  },
  {
    variant: "bulk",
    slug: "save-add-bulk",
    Component: SaveAddBulk,
    componentName: "SaveAddBulk",
  },
  {
    variant: "linear",
    slug: "save-add-linear",
    Component: SaveAddLinear,
    componentName: "SaveAddLinear",
  },
  {
    variant: "outline",
    slug: "save-add-outline",
    Component: SaveAddOutline,
    componentName: "SaveAddOutline",
  },
  {
    variant: "twotone",
    slug: "save-add-twotone",
    Component: SaveAddTwotone,
    componentName: "SaveAddTwotone",
  },
];
