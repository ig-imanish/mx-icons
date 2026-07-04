import ScreencastBold from "./ScreencastBold";
import ScreencastBroken from "./ScreencastBroken";
import ScreencastBulk from "./ScreencastBulk";
import ScreencastLinear from "./ScreencastLinear";
import ScreencastOutline from "./ScreencastOutline";
import ScreencastTwotone from "./ScreencastTwotone";

export { ScreencastBold, ScreencastBroken, ScreencastBulk, ScreencastLinear, ScreencastOutline, ScreencastTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "screencast-bold",
    Component: ScreencastBold,
    componentName: "ScreencastBold",
  },,
  {
    variant: "broken",
    slug: "screencast-broken",
    Component: ScreencastBroken,
    componentName: "ScreencastBroken",
  },,
  {
    variant: "bulk",
    slug: "screencast-bulk",
    Component: ScreencastBulk,
    componentName: "ScreencastBulk",
  },,
  {
    variant: "linear",
    slug: "screencast-linear",
    Component: ScreencastLinear,
    componentName: "ScreencastLinear",
  },,
  {
    variant: "outline",
    slug: "screencast-outline",
    Component: ScreencastOutline,
    componentName: "ScreencastOutline",
  },,
  {
    variant: "twotone",
    slug: "screencast-twotone",
    Component: ScreencastTwotone,
    componentName: "ScreencastTwotone",
  }
];

export default { ScreencastBold, ScreencastBroken, ScreencastBulk, ScreencastLinear, ScreencastOutline, ScreencastTwotone };
