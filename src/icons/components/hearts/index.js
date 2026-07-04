import HeartsBold from "./HeartsBold";
import HeartsBroken from "./HeartsBroken";
import HeartsBulk from "./HeartsBulk";
import HeartsLinear from "./HeartsLinear";
import HeartsOutline from "./HeartsOutline";
import HeartsTwotone from "./HeartsTwotone";

export { HeartsBold, HeartsBroken, HeartsBulk, HeartsLinear, HeartsOutline, HeartsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hearts-bold",
    Component: HeartsBold,
    componentName: "HeartsBold",
  },,
  {
    variant: "broken",
    slug: "hearts-broken",
    Component: HeartsBroken,
    componentName: "HeartsBroken",
  },,
  {
    variant: "bulk",
    slug: "hearts-bulk",
    Component: HeartsBulk,
    componentName: "HeartsBulk",
  },,
  {
    variant: "linear",
    slug: "hearts-linear",
    Component: HeartsLinear,
    componentName: "HeartsLinear",
  },,
  {
    variant: "outline",
    slug: "hearts-outline",
    Component: HeartsOutline,
    componentName: "HeartsOutline",
  },,
  {
    variant: "twotone",
    slug: "hearts-twotone",
    Component: HeartsTwotone,
    componentName: "HeartsTwotone",
  }
];

export default { HeartsBold, HeartsBroken, HeartsBulk, HeartsLinear, HeartsOutline, HeartsTwotone };
