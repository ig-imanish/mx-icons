import RestartBold from "./RestartBold";
import RestartBroken from "./RestartBroken";
import RestartBulk from "./RestartBulk";
import RestartLinear from "./RestartLinear";
import RestartOutline from "./RestartOutline";
import RestartTwotone from "./RestartTwotone";

export { RestartBold, RestartBroken, RestartBulk, RestartLinear, RestartOutline, RestartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "restart-bold",
    Component: RestartBold,
    componentName: "RestartBold",
  },,
  {
    variant: "broken",
    slug: "restart-broken",
    Component: RestartBroken,
    componentName: "RestartBroken",
  },,
  {
    variant: "bulk",
    slug: "restart-bulk",
    Component: RestartBulk,
    componentName: "RestartBulk",
  },,
  {
    variant: "linear",
    slug: "restart-linear",
    Component: RestartLinear,
    componentName: "RestartLinear",
  },,
  {
    variant: "outline",
    slug: "restart-outline",
    Component: RestartOutline,
    componentName: "RestartOutline",
  },,
  {
    variant: "twotone",
    slug: "restart-twotone",
    Component: RestartTwotone,
    componentName: "RestartTwotone",
  }
];

export default { RestartBold, RestartBroken, RestartBulk, RestartLinear, RestartOutline, RestartTwotone };
