import FolderCrossBold from "./FolderCrossBold";
import FolderCrossBroken from "./FolderCrossBroken";
import FolderCrossBulk from "./FolderCrossBulk";
import FolderCrossLinear from "./FolderCrossLinear";
import FolderCrossOutline from "./FolderCrossOutline";
import FolderCrossTwotone from "./FolderCrossTwotone";

export { FolderCrossBold, FolderCrossBroken, FolderCrossBulk, FolderCrossLinear, FolderCrossOutline, FolderCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-cross-bold",
    Component: FolderCrossBold,
    componentName: "FolderCrossBold",
  },
  {
    variant: "broken",
    slug: "folder-cross-broken",
    Component: FolderCrossBroken,
    componentName: "FolderCrossBroken",
  },
  {
    variant: "bulk",
    slug: "folder-cross-bulk",
    Component: FolderCrossBulk,
    componentName: "FolderCrossBulk",
  },
  {
    variant: "linear",
    slug: "folder-cross-linear",
    Component: FolderCrossLinear,
    componentName: "FolderCrossLinear",
  },
  {
    variant: "outline",
    slug: "folder-cross-outline",
    Component: FolderCrossOutline,
    componentName: "FolderCrossOutline",
  },
  {
    variant: "twotone",
    slug: "folder-cross-twotone",
    Component: FolderCrossTwotone,
    componentName: "FolderCrossTwotone",
  },
];
