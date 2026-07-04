import FlashlightBold from "./FlashlightBold";
import FlashlightBroken from "./FlashlightBroken";
import FlashlightBulk from "./FlashlightBulk";
import FlashlightLinear from "./FlashlightLinear";
import FlashlightOutline from "./FlashlightOutline";
import FlashlightTwotone from "./FlashlightTwotone";

export { FlashlightBold, FlashlightBroken, FlashlightBulk, FlashlightLinear, FlashlightOutline, FlashlightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flashlight-bold",
    Component: FlashlightBold,
    componentName: "FlashlightBold",
  },,
  {
    variant: "broken",
    slug: "flashlight-broken",
    Component: FlashlightBroken,
    componentName: "FlashlightBroken",
  },,
  {
    variant: "bulk",
    slug: "flashlight-bulk",
    Component: FlashlightBulk,
    componentName: "FlashlightBulk",
  },,
  {
    variant: "linear",
    slug: "flashlight-linear",
    Component: FlashlightLinear,
    componentName: "FlashlightLinear",
  },,
  {
    variant: "outline",
    slug: "flashlight-outline",
    Component: FlashlightOutline,
    componentName: "FlashlightOutline",
  },,
  {
    variant: "twotone",
    slug: "flashlight-twotone",
    Component: FlashlightTwotone,
    componentName: "FlashlightTwotone",
  }
];

export default { FlashlightBold, FlashlightBroken, FlashlightBulk, FlashlightLinear, FlashlightOutline, FlashlightTwotone };
