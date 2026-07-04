import FolderErrorBold from "./FolderErrorBold";
import FolderErrorBroken from "./FolderErrorBroken";
import FolderErrorBulk from "./FolderErrorBulk";
import FolderErrorLinear from "./FolderErrorLinear";
import FolderErrorOutline from "./FolderErrorOutline";
import FolderErrorTwotone from "./FolderErrorTwotone";

export { FolderErrorBold, FolderErrorBroken, FolderErrorBulk, FolderErrorLinear, FolderErrorOutline, FolderErrorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-error-bold",
    Component: FolderErrorBold,
    componentName: "FolderErrorBold",
  },,
  {
    variant: "broken",
    slug: "folder-error-broken",
    Component: FolderErrorBroken,
    componentName: "FolderErrorBroken",
  },,
  {
    variant: "bulk",
    slug: "folder-error-bulk",
    Component: FolderErrorBulk,
    componentName: "FolderErrorBulk",
  },,
  {
    variant: "linear",
    slug: "folder-error-linear",
    Component: FolderErrorLinear,
    componentName: "FolderErrorLinear",
  },,
  {
    variant: "outline",
    slug: "folder-error-outline",
    Component: FolderErrorOutline,
    componentName: "FolderErrorOutline",
  },,
  {
    variant: "twotone",
    slug: "folder-error-twotone",
    Component: FolderErrorTwotone,
    componentName: "FolderErrorTwotone",
  }
];

export default { FolderErrorBold, FolderErrorBroken, FolderErrorBulk, FolderErrorLinear, FolderErrorOutline, FolderErrorTwotone };
