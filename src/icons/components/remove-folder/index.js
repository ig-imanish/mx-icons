import RemoveFolderBold from "./RemoveFolderBold";
import RemoveFolderBroken from "./RemoveFolderBroken";
import RemoveFolderBulk from "./RemoveFolderBulk";
import RemoveFolderLinear from "./RemoveFolderLinear";
import RemoveFolderOutline from "./RemoveFolderOutline";
import RemoveFolderTwotone from "./RemoveFolderTwotone";

export { RemoveFolderBold, RemoveFolderBroken, RemoveFolderBulk, RemoveFolderLinear, RemoveFolderOutline, RemoveFolderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "remove-folder-bold",
    Component: RemoveFolderBold,
    componentName: "RemoveFolderBold",
  },,
  {
    variant: "broken",
    slug: "remove-folder-broken",
    Component: RemoveFolderBroken,
    componentName: "RemoveFolderBroken",
  },,
  {
    variant: "bulk",
    slug: "remove-folder-bulk",
    Component: RemoveFolderBulk,
    componentName: "RemoveFolderBulk",
  },,
  {
    variant: "linear",
    slug: "remove-folder-linear",
    Component: RemoveFolderLinear,
    componentName: "RemoveFolderLinear",
  },,
  {
    variant: "outline",
    slug: "remove-folder-outline",
    Component: RemoveFolderOutline,
    componentName: "RemoveFolderOutline",
  },,
  {
    variant: "twotone",
    slug: "remove-folder-twotone",
    Component: RemoveFolderTwotone,
    componentName: "RemoveFolderTwotone",
  }
];

export default { RemoveFolderBold, RemoveFolderBroken, RemoveFolderBulk, RemoveFolderLinear, RemoveFolderOutline, RemoveFolderTwotone };
