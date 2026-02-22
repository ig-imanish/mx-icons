import ProfileDeleteBold from "./ProfileDeleteBold";
import ProfileDeleteBroken from "./ProfileDeleteBroken";
import ProfileDeleteBulk from "./ProfileDeleteBulk";
import ProfileDeleteLinear from "./ProfileDeleteLinear";
import ProfileDeleteOutline from "./ProfileDeleteOutline";
import ProfileDeleteTwotone from "./ProfileDeleteTwotone";

export { ProfileDeleteBold, ProfileDeleteBroken, ProfileDeleteBulk, ProfileDeleteLinear, ProfileDeleteOutline, ProfileDeleteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "profile-delete-bold",
    Component: ProfileDeleteBold,
    componentName: "ProfileDeleteBold",
  },
  {
    variant: "broken",
    slug: "profile-delete-broken",
    Component: ProfileDeleteBroken,
    componentName: "ProfileDeleteBroken",
  },
  {
    variant: "bulk",
    slug: "profile-delete-bulk",
    Component: ProfileDeleteBulk,
    componentName: "ProfileDeleteBulk",
  },
  {
    variant: "linear",
    slug: "profile-delete-linear",
    Component: ProfileDeleteLinear,
    componentName: "ProfileDeleteLinear",
  },
  {
    variant: "outline",
    slug: "profile-delete-outline",
    Component: ProfileDeleteOutline,
    componentName: "ProfileDeleteOutline",
  },
  {
    variant: "twotone",
    slug: "profile-delete-twotone",
    Component: ProfileDeleteTwotone,
    componentName: "ProfileDeleteTwotone",
  },
];
