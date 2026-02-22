import FolderAddBold from "./FolderAddBold";
import FolderAddBroken from "./FolderAddBroken";
import FolderAddBulk from "./FolderAddBulk";
import FolderAddLinear from "./FolderAddLinear";
import FolderAddOutline from "./FolderAddOutline";
import FolderAddTwotone from "./FolderAddTwotone";

export { FolderAddBold, FolderAddBroken, FolderAddBulk, FolderAddLinear, FolderAddOutline, FolderAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-add-bold",
    Component: FolderAddBold,
    componentName: "FolderAddBold",
  },
  {
    variant: "broken",
    slug: "folder-add-broken",
    Component: FolderAddBroken,
    componentName: "FolderAddBroken",
  },
  {
    variant: "bulk",
    slug: "folder-add-bulk",
    Component: FolderAddBulk,
    componentName: "FolderAddBulk",
  },
  {
    variant: "linear",
    slug: "folder-add-linear",
    Component: FolderAddLinear,
    componentName: "FolderAddLinear",
  },
  {
    variant: "outline",
    slug: "folder-add-outline",
    Component: FolderAddOutline,
    componentName: "FolderAddOutline",
  },
  {
    variant: "twotone",
    slug: "folder-add-twotone",
    Component: FolderAddTwotone,
    componentName: "FolderAddTwotone",
  },
];
