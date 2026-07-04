import ServerBold from "./ServerBold";
import ServerBroken from "./ServerBroken";
import ServerBulk from "./ServerBulk";
import ServerLinear from "./ServerLinear";
import ServerOutline from "./ServerOutline";
import ServerTwotone from "./ServerTwotone";

export { ServerBold, ServerBroken, ServerBulk, ServerLinear, ServerOutline, ServerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "server-bold",
    Component: ServerBold,
    componentName: "ServerBold",
  },,
  {
    variant: "broken",
    slug: "server-broken",
    Component: ServerBroken,
    componentName: "ServerBroken",
  },,
  {
    variant: "bulk",
    slug: "server-bulk",
    Component: ServerBulk,
    componentName: "ServerBulk",
  },,
  {
    variant: "linear",
    slug: "server-linear",
    Component: ServerLinear,
    componentName: "ServerLinear",
  },,
  {
    variant: "outline",
    slug: "server-outline",
    Component: ServerOutline,
    componentName: "ServerOutline",
  },,
  {
    variant: "twotone",
    slug: "server-twotone",
    Component: ServerTwotone,
    componentName: "ServerTwotone",
  }
];

export default { ServerBold, ServerBroken, ServerBulk, ServerLinear, ServerOutline, ServerTwotone };
