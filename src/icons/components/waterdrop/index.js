import WaterdropBold from "./WaterdropBold";
import WaterdropBroken from "./WaterdropBroken";
import WaterdropBulk from "./WaterdropBulk";
import WaterdropLinear from "./WaterdropLinear";
import WaterdropOutline from "./WaterdropOutline";
import WaterdropTwotone from "./WaterdropTwotone";

export { WaterdropBold, WaterdropBroken, WaterdropBulk, WaterdropLinear, WaterdropOutline, WaterdropTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "waterdrop-bold",
    Component: WaterdropBold,
    componentName: "WaterdropBold",
  },,
  {
    variant: "broken",
    slug: "waterdrop-broken",
    Component: WaterdropBroken,
    componentName: "WaterdropBroken",
  },,
  {
    variant: "bulk",
    slug: "waterdrop-bulk",
    Component: WaterdropBulk,
    componentName: "WaterdropBulk",
  },,
  {
    variant: "linear",
    slug: "waterdrop-linear",
    Component: WaterdropLinear,
    componentName: "WaterdropLinear",
  },,
  {
    variant: "outline",
    slug: "waterdrop-outline",
    Component: WaterdropOutline,
    componentName: "WaterdropOutline",
  },,
  {
    variant: "twotone",
    slug: "waterdrop-twotone",
    Component: WaterdropTwotone,
    componentName: "WaterdropTwotone",
  }
];

export default { WaterdropBold, WaterdropBroken, WaterdropBulk, WaterdropLinear, WaterdropOutline, WaterdropTwotone };
