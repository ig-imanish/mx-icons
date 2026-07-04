import UserSpeakBold from "./UserSpeakBold";
import UserSpeakBroken from "./UserSpeakBroken";
import UserSpeakBulk from "./UserSpeakBulk";
import UserSpeakLinear from "./UserSpeakLinear";
import UserSpeakOutline from "./UserSpeakOutline";
import UserSpeakTwotone from "./UserSpeakTwotone";

export { UserSpeakBold, UserSpeakBroken, UserSpeakBulk, UserSpeakLinear, UserSpeakOutline, UserSpeakTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-speak-bold",
    Component: UserSpeakBold,
    componentName: "UserSpeakBold",
  },,
  {
    variant: "broken",
    slug: "user-speak-broken",
    Component: UserSpeakBroken,
    componentName: "UserSpeakBroken",
  },,
  {
    variant: "bulk",
    slug: "user-speak-bulk",
    Component: UserSpeakBulk,
    componentName: "UserSpeakBulk",
  },,
  {
    variant: "linear",
    slug: "user-speak-linear",
    Component: UserSpeakLinear,
    componentName: "UserSpeakLinear",
  },,
  {
    variant: "outline",
    slug: "user-speak-outline",
    Component: UserSpeakOutline,
    componentName: "UserSpeakOutline",
  },,
  {
    variant: "twotone",
    slug: "user-speak-twotone",
    Component: UserSpeakTwotone,
    componentName: "UserSpeakTwotone",
  }
];

export default { UserSpeakBold, UserSpeakBroken, UserSpeakBulk, UserSpeakLinear, UserSpeakOutline, UserSpeakTwotone };
