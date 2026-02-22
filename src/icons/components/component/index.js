import ComponentBold from "./ComponentBold";
import ComponentBroken from "./ComponentBroken";
import ComponentBulk from "./ComponentBulk";
import ComponentLinear from "./ComponentLinear";
import ComponentOutline from "./ComponentOutline";
import ComponentTwotone from "./ComponentTwotone";

export { ComponentBold, ComponentBroken, ComponentBulk, ComponentLinear, ComponentOutline, ComponentTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "component-bold",
    Component: ComponentBold,
    componentName: "ComponentBold",
  },
  {
    variant: "broken",
    slug: "component-broken",
    Component: ComponentBroken,
    componentName: "ComponentBroken",
  },
  {
    variant: "bulk",
    slug: "component-bulk",
    Component: ComponentBulk,
    componentName: "ComponentBulk",
  },
  {
    variant: "linear",
    slug: "component-linear",
    Component: ComponentLinear,
    componentName: "ComponentLinear",
  },
  {
    variant: "outline",
    slug: "component-outline",
    Component: ComponentOutline,
    componentName: "ComponentOutline",
  },
  {
    variant: "twotone",
    slug: "component-twotone",
    Component: ComponentTwotone,
    componentName: "ComponentTwotone",
  },
];
