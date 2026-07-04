import ScreenShareBold from "./ScreenShareBold";
import ScreenShareBroken from "./ScreenShareBroken";
import ScreenShareBulk from "./ScreenShareBulk";
import ScreenShareLinear from "./ScreenShareLinear";
import ScreenShareOutline from "./ScreenShareOutline";
import ScreenShareTwotone from "./ScreenShareTwotone";

export { ScreenShareBold, ScreenShareBroken, ScreenShareBulk, ScreenShareLinear, ScreenShareOutline, ScreenShareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "screen-share-bold",
    Component: ScreenShareBold,
    componentName: "ScreenShareBold",
  },,
  {
    variant: "broken",
    slug: "screen-share-broken",
    Component: ScreenShareBroken,
    componentName: "ScreenShareBroken",
  },,
  {
    variant: "bulk",
    slug: "screen-share-bulk",
    Component: ScreenShareBulk,
    componentName: "ScreenShareBulk",
  },,
  {
    variant: "linear",
    slug: "screen-share-linear",
    Component: ScreenShareLinear,
    componentName: "ScreenShareLinear",
  },,
  {
    variant: "outline",
    slug: "screen-share-outline",
    Component: ScreenShareOutline,
    componentName: "ScreenShareOutline",
  },,
  {
    variant: "twotone",
    slug: "screen-share-twotone",
    Component: ScreenShareTwotone,
    componentName: "ScreenShareTwotone",
  }
];

export default { ScreenShareBold, ScreenShareBroken, ScreenShareBulk, ScreenShareLinear, ScreenShareOutline, ScreenShareTwotone };
