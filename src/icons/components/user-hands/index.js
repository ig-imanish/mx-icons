import UserHandsBold from "./UserHandsBold";
import UserHandsBroken from "./UserHandsBroken";
import UserHandsBulk from "./UserHandsBulk";
import UserHandsLinear from "./UserHandsLinear";
import UserHandsOutline from "./UserHandsOutline";
import UserHandsTwotone from "./UserHandsTwotone";

export { UserHandsBold, UserHandsBroken, UserHandsBulk, UserHandsLinear, UserHandsOutline, UserHandsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-hands-bold",
    Component: UserHandsBold,
    componentName: "UserHandsBold",
  },,
  {
    variant: "broken",
    slug: "user-hands-broken",
    Component: UserHandsBroken,
    componentName: "UserHandsBroken",
  },,
  {
    variant: "bulk",
    slug: "user-hands-bulk",
    Component: UserHandsBulk,
    componentName: "UserHandsBulk",
  },,
  {
    variant: "linear",
    slug: "user-hands-linear",
    Component: UserHandsLinear,
    componentName: "UserHandsLinear",
  },,
  {
    variant: "outline",
    slug: "user-hands-outline",
    Component: UserHandsOutline,
    componentName: "UserHandsOutline",
  },,
  {
    variant: "twotone",
    slug: "user-hands-twotone",
    Component: UserHandsTwotone,
    componentName: "UserHandsTwotone",
  }
];

export default { UserHandsBold, UserHandsBroken, UserHandsBulk, UserHandsLinear, UserHandsOutline, UserHandsTwotone };
