import CropBold from "./CropBold";
import CropBroken from "./CropBroken";
import CropBulk from "./CropBulk";
import CropLinear from "./CropLinear";
import CropOutline from "./CropOutline";
import CropTwotone from "./CropTwotone";

export { CropBold, CropBroken, CropBulk, CropLinear, CropOutline, CropTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "crop-bold",
    Component: CropBold,
    componentName: "CropBold",
  },
  {
    variant: "broken",
    slug: "crop-broken",
    Component: CropBroken,
    componentName: "CropBroken",
  },
  {
    variant: "bulk",
    slug: "crop-bulk",
    Component: CropBulk,
    componentName: "CropBulk",
  },
  {
    variant: "linear",
    slug: "crop-linear",
    Component: CropLinear,
    componentName: "CropLinear",
  },
  {
    variant: "outline",
    slug: "crop-outline",
    Component: CropOutline,
    componentName: "CropOutline",
  },
  {
    variant: "twotone",
    slug: "crop-twotone",
    Component: CropTwotone,
    componentName: "CropTwotone",
  },
];
