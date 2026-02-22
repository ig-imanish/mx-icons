import PeopleBold from "./PeopleBold";
import PeopleBroken from "./PeopleBroken";
import PeopleBulk from "./PeopleBulk";
import PeopleLinear from "./PeopleLinear";
import PeopleOutline from "./PeopleOutline";
import PeopleTwotone from "./PeopleTwotone";

export { PeopleBold, PeopleBroken, PeopleBulk, PeopleLinear, PeopleOutline, PeopleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "people-bold",
    Component: PeopleBold,
    componentName: "PeopleBold",
  },
  {
    variant: "broken",
    slug: "people-broken",
    Component: PeopleBroken,
    componentName: "PeopleBroken",
  },
  {
    variant: "bulk",
    slug: "people-bulk",
    Component: PeopleBulk,
    componentName: "PeopleBulk",
  },
  {
    variant: "linear",
    slug: "people-linear",
    Component: PeopleLinear,
    componentName: "PeopleLinear",
  },
  {
    variant: "outline",
    slug: "people-outline",
    Component: PeopleOutline,
    componentName: "PeopleOutline",
  },
  {
    variant: "twotone",
    slug: "people-twotone",
    Component: PeopleTwotone,
    componentName: "PeopleTwotone",
  },
];
