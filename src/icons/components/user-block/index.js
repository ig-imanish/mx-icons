import UserBlockBold from "./UserBlockBold";
import UserBlockBroken from "./UserBlockBroken";
import UserBlockBulk from "./UserBlockBulk";
import UserBlockLinear from "./UserBlockLinear";
import UserBlockOutline from "./UserBlockOutline";
import UserBlockTwotone from "./UserBlockTwotone";

export { UserBlockBold, UserBlockBroken, UserBlockBulk, UserBlockLinear, UserBlockOutline, UserBlockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-block-bold",
    Component: UserBlockBold,
    componentName: "UserBlockBold",
  },,
  {
    variant: "broken",
    slug: "user-block-broken",
    Component: UserBlockBroken,
    componentName: "UserBlockBroken",
  },,
  {
    variant: "bulk",
    slug: "user-block-bulk",
    Component: UserBlockBulk,
    componentName: "UserBlockBulk",
  },,
  {
    variant: "linear",
    slug: "user-block-linear",
    Component: UserBlockLinear,
    componentName: "UserBlockLinear",
  },,
  {
    variant: "outline",
    slug: "user-block-outline",
    Component: UserBlockOutline,
    componentName: "UserBlockOutline",
  },,
  {
    variant: "twotone",
    slug: "user-block-twotone",
    Component: UserBlockTwotone,
    componentName: "UserBlockTwotone",
  }
];

export default { UserBlockBold, UserBlockBroken, UserBlockBulk, UserBlockLinear, UserBlockOutline, UserBlockTwotone };
