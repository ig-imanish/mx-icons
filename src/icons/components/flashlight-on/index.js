import FlashlightOnBold from "./FlashlightOnBold";
import FlashlightOnBroken from "./FlashlightOnBroken";
import FlashlightOnBulk from "./FlashlightOnBulk";
import FlashlightOnLinear from "./FlashlightOnLinear";
import FlashlightOnOutline from "./FlashlightOnOutline";
import FlashlightOnTwotone from "./FlashlightOnTwotone";

export { FlashlightOnBold, FlashlightOnBroken, FlashlightOnBulk, FlashlightOnLinear, FlashlightOnOutline, FlashlightOnTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flashlight-on-bold",
    Component: FlashlightOnBold,
    componentName: "FlashlightOnBold",
  },,
  {
    variant: "broken",
    slug: "flashlight-on-broken",
    Component: FlashlightOnBroken,
    componentName: "FlashlightOnBroken",
  },,
  {
    variant: "bulk",
    slug: "flashlight-on-bulk",
    Component: FlashlightOnBulk,
    componentName: "FlashlightOnBulk",
  },,
  {
    variant: "linear",
    slug: "flashlight-on-linear",
    Component: FlashlightOnLinear,
    componentName: "FlashlightOnLinear",
  },,
  {
    variant: "outline",
    slug: "flashlight-on-outline",
    Component: FlashlightOnOutline,
    componentName: "FlashlightOnOutline",
  },,
  {
    variant: "twotone",
    slug: "flashlight-on-twotone",
    Component: FlashlightOnTwotone,
    componentName: "FlashlightOnTwotone",
  }
];

export default { FlashlightOnBold, FlashlightOnBroken, FlashlightOnBulk, FlashlightOnLinear, FlashlightOnOutline, FlashlightOnTwotone };
