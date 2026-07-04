import TelescopeBold from "./TelescopeBold";
import TelescopeBroken from "./TelescopeBroken";
import TelescopeBulk from "./TelescopeBulk";
import TelescopeLinear from "./TelescopeLinear";
import TelescopeOutline from "./TelescopeOutline";
import TelescopeTwotone from "./TelescopeTwotone";

export { TelescopeBold, TelescopeBroken, TelescopeBulk, TelescopeLinear, TelescopeOutline, TelescopeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "telescope-bold",
    Component: TelescopeBold,
    componentName: "TelescopeBold",
  },,
  {
    variant: "broken",
    slug: "telescope-broken",
    Component: TelescopeBroken,
    componentName: "TelescopeBroken",
  },,
  {
    variant: "bulk",
    slug: "telescope-bulk",
    Component: TelescopeBulk,
    componentName: "TelescopeBulk",
  },,
  {
    variant: "linear",
    slug: "telescope-linear",
    Component: TelescopeLinear,
    componentName: "TelescopeLinear",
  },,
  {
    variant: "outline",
    slug: "telescope-outline",
    Component: TelescopeOutline,
    componentName: "TelescopeOutline",
  },,
  {
    variant: "twotone",
    slug: "telescope-twotone",
    Component: TelescopeTwotone,
    componentName: "TelescopeTwotone",
  }
];

export default { TelescopeBold, TelescopeBroken, TelescopeBulk, TelescopeLinear, TelescopeOutline, TelescopeTwotone };
