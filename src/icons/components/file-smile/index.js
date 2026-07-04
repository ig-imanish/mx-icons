import FileSmileBold from "./FileSmileBold";
import FileSmileBroken from "./FileSmileBroken";
import FileSmileBulk from "./FileSmileBulk";
import FileSmileLinear from "./FileSmileLinear";
import FileSmileOutline from "./FileSmileOutline";
import FileSmileTwotone from "./FileSmileTwotone";

export { FileSmileBold, FileSmileBroken, FileSmileBulk, FileSmileLinear, FileSmileOutline, FileSmileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-smile-bold",
    Component: FileSmileBold,
    componentName: "FileSmileBold",
  },,
  {
    variant: "broken",
    slug: "file-smile-broken",
    Component: FileSmileBroken,
    componentName: "FileSmileBroken",
  },,
  {
    variant: "bulk",
    slug: "file-smile-bulk",
    Component: FileSmileBulk,
    componentName: "FileSmileBulk",
  },,
  {
    variant: "linear",
    slug: "file-smile-linear",
    Component: FileSmileLinear,
    componentName: "FileSmileLinear",
  },,
  {
    variant: "outline",
    slug: "file-smile-outline",
    Component: FileSmileOutline,
    componentName: "FileSmileOutline",
  },,
  {
    variant: "twotone",
    slug: "file-smile-twotone",
    Component: FileSmileTwotone,
    componentName: "FileSmileTwotone",
  }
];

export default { FileSmileBold, FileSmileBroken, FileSmileBulk, FileSmileLinear, FileSmileOutline, FileSmileTwotone };
