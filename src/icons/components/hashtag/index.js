import HashtagBold from "./HashtagBold";
import HashtagBroken from "./HashtagBroken";
import HashtagBulk from "./HashtagBulk";
import HashtagLinear from "./HashtagLinear";
import HashtagOutline from "./HashtagOutline";
import HashtagTwotone from "./HashtagTwotone";

export { HashtagBold, HashtagBroken, HashtagBulk, HashtagLinear, HashtagOutline, HashtagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hashtag-bold",
    Component: HashtagBold,
    componentName: "HashtagBold",
  },
  {
    variant: "broken",
    slug: "hashtag-broken",
    Component: HashtagBroken,
    componentName: "HashtagBroken",
  },
  {
    variant: "bulk",
    slug: "hashtag-bulk",
    Component: HashtagBulk,
    componentName: "HashtagBulk",
  },
  {
    variant: "linear",
    slug: "hashtag-linear",
    Component: HashtagLinear,
    componentName: "HashtagLinear",
  },
  {
    variant: "outline",
    slug: "hashtag-outline",
    Component: HashtagOutline,
    componentName: "HashtagOutline",
  },
  {
    variant: "twotone",
    slug: "hashtag-twotone",
    Component: HashtagTwotone,
    componentName: "HashtagTwotone",
  },
];
