import ProfileAddBold from "./ProfileAddBold";
import ProfileAddBroken from "./ProfileAddBroken";
import ProfileAddBulk from "./ProfileAddBulk";
import ProfileAddLinear from "./ProfileAddLinear";
import ProfileAddOutline from "./ProfileAddOutline";
import ProfileAddTwotone from "./ProfileAddTwotone";

export { ProfileAddBold, ProfileAddBroken, ProfileAddBulk, ProfileAddLinear, ProfileAddOutline, ProfileAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "profile-add-bold",
    Component: ProfileAddBold,
    componentName: "ProfileAddBold",
  },
  {
    variant: "broken",
    slug: "profile-add-broken",
    Component: ProfileAddBroken,
    componentName: "ProfileAddBroken",
  },
  {
    variant: "bulk",
    slug: "profile-add-bulk",
    Component: ProfileAddBulk,
    componentName: "ProfileAddBulk",
  },
  {
    variant: "linear",
    slug: "profile-add-linear",
    Component: ProfileAddLinear,
    componentName: "ProfileAddLinear",
  },
  {
    variant: "outline",
    slug: "profile-add-outline",
    Component: ProfileAddOutline,
    componentName: "ProfileAddOutline",
  },
  {
    variant: "twotone",
    slug: "profile-add-twotone",
    Component: ProfileAddTwotone,
    componentName: "ProfileAddTwotone",
  },
];
