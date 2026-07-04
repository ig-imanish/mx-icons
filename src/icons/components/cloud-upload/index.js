import CloudUploadBold from "./CloudUploadBold";
import CloudUploadBroken from "./CloudUploadBroken";
import CloudUploadBulk from "./CloudUploadBulk";
import CloudUploadLinear from "./CloudUploadLinear";
import CloudUploadOutline from "./CloudUploadOutline";
import CloudUploadTwotone from "./CloudUploadTwotone";

export { CloudUploadBold, CloudUploadBroken, CloudUploadBulk, CloudUploadLinear, CloudUploadOutline, CloudUploadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-upload-bold",
    Component: CloudUploadBold,
    componentName: "CloudUploadBold",
  },,
  {
    variant: "broken",
    slug: "cloud-upload-broken",
    Component: CloudUploadBroken,
    componentName: "CloudUploadBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-upload-bulk",
    Component: CloudUploadBulk,
    componentName: "CloudUploadBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-upload-linear",
    Component: CloudUploadLinear,
    componentName: "CloudUploadLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-upload-outline",
    Component: CloudUploadOutline,
    componentName: "CloudUploadOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-upload-twotone",
    Component: CloudUploadTwotone,
    componentName: "CloudUploadTwotone",
  }
];

export default { CloudUploadBold, CloudUploadBroken, CloudUploadBulk, CloudUploadLinear, CloudUploadOutline, CloudUploadTwotone };
