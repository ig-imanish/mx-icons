import HomeLampBold from "./HomeLampBold";
import HomeLampBroken from "./HomeLampBroken";
import HomeLampBulk from "./HomeLampBulk";
import HomeLampLinear from "./HomeLampLinear";
import HomeLampOutline from "./HomeLampOutline";
import HomeLampTwotone from "./HomeLampTwotone";

export { HomeLampBold, HomeLampBroken, HomeLampBulk, HomeLampLinear, HomeLampOutline, HomeLampTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "home-lamp-bold",
    Component: HomeLampBold,
    componentName: "HomeLampBold",
  },,
  {
    variant: "broken",
    slug: "home-lamp-broken",
    Component: HomeLampBroken,
    componentName: "HomeLampBroken",
  },,
  {
    variant: "bulk",
    slug: "home-lamp-bulk",
    Component: HomeLampBulk,
    componentName: "HomeLampBulk",
  },,
  {
    variant: "linear",
    slug: "home-lamp-linear",
    Component: HomeLampLinear,
    componentName: "HomeLampLinear",
  },,
  {
    variant: "outline",
    slug: "home-lamp-outline",
    Component: HomeLampOutline,
    componentName: "HomeLampOutline",
  },,
  {
    variant: "twotone",
    slug: "home-lamp-twotone",
    Component: HomeLampTwotone,
    componentName: "HomeLampTwotone",
  }
];

export default { HomeLampBold, HomeLampBroken, HomeLampBulk, HomeLampLinear, HomeLampOutline, HomeLampTwotone };
