import UploadBold from "./UploadBold";
import UploadBroken from "./UploadBroken";
import UploadBulk from "./UploadBulk";
import UploadLinear from "./UploadLinear";
import UploadOutline from "./UploadOutline";
import UploadTwotone from "./UploadTwotone";

export { UploadBold, UploadBroken, UploadBulk, UploadLinear, UploadOutline, UploadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "upload-bold",
    Component: UploadBold,
    componentName: "UploadBold",
  },,
  {
    variant: "broken",
    slug: "upload-broken",
    Component: UploadBroken,
    componentName: "UploadBroken",
  },,
  {
    variant: "bulk",
    slug: "upload-bulk",
    Component: UploadBulk,
    componentName: "UploadBulk",
  },,
  {
    variant: "linear",
    slug: "upload-linear",
    Component: UploadLinear,
    componentName: "UploadLinear",
  },,
  {
    variant: "outline",
    slug: "upload-outline",
    Component: UploadOutline,
    componentName: "UploadOutline",
  },,
  {
    variant: "twotone",
    slug: "upload-twotone",
    Component: UploadTwotone,
    componentName: "UploadTwotone",
  }
];

export default { UploadBold, UploadBroken, UploadBulk, UploadLinear, UploadOutline, UploadTwotone };
