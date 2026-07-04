import FullScreenBold from "./FullScreenBold";
import FullScreenBroken from "./FullScreenBroken";
import FullScreenBulk from "./FullScreenBulk";
import FullScreenLinear from "./FullScreenLinear";
import FullScreenOutline from "./FullScreenOutline";
import FullScreenTwotone from "./FullScreenTwotone";

export { FullScreenBold, FullScreenBroken, FullScreenBulk, FullScreenLinear, FullScreenOutline, FullScreenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "full-screen-bold",
    Component: FullScreenBold,
    componentName: "FullScreenBold",
  },,
  {
    variant: "broken",
    slug: "full-screen-broken",
    Component: FullScreenBroken,
    componentName: "FullScreenBroken",
  },,
  {
    variant: "bulk",
    slug: "full-screen-bulk",
    Component: FullScreenBulk,
    componentName: "FullScreenBulk",
  },,
  {
    variant: "linear",
    slug: "full-screen-linear",
    Component: FullScreenLinear,
    componentName: "FullScreenLinear",
  },,
  {
    variant: "outline",
    slug: "full-screen-outline",
    Component: FullScreenOutline,
    componentName: "FullScreenOutline",
  },,
  {
    variant: "twotone",
    slug: "full-screen-twotone",
    Component: FullScreenTwotone,
    componentName: "FullScreenTwotone",
  }
];

export default { FullScreenBold, FullScreenBroken, FullScreenBulk, FullScreenLinear, FullScreenOutline, FullScreenTwotone };
