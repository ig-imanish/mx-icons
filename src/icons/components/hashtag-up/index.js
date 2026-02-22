import HashtagUpBold from "./HashtagUpBold";
import HashtagUpBroken from "./HashtagUpBroken";
import HashtagUpBulk from "./HashtagUpBulk";
import HashtagUpLinear from "./HashtagUpLinear";
import HashtagUpOutline from "./HashtagUpOutline";
import HashtagUpTwotone from "./HashtagUpTwotone";

export { HashtagUpBold, HashtagUpBroken, HashtagUpBulk, HashtagUpLinear, HashtagUpOutline, HashtagUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hashtag-up-bold",
    Component: HashtagUpBold,
    componentName: "HashtagUpBold",
  },
  {
    variant: "broken",
    slug: "hashtag-up-broken",
    Component: HashtagUpBroken,
    componentName: "HashtagUpBroken",
  },
  {
    variant: "bulk",
    slug: "hashtag-up-bulk",
    Component: HashtagUpBulk,
    componentName: "HashtagUpBulk",
  },
  {
    variant: "linear",
    slug: "hashtag-up-linear",
    Component: HashtagUpLinear,
    componentName: "HashtagUpLinear",
  },
  {
    variant: "outline",
    slug: "hashtag-up-outline",
    Component: HashtagUpOutline,
    componentName: "HashtagUpOutline",
  },
  {
    variant: "twotone",
    slug: "hashtag-up-twotone",
    Component: HashtagUpTwotone,
    componentName: "HashtagUpTwotone",
  },
];
