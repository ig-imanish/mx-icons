import HashtagDownBold from "./HashtagDownBold";
import HashtagDownBroken from "./HashtagDownBroken";
import HashtagDownBulk from "./HashtagDownBulk";
import HashtagDownLinear from "./HashtagDownLinear";
import HashtagDownOutline from "./HashtagDownOutline";
import HashtagDownTwotone from "./HashtagDownTwotone";

export { HashtagDownBold, HashtagDownBroken, HashtagDownBulk, HashtagDownLinear, HashtagDownOutline, HashtagDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hashtag-down-bold",
    Component: HashtagDownBold,
    componentName: "HashtagDownBold",
  },
  {
    variant: "broken",
    slug: "hashtag-down-broken",
    Component: HashtagDownBroken,
    componentName: "HashtagDownBroken",
  },
  {
    variant: "bulk",
    slug: "hashtag-down-bulk",
    Component: HashtagDownBulk,
    componentName: "HashtagDownBulk",
  },
  {
    variant: "linear",
    slug: "hashtag-down-linear",
    Component: HashtagDownLinear,
    componentName: "HashtagDownLinear",
  },
  {
    variant: "outline",
    slug: "hashtag-down-outline",
    Component: HashtagDownOutline,
    componentName: "HashtagDownOutline",
  },
  {
    variant: "twotone",
    slug: "hashtag-down-twotone",
    Component: HashtagDownTwotone,
    componentName: "HashtagDownTwotone",
  },
];
