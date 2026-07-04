import FeedBold from "./FeedBold";
import FeedBroken from "./FeedBroken";
import FeedBulk from "./FeedBulk";
import FeedLinear from "./FeedLinear";
import FeedOutline from "./FeedOutline";
import FeedTwotone from "./FeedTwotone";

export { FeedBold, FeedBroken, FeedBulk, FeedLinear, FeedOutline, FeedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "feed-bold",
    Component: FeedBold,
    componentName: "FeedBold",
  },,
  {
    variant: "broken",
    slug: "feed-broken",
    Component: FeedBroken,
    componentName: "FeedBroken",
  },,
  {
    variant: "bulk",
    slug: "feed-bulk",
    Component: FeedBulk,
    componentName: "FeedBulk",
  },,
  {
    variant: "linear",
    slug: "feed-linear",
    Component: FeedLinear,
    componentName: "FeedLinear",
  },,
  {
    variant: "outline",
    slug: "feed-outline",
    Component: FeedOutline,
    componentName: "FeedOutline",
  },,
  {
    variant: "twotone",
    slug: "feed-twotone",
    Component: FeedTwotone,
    componentName: "FeedTwotone",
  }
];

export default { FeedBold, FeedBroken, FeedBulk, FeedLinear, FeedOutline, FeedTwotone };
