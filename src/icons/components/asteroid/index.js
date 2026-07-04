import AsteroidBold from "./AsteroidBold";
import AsteroidBroken from "./AsteroidBroken";
import AsteroidBulk from "./AsteroidBulk";
import AsteroidLinear from "./AsteroidLinear";
import AsteroidOutline from "./AsteroidOutline";
import AsteroidTwotone from "./AsteroidTwotone";

export { AsteroidBold, AsteroidBroken, AsteroidBulk, AsteroidLinear, AsteroidOutline, AsteroidTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "asteroid-bold",
    Component: AsteroidBold,
    componentName: "AsteroidBold",
  },,
  {
    variant: "broken",
    slug: "asteroid-broken",
    Component: AsteroidBroken,
    componentName: "AsteroidBroken",
  },,
  {
    variant: "bulk",
    slug: "asteroid-bulk",
    Component: AsteroidBulk,
    componentName: "AsteroidBulk",
  },,
  {
    variant: "linear",
    slug: "asteroid-linear",
    Component: AsteroidLinear,
    componentName: "AsteroidLinear",
  },,
  {
    variant: "outline",
    slug: "asteroid-outline",
    Component: AsteroidOutline,
    componentName: "AsteroidOutline",
  },,
  {
    variant: "twotone",
    slug: "asteroid-twotone",
    Component: AsteroidTwotone,
    componentName: "AsteroidTwotone",
  }
];

export default { AsteroidBold, AsteroidBroken, AsteroidBulk, AsteroidLinear, AsteroidOutline, AsteroidTwotone };
