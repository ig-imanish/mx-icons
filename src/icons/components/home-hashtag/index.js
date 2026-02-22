import HomeHashtagBold from "./HomeHashtagBold";
import HomeHashtagBroken from "./HomeHashtagBroken";
import HomeHashtagBulk from "./HomeHashtagBulk";
import HomeHashtagLinear from "./HomeHashtagLinear";
import HomeHashtagOutline from "./HomeHashtagOutline";
import HomeHashtagTwotone from "./HomeHashtagTwotone";

export { HomeHashtagBold, HomeHashtagBroken, HomeHashtagBulk, HomeHashtagLinear, HomeHashtagOutline, HomeHashtagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-hashtag-bold",
    Component: HomeHashtagBold,
    componentName: "HomeHashtagBold",
  },
  {
    variant: "broken",
    slug: "home-hashtag-broken",
    Component: HomeHashtagBroken,
    componentName: "HomeHashtagBroken",
  },
  {
    variant: "bulk",
    slug: "home-hashtag-bulk",
    Component: HomeHashtagBulk,
    componentName: "HomeHashtagBulk",
  },
  {
    variant: "linear",
    slug: "home-hashtag-linear",
    Component: HomeHashtagLinear,
    componentName: "HomeHashtagLinear",
  },
  {
    variant: "outline",
    slug: "home-hashtag-outline",
    Component: HomeHashtagOutline,
    componentName: "HomeHashtagOutline",
  },
  {
    variant: "twotone",
    slug: "home-hashtag-twotone",
    Component: HomeHashtagTwotone,
    componentName: "HomeHashtagTwotone",
  },
];
