import UploadSquareBold from "./UploadSquareBold";
import UploadSquareBroken from "./UploadSquareBroken";
import UploadSquareBulk from "./UploadSquareBulk";
import UploadSquareLinear from "./UploadSquareLinear";
import UploadSquareOutline from "./UploadSquareOutline";
import UploadSquareTwotone from "./UploadSquareTwotone";

export { UploadSquareBold, UploadSquareBroken, UploadSquareBulk, UploadSquareLinear, UploadSquareOutline, UploadSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "upload-square-bold",
    Component: UploadSquareBold,
    componentName: "UploadSquareBold",
  },,
  {
    variant: "broken",
    slug: "upload-square-broken",
    Component: UploadSquareBroken,
    componentName: "UploadSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "upload-square-bulk",
    Component: UploadSquareBulk,
    componentName: "UploadSquareBulk",
  },,
  {
    variant: "linear",
    slug: "upload-square-linear",
    Component: UploadSquareLinear,
    componentName: "UploadSquareLinear",
  },,
  {
    variant: "outline",
    slug: "upload-square-outline",
    Component: UploadSquareOutline,
    componentName: "UploadSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "upload-square-twotone",
    Component: UploadSquareTwotone,
    componentName: "UploadSquareTwotone",
  }
];

export default { UploadSquareBold, UploadSquareBroken, UploadSquareBulk, UploadSquareLinear, UploadSquareOutline, UploadSquareTwotone };
