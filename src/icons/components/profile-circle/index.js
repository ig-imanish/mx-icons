import ProfileCircleBold from "./ProfileCircleBold";
import ProfileCircleBroken from "./ProfileCircleBroken";
import ProfileCircleBulk from "./ProfileCircleBulk";
import ProfileCircleLinear from "./ProfileCircleLinear";
import ProfileCircleOutline from "./ProfileCircleOutline";
import ProfileCircleTwotone from "./ProfileCircleTwotone";

export { ProfileCircleBold, ProfileCircleBroken, ProfileCircleBulk, ProfileCircleLinear, ProfileCircleOutline, ProfileCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "profile-circle-bold",
    Component: ProfileCircleBold,
    componentName: "ProfileCircleBold",
  },
  {
    variant: "broken",
    slug: "profile-circle-broken",
    Component: ProfileCircleBroken,
    componentName: "ProfileCircleBroken",
  },
  {
    variant: "bulk",
    slug: "profile-circle-bulk",
    Component: ProfileCircleBulk,
    componentName: "ProfileCircleBulk",
  },
  {
    variant: "linear",
    slug: "profile-circle-linear",
    Component: ProfileCircleLinear,
    componentName: "ProfileCircleLinear",
  },
  {
    variant: "outline",
    slug: "profile-circle-outline",
    Component: ProfileCircleOutline,
    componentName: "ProfileCircleOutline",
  },
  {
    variant: "twotone",
    slug: "profile-circle-twotone",
    Component: ProfileCircleTwotone,
    componentName: "ProfileCircleTwotone",
  },
];
