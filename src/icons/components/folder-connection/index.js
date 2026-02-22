import FolderConnectionBold from "./FolderConnectionBold";
import FolderConnectionBroken from "./FolderConnectionBroken";
import FolderConnectionBulk from "./FolderConnectionBulk";
import FolderConnectionLinear from "./FolderConnectionLinear";
import FolderConnectionOutline from "./FolderConnectionOutline";
import FolderConnectionTwotone from "./FolderConnectionTwotone";

export { FolderConnectionBold, FolderConnectionBroken, FolderConnectionBulk, FolderConnectionLinear, FolderConnectionOutline, FolderConnectionTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-connection-bold",
    Component: FolderConnectionBold,
    componentName: "FolderConnectionBold",
  },
  {
    variant: "broken",
    slug: "folder-connection-broken",
    Component: FolderConnectionBroken,
    componentName: "FolderConnectionBroken",
  },
  {
    variant: "bulk",
    slug: "folder-connection-bulk",
    Component: FolderConnectionBulk,
    componentName: "FolderConnectionBulk",
  },
  {
    variant: "linear",
    slug: "folder-connection-linear",
    Component: FolderConnectionLinear,
    componentName: "FolderConnectionLinear",
  },
  {
    variant: "outline",
    slug: "folder-connection-outline",
    Component: FolderConnectionOutline,
    componentName: "FolderConnectionOutline",
  },
  {
    variant: "twotone",
    slug: "folder-connection-twotone",
    Component: FolderConnectionTwotone,
    componentName: "FolderConnectionTwotone",
  },
];
