import SaveRemoveBold from "./SaveRemoveBold";
import SaveRemoveBroken from "./SaveRemoveBroken";
import SaveRemoveBulk from "./SaveRemoveBulk";
import SaveRemoveLinear from "./SaveRemoveLinear";
import SaveRemoveOutline from "./SaveRemoveOutline";
import SaveRemoveTwotone from "./SaveRemoveTwotone";

export { SaveRemoveBold, SaveRemoveBroken, SaveRemoveBulk, SaveRemoveLinear, SaveRemoveOutline, SaveRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "save-remove-bold",
    Component: SaveRemoveBold,
    componentName: "SaveRemoveBold",
  },
  {
    variant: "broken",
    slug: "save-remove-broken",
    Component: SaveRemoveBroken,
    componentName: "SaveRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "save-remove-bulk",
    Component: SaveRemoveBulk,
    componentName: "SaveRemoveBulk",
  },
  {
    variant: "linear",
    slug: "save-remove-linear",
    Component: SaveRemoveLinear,
    componentName: "SaveRemoveLinear",
  },
  {
    variant: "outline",
    slug: "save-remove-outline",
    Component: SaveRemoveOutline,
    componentName: "SaveRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "save-remove-twotone",
    Component: SaveRemoveTwotone,
    componentName: "SaveRemoveTwotone",
  },
];
