import BucketBold from "./BucketBold";
import BucketBroken from "./BucketBroken";
import BucketBulk from "./BucketBulk";
import BucketOutline from "./BucketOutline";
import BucketTwotone from "./BucketTwotone";

export { BucketBold, BucketBroken, BucketBulk, BucketOutline, BucketTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bucket-bold",
    Component: BucketBold,
    componentName: "BucketBold",
  },
  {
    variant: "broken",
    slug: "bucket-broken",
    Component: BucketBroken,
    componentName: "BucketBroken",
  },
  {
    variant: "bulk",
    slug: "bucket-bulk",
    Component: BucketBulk,
    componentName: "BucketBulk",
  },
  {
    variant: "outline",
    slug: "bucket-outline",
    Component: BucketOutline,
    componentName: "BucketOutline",
  },
  {
    variant: "twotone",
    slug: "bucket-twotone",
    Component: BucketTwotone,
    componentName: "BucketTwotone",
  },
];
