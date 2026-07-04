import AddFolderBold from "./AddFolderBold";
import AddFolderBroken from "./AddFolderBroken";
import AddFolderBulk from "./AddFolderBulk";
import AddFolderLinear from "./AddFolderLinear";
import AddFolderOutline from "./AddFolderOutline";
import AddFolderTwotone from "./AddFolderTwotone";

export { AddFolderBold, AddFolderBroken, AddFolderBulk, AddFolderLinear, AddFolderOutline, AddFolderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "add-folder-bold",
    Component: AddFolderBold,
    componentName: "AddFolderBold",
  },,
  {
    variant: "broken",
    slug: "add-folder-broken",
    Component: AddFolderBroken,
    componentName: "AddFolderBroken",
  },,
  {
    variant: "bulk",
    slug: "add-folder-bulk",
    Component: AddFolderBulk,
    componentName: "AddFolderBulk",
  },,
  {
    variant: "linear",
    slug: "add-folder-linear",
    Component: AddFolderLinear,
    componentName: "AddFolderLinear",
  },,
  {
    variant: "outline",
    slug: "add-folder-outline",
    Component: AddFolderOutline,
    componentName: "AddFolderOutline",
  },,
  {
    variant: "twotone",
    slug: "add-folder-twotone",
    Component: AddFolderTwotone,
    componentName: "AddFolderTwotone",
  }
];

export default { AddFolderBold, AddFolderBroken, AddFolderBulk, AddFolderLinear, AddFolderOutline, AddFolderTwotone };
