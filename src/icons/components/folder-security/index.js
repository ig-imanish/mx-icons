import FolderSecurityBold from "./FolderSecurityBold";
import FolderSecurityBroken from "./FolderSecurityBroken";
import FolderSecurityBulk from "./FolderSecurityBulk";
import FolderSecurityLinear from "./FolderSecurityLinear";
import FolderSecurityOutline from "./FolderSecurityOutline";
import FolderSecurityTwotone from "./FolderSecurityTwotone";

export { FolderSecurityBold, FolderSecurityBroken, FolderSecurityBulk, FolderSecurityLinear, FolderSecurityOutline, FolderSecurityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-security-bold",
    Component: FolderSecurityBold,
    componentName: "FolderSecurityBold",
  },,
  {
    variant: "broken",
    slug: "folder-security-broken",
    Component: FolderSecurityBroken,
    componentName: "FolderSecurityBroken",
  },,
  {
    variant: "bulk",
    slug: "folder-security-bulk",
    Component: FolderSecurityBulk,
    componentName: "FolderSecurityBulk",
  },,
  {
    variant: "linear",
    slug: "folder-security-linear",
    Component: FolderSecurityLinear,
    componentName: "FolderSecurityLinear",
  },,
  {
    variant: "outline",
    slug: "folder-security-outline",
    Component: FolderSecurityOutline,
    componentName: "FolderSecurityOutline",
  },,
  {
    variant: "twotone",
    slug: "folder-security-twotone",
    Component: FolderSecurityTwotone,
    componentName: "FolderSecurityTwotone",
  }
];

export default { FolderSecurityBold, FolderSecurityBroken, FolderSecurityBulk, FolderSecurityLinear, FolderSecurityOutline, FolderSecurityTwotone };
