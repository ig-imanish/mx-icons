import FootballBold from "./FootballBold";
import FootballBroken from "./FootballBroken";
import FootballBulk from "./FootballBulk";
import FootballLinear from "./FootballLinear";
import FootballOutline from "./FootballOutline";
import FootballTwotone from "./FootballTwotone";

export { FootballBold, FootballBroken, FootballBulk, FootballLinear, FootballOutline, FootballTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "football-bold",
    Component: FootballBold,
    componentName: "FootballBold",
  },,
  {
    variant: "broken",
    slug: "football-broken",
    Component: FootballBroken,
    componentName: "FootballBroken",
  },,
  {
    variant: "bulk",
    slug: "football-bulk",
    Component: FootballBulk,
    componentName: "FootballBulk",
  },,
  {
    variant: "linear",
    slug: "football-linear",
    Component: FootballLinear,
    componentName: "FootballLinear",
  },,
  {
    variant: "outline",
    slug: "football-outline",
    Component: FootballOutline,
    componentName: "FootballOutline",
  },,
  {
    variant: "twotone",
    slug: "football-twotone",
    Component: FootballTwotone,
    componentName: "FootballTwotone",
  }
];

export default { FootballBold, FootballBroken, FootballBulk, FootballLinear, FootballOutline, FootballTwotone };
