import HomeMirrorBold from "./HomeMirrorBold";
import HomeMirrorBroken from "./HomeMirrorBroken";
import HomeMirrorBulk from "./HomeMirrorBulk";
import HomeMirrorLinear from "./HomeMirrorLinear";
import HomeMirrorOutline from "./HomeMirrorOutline";
import HomeMirrorTwotone from "./HomeMirrorTwotone";

export { HomeMirrorBold, HomeMirrorBroken, HomeMirrorBulk, HomeMirrorLinear, HomeMirrorOutline, HomeMirrorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-mirror-bold",
    Component: HomeMirrorBold,
    componentName: "HomeMirrorBold",
  },,
  {
    variant: "broken",
    slug: "home-mirror-broken",
    Component: HomeMirrorBroken,
    componentName: "HomeMirrorBroken",
  },,
  {
    variant: "bulk",
    slug: "home-mirror-bulk",
    Component: HomeMirrorBulk,
    componentName: "HomeMirrorBulk",
  },,
  {
    variant: "linear",
    slug: "home-mirror-linear",
    Component: HomeMirrorLinear,
    componentName: "HomeMirrorLinear",
  },,
  {
    variant: "outline",
    slug: "home-mirror-outline",
    Component: HomeMirrorOutline,
    componentName: "HomeMirrorOutline",
  },,
  {
    variant: "twotone",
    slug: "home-mirror-twotone",
    Component: HomeMirrorTwotone,
    componentName: "HomeMirrorTwotone",
  }
];

export default { HomeMirrorBold, HomeMirrorBroken, HomeMirrorBulk, HomeMirrorLinear, HomeMirrorOutline, HomeMirrorTwotone };
