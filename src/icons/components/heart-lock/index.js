import HeartLockBold from "./HeartLockBold";
import HeartLockBroken from "./HeartLockBroken";
import HeartLockBulk from "./HeartLockBulk";
import HeartLockLinear from "./HeartLockLinear";
import HeartLockOutline from "./HeartLockOutline";
import HeartLockTwotone from "./HeartLockTwotone";

export { HeartLockBold, HeartLockBroken, HeartLockBulk, HeartLockLinear, HeartLockOutline, HeartLockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-lock-bold",
    Component: HeartLockBold,
    componentName: "HeartLockBold",
  },,
  {
    variant: "broken",
    slug: "heart-lock-broken",
    Component: HeartLockBroken,
    componentName: "HeartLockBroken",
  },,
  {
    variant: "bulk",
    slug: "heart-lock-bulk",
    Component: HeartLockBulk,
    componentName: "HeartLockBulk",
  },,
  {
    variant: "linear",
    slug: "heart-lock-linear",
    Component: HeartLockLinear,
    componentName: "HeartLockLinear",
  },,
  {
    variant: "outline",
    slug: "heart-lock-outline",
    Component: HeartLockOutline,
    componentName: "HeartLockOutline",
  },,
  {
    variant: "twotone",
    slug: "heart-lock-twotone",
    Component: HeartLockTwotone,
    componentName: "HeartLockTwotone",
  }
];

export default { HeartLockBold, HeartLockBroken, HeartLockBulk, HeartLockLinear, HeartLockOutline, HeartLockTwotone };
