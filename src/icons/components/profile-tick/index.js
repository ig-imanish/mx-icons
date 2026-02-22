import ProfileTickBold from "./ProfileTickBold";
import ProfileTickBroken from "./ProfileTickBroken";
import ProfileTickBulk from "./ProfileTickBulk";
import ProfileTickLinear from "./ProfileTickLinear";
import ProfileTickOutline from "./ProfileTickOutline";
import ProfileTickTwotone from "./ProfileTickTwotone";

export { ProfileTickBold, ProfileTickBroken, ProfileTickBulk, ProfileTickLinear, ProfileTickOutline, ProfileTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "profile-tick-bold",
    Component: ProfileTickBold,
    componentName: "ProfileTickBold",
  },
  {
    variant: "broken",
    slug: "profile-tick-broken",
    Component: ProfileTickBroken,
    componentName: "ProfileTickBroken",
  },
  {
    variant: "bulk",
    slug: "profile-tick-bulk",
    Component: ProfileTickBulk,
    componentName: "ProfileTickBulk",
  },
  {
    variant: "linear",
    slug: "profile-tick-linear",
    Component: ProfileTickLinear,
    componentName: "ProfileTickLinear",
  },
  {
    variant: "outline",
    slug: "profile-tick-outline",
    Component: ProfileTickOutline,
    componentName: "ProfileTickOutline",
  },
  {
    variant: "twotone",
    slug: "profile-tick-twotone",
    Component: ProfileTickTwotone,
    componentName: "ProfileTickTwotone",
  },
];
