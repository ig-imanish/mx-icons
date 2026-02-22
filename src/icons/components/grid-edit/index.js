import GridEditBold from "./GridEditBold";
import GridEditBroken from "./GridEditBroken";
import GridEditBulk from "./GridEditBulk";
import GridEditLinear from "./GridEditLinear";
import GridEditOutline from "./GridEditOutline";
import GridEditTwotone from "./GridEditTwotone";

export { GridEditBold, GridEditBroken, GridEditBulk, GridEditLinear, GridEditOutline, GridEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid-edit-bold",
    Component: GridEditBold,
    componentName: "GridEditBold",
  },
  {
    variant: "broken",
    slug: "grid-edit-broken",
    Component: GridEditBroken,
    componentName: "GridEditBroken",
  },
  {
    variant: "bulk",
    slug: "grid-edit-bulk",
    Component: GridEditBulk,
    componentName: "GridEditBulk",
  },
  {
    variant: "linear",
    slug: "grid-edit-linear",
    Component: GridEditLinear,
    componentName: "GridEditLinear",
  },
  {
    variant: "outline",
    slug: "grid-edit-outline",
    Component: GridEditOutline,
    componentName: "GridEditOutline",
  },
  {
    variant: "twotone",
    slug: "grid-edit-twotone",
    Component: GridEditTwotone,
    componentName: "GridEditTwotone",
  },
];
