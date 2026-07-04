import FolderCheckBold from "./FolderCheckBold";
import FolderCheckBroken from "./FolderCheckBroken";
import FolderCheckBulk from "./FolderCheckBulk";
import FolderCheckLinear from "./FolderCheckLinear";
import FolderCheckOutline from "./FolderCheckOutline";
import FolderCheckTwotone from "./FolderCheckTwotone";

export { FolderCheckBold, FolderCheckBroken, FolderCheckBulk, FolderCheckLinear, FolderCheckOutline, FolderCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-check-bold",
    Component: FolderCheckBold,
    componentName: "FolderCheckBold",
  },,
  {
    variant: "broken",
    slug: "folder-check-broken",
    Component: FolderCheckBroken,
    componentName: "FolderCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "folder-check-bulk",
    Component: FolderCheckBulk,
    componentName: "FolderCheckBulk",
  },,
  {
    variant: "linear",
    slug: "folder-check-linear",
    Component: FolderCheckLinear,
    componentName: "FolderCheckLinear",
  },,
  {
    variant: "outline",
    slug: "folder-check-outline",
    Component: FolderCheckOutline,
    componentName: "FolderCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "folder-check-twotone",
    Component: FolderCheckTwotone,
    componentName: "FolderCheckTwotone",
  }
];

export default { FolderCheckBold, FolderCheckBroken, FolderCheckBulk, FolderCheckLinear, FolderCheckOutline, FolderCheckTwotone };
