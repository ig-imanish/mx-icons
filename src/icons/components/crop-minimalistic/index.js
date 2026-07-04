import CropMinimalisticBold from "./CropMinimalisticBold";
import CropMinimalisticBroken from "./CropMinimalisticBroken";
import CropMinimalisticBulk from "./CropMinimalisticBulk";
import CropMinimalisticLinear from "./CropMinimalisticLinear";
import CropMinimalisticOutline from "./CropMinimalisticOutline";
import CropMinimalisticTwotone from "./CropMinimalisticTwotone";

export { CropMinimalisticBold, CropMinimalisticBroken, CropMinimalisticBulk, CropMinimalisticLinear, CropMinimalisticOutline, CropMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "crop-minimalistic-bold",
    Component: CropMinimalisticBold,
    componentName: "CropMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "crop-minimalistic-broken",
    Component: CropMinimalisticBroken,
    componentName: "CropMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "crop-minimalistic-bulk",
    Component: CropMinimalisticBulk,
    componentName: "CropMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "crop-minimalistic-linear",
    Component: CropMinimalisticLinear,
    componentName: "CropMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "crop-minimalistic-outline",
    Component: CropMinimalisticOutline,
    componentName: "CropMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "crop-minimalistic-twotone",
    Component: CropMinimalisticTwotone,
    componentName: "CropMinimalisticTwotone",
  }
];

export default { CropMinimalisticBold, CropMinimalisticBroken, CropMinimalisticBulk, CropMinimalisticLinear, CropMinimalisticOutline, CropMinimalisticTwotone };
