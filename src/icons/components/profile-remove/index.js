import ProfileRemoveBold from "./ProfileRemoveBold";
import ProfileRemoveBroken from "./ProfileRemoveBroken";
import ProfileRemoveBulk from "./ProfileRemoveBulk";
import ProfileRemoveLinear from "./ProfileRemoveLinear";
import ProfileRemoveOutline from "./ProfileRemoveOutline";
import ProfileRemoveTwotone from "./ProfileRemoveTwotone";

export { ProfileRemoveBold, ProfileRemoveBroken, ProfileRemoveBulk, ProfileRemoveLinear, ProfileRemoveOutline, ProfileRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "profile-remove-bold",
    Component: ProfileRemoveBold,
    componentName: "ProfileRemoveBold",
  },
  {
    variant: "broken",
    slug: "profile-remove-broken",
    Component: ProfileRemoveBroken,
    componentName: "ProfileRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "profile-remove-bulk",
    Component: ProfileRemoveBulk,
    componentName: "ProfileRemoveBulk",
  },
  {
    variant: "linear",
    slug: "profile-remove-linear",
    Component: ProfileRemoveLinear,
    componentName: "ProfileRemoveLinear",
  },
  {
    variant: "outline",
    slug: "profile-remove-outline",
    Component: ProfileRemoveOutline,
    componentName: "ProfileRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "profile-remove-twotone",
    Component: ProfileRemoveTwotone,
    componentName: "ProfileRemoveTwotone",
  },
];
