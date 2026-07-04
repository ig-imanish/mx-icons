import MirrorLeftBold from "./MirrorLeftBold";
import MirrorLeftBroken from "./MirrorLeftBroken";
import MirrorLeftBulk from "./MirrorLeftBulk";
import MirrorLeftLinear from "./MirrorLeftLinear";
import MirrorLeftOutline from "./MirrorLeftOutline";
import MirrorLeftTwotone from "./MirrorLeftTwotone";

export { MirrorLeftBold, MirrorLeftBroken, MirrorLeftBulk, MirrorLeftLinear, MirrorLeftOutline, MirrorLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mirror-left-bold",
    Component: MirrorLeftBold,
    componentName: "MirrorLeftBold",
  },,
  {
    variant: "broken",
    slug: "mirror-left-broken",
    Component: MirrorLeftBroken,
    componentName: "MirrorLeftBroken",
  },,
  {
    variant: "bulk",
    slug: "mirror-left-bulk",
    Component: MirrorLeftBulk,
    componentName: "MirrorLeftBulk",
  },,
  {
    variant: "linear",
    slug: "mirror-left-linear",
    Component: MirrorLeftLinear,
    componentName: "MirrorLeftLinear",
  },,
  {
    variant: "outline",
    slug: "mirror-left-outline",
    Component: MirrorLeftOutline,
    componentName: "MirrorLeftOutline",
  },,
  {
    variant: "twotone",
    slug: "mirror-left-twotone",
    Component: MirrorLeftTwotone,
    componentName: "MirrorLeftTwotone",
  }
];

export default { MirrorLeftBold, MirrorLeftBroken, MirrorLeftBulk, MirrorLeftLinear, MirrorLeftOutline, MirrorLeftTwotone };
