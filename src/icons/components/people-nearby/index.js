import PeopleNearbyBold from "./PeopleNearbyBold";
import PeopleNearbyBroken from "./PeopleNearbyBroken";
import PeopleNearbyBulk from "./PeopleNearbyBulk";
import PeopleNearbyLinear from "./PeopleNearbyLinear";
import PeopleNearbyOutline from "./PeopleNearbyOutline";
import PeopleNearbyTwotone from "./PeopleNearbyTwotone";

export { PeopleNearbyBold, PeopleNearbyBroken, PeopleNearbyBulk, PeopleNearbyLinear, PeopleNearbyOutline, PeopleNearbyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "people-nearby-bold",
    Component: PeopleNearbyBold,
    componentName: "PeopleNearbyBold",
  },,
  {
    variant: "broken",
    slug: "people-nearby-broken",
    Component: PeopleNearbyBroken,
    componentName: "PeopleNearbyBroken",
  },,
  {
    variant: "bulk",
    slug: "people-nearby-bulk",
    Component: PeopleNearbyBulk,
    componentName: "PeopleNearbyBulk",
  },,
  {
    variant: "linear",
    slug: "people-nearby-linear",
    Component: PeopleNearbyLinear,
    componentName: "PeopleNearbyLinear",
  },,
  {
    variant: "outline",
    slug: "people-nearby-outline",
    Component: PeopleNearbyOutline,
    componentName: "PeopleNearbyOutline",
  },,
  {
    variant: "twotone",
    slug: "people-nearby-twotone",
    Component: PeopleNearbyTwotone,
    componentName: "PeopleNearbyTwotone",
  }
];

export default { PeopleNearbyBold, PeopleNearbyBroken, PeopleNearbyBulk, PeopleNearbyLinear, PeopleNearbyOutline, PeopleNearbyTwotone };
