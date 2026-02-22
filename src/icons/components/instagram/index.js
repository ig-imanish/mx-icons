import InstagramBold from "./InstagramBold";
import InstagramBroken from "./InstagramBroken";
import InstagramBulk from "./InstagramBulk";
import InstagramLinear from "./InstagramLinear";
import InstagramOutline from "./InstagramOutline";
import InstagramTwotone from "./InstagramTwotone";

export { InstagramBold, InstagramBroken, InstagramBulk, InstagramLinear, InstagramOutline, InstagramTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "instagram-bold",
    Component: InstagramBold,
    componentName: "InstagramBold",
  },
  {
    variant: "broken",
    slug: "instagram-broken",
    Component: InstagramBroken,
    componentName: "InstagramBroken",
  },
  {
    variant: "bulk",
    slug: "instagram-bulk",
    Component: InstagramBulk,
    componentName: "InstagramBulk",
  },
  {
    variant: "linear",
    slug: "instagram-linear",
    Component: InstagramLinear,
    componentName: "InstagramLinear",
  },
  {
    variant: "outline",
    slug: "instagram-outline",
    Component: InstagramOutline,
    componentName: "InstagramOutline",
  },
  {
    variant: "twotone",
    slug: "instagram-twotone",
    Component: InstagramTwotone,
    componentName: "InstagramTwotone",
  },
];
