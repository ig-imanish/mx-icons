import PaintbucketBold from "./PaintbucketBold";
import PaintbucketBroken from "./PaintbucketBroken";
import PaintbucketBulk from "./PaintbucketBulk";
import PaintbucketLinear from "./PaintbucketLinear";
import PaintbucketOutline from "./PaintbucketOutline";
import PaintbucketTwotone from "./PaintbucketTwotone";

export { PaintbucketBold, PaintbucketBroken, PaintbucketBulk, PaintbucketLinear, PaintbucketOutline, PaintbucketTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "paintbucket-bold",
    Component: PaintbucketBold,
    componentName: "PaintbucketBold",
  },
  {
    variant: "broken",
    slug: "paintbucket-broken",
    Component: PaintbucketBroken,
    componentName: "PaintbucketBroken",
  },
  {
    variant: "bulk",
    slug: "paintbucket-bulk",
    Component: PaintbucketBulk,
    componentName: "PaintbucketBulk",
  },
  {
    variant: "linear",
    slug: "paintbucket-linear",
    Component: PaintbucketLinear,
    componentName: "PaintbucketLinear",
  },
  {
    variant: "outline",
    slug: "paintbucket-outline",
    Component: PaintbucketOutline,
    componentName: "PaintbucketOutline",
  },
  {
    variant: "twotone",
    slug: "paintbucket-twotone",
    Component: PaintbucketTwotone,
    componentName: "PaintbucketTwotone",
  },
];
