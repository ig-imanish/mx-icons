import ProfileBulk from "./ProfileBulk";
import ProfileLinear from "./ProfileLinear";
import ProfileTwotone from "./ProfileTwotone";

export { ProfileBulk, ProfileLinear, ProfileTwotone };

export const variants = [
  {
    variant: "bulk",
    slug: "profile-bulk",
    Component: ProfileBulk,
    componentName: "ProfileBulk",
  },
  {
    variant: "linear",
    slug: "profile-linear",
    Component: ProfileLinear,
    componentName: "ProfileLinear",
  },
  {
    variant: "twotone",
    slug: "profile-twotone",
    Component: ProfileTwotone,
    componentName: "ProfileTwotone",
  },
];
