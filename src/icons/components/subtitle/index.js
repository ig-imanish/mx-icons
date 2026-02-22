import SubtitleBold from "./SubtitleBold";
import SubtitleBroken from "./SubtitleBroken";
import SubtitleBulk from "./SubtitleBulk";
import SubtitleLinear from "./SubtitleLinear";
import SubtitleOutline from "./SubtitleOutline";
import SubtitleTwotone from "./SubtitleTwotone";

export { SubtitleBold, SubtitleBroken, SubtitleBulk, SubtitleLinear, SubtitleOutline, SubtitleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "subtitle-bold",
    Component: SubtitleBold,
    componentName: "SubtitleBold",
  },
  {
    variant: "broken",
    slug: "subtitle-broken",
    Component: SubtitleBroken,
    componentName: "SubtitleBroken",
  },
  {
    variant: "bulk",
    slug: "subtitle-bulk",
    Component: SubtitleBulk,
    componentName: "SubtitleBulk",
  },
  {
    variant: "linear",
    slug: "subtitle-linear",
    Component: SubtitleLinear,
    componentName: "SubtitleLinear",
  },
  {
    variant: "outline",
    slug: "subtitle-outline",
    Component: SubtitleOutline,
    componentName: "SubtitleOutline",
  },
  {
    variant: "twotone",
    slug: "subtitle-twotone",
    Component: SubtitleTwotone,
    componentName: "SubtitleTwotone",
  },
];
