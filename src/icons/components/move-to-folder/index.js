import MoveToFolderBold from "./MoveToFolderBold";
import MoveToFolderBroken from "./MoveToFolderBroken";
import MoveToFolderBulk from "./MoveToFolderBulk";
import MoveToFolderLinear from "./MoveToFolderLinear";
import MoveToFolderOutline from "./MoveToFolderOutline";
import MoveToFolderTwotone from "./MoveToFolderTwotone";

export { MoveToFolderBold, MoveToFolderBroken, MoveToFolderBulk, MoveToFolderLinear, MoveToFolderOutline, MoveToFolderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "move-to-folder-bold",
    Component: MoveToFolderBold,
    componentName: "MoveToFolderBold",
  },,
  {
    variant: "broken",
    slug: "move-to-folder-broken",
    Component: MoveToFolderBroken,
    componentName: "MoveToFolderBroken",
  },,
  {
    variant: "bulk",
    slug: "move-to-folder-bulk",
    Component: MoveToFolderBulk,
    componentName: "MoveToFolderBulk",
  },,
  {
    variant: "linear",
    slug: "move-to-folder-linear",
    Component: MoveToFolderLinear,
    componentName: "MoveToFolderLinear",
  },,
  {
    variant: "outline",
    slug: "move-to-folder-outline",
    Component: MoveToFolderOutline,
    componentName: "MoveToFolderOutline",
  },,
  {
    variant: "twotone",
    slug: "move-to-folder-twotone",
    Component: MoveToFolderTwotone,
    componentName: "MoveToFolderTwotone",
  }
];

export default { MoveToFolderBold, MoveToFolderBroken, MoveToFolderBulk, MoveToFolderLinear, MoveToFolderOutline, MoveToFolderTwotone };
