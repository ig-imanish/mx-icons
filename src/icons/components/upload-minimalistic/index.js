import UploadMinimalisticBold from "./UploadMinimalisticBold";
import UploadMinimalisticBroken from "./UploadMinimalisticBroken";
import UploadMinimalisticBulk from "./UploadMinimalisticBulk";
import UploadMinimalisticLinear from "./UploadMinimalisticLinear";
import UploadMinimalisticOutline from "./UploadMinimalisticOutline";
import UploadMinimalisticTwotone from "./UploadMinimalisticTwotone";

export { UploadMinimalisticBold, UploadMinimalisticBroken, UploadMinimalisticBulk, UploadMinimalisticLinear, UploadMinimalisticOutline, UploadMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "upload-minimalistic-bold",
    Component: UploadMinimalisticBold,
    componentName: "UploadMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "upload-minimalistic-broken",
    Component: UploadMinimalisticBroken,
    componentName: "UploadMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "upload-minimalistic-bulk",
    Component: UploadMinimalisticBulk,
    componentName: "UploadMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "upload-minimalistic-linear",
    Component: UploadMinimalisticLinear,
    componentName: "UploadMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "upload-minimalistic-outline",
    Component: UploadMinimalisticOutline,
    componentName: "UploadMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "upload-minimalistic-twotone",
    Component: UploadMinimalisticTwotone,
    componentName: "UploadMinimalisticTwotone",
  }
];

export default { UploadMinimalisticBold, UploadMinimalisticBroken, UploadMinimalisticBulk, UploadMinimalisticLinear, UploadMinimalisticOutline, UploadMinimalisticTwotone };
