import HeartAddBold from "./HeartAddBold";
import HeartAddBroken from "./HeartAddBroken";
import HeartAddBulk from "./HeartAddBulk";
import HeartAddLinear from "./HeartAddLinear";
import HeartAddOutline from "./HeartAddOutline";
import HeartAddTwotone from "./HeartAddTwotone";

export { HeartAddBold, HeartAddBroken, HeartAddBulk, HeartAddLinear, HeartAddOutline, HeartAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-add-bold",
    Component: HeartAddBold,
    componentName: "HeartAddBold",
  },
  {
    variant: "broken",
    slug: "heart-add-broken",
    Component: HeartAddBroken,
    componentName: "HeartAddBroken",
  },
  {
    variant: "bulk",
    slug: "heart-add-bulk",
    Component: HeartAddBulk,
    componentName: "HeartAddBulk",
  },
  {
    variant: "linear",
    slug: "heart-add-linear",
    Component: HeartAddLinear,
    componentName: "HeartAddLinear",
  },
  {
    variant: "outline",
    slug: "heart-add-outline",
    Component: HeartAddOutline,
    componentName: "HeartAddOutline",
  },
  {
    variant: "twotone",
    slug: "heart-add-twotone",
    Component: HeartAddTwotone,
    componentName: "HeartAddTwotone",
  },
];
