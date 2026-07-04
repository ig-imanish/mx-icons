import ServerPathBold from "./ServerPathBold";
import ServerPathBroken from "./ServerPathBroken";
import ServerPathBulk from "./ServerPathBulk";
import ServerPathLinear from "./ServerPathLinear";
import ServerPathOutline from "./ServerPathOutline";
import ServerPathTwotone from "./ServerPathTwotone";

export { ServerPathBold, ServerPathBroken, ServerPathBulk, ServerPathLinear, ServerPathOutline, ServerPathTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "server-path-bold",
    Component: ServerPathBold,
    componentName: "ServerPathBold",
  },,
  {
    variant: "broken",
    slug: "server-path-broken",
    Component: ServerPathBroken,
    componentName: "ServerPathBroken",
  },,
  {
    variant: "bulk",
    slug: "server-path-bulk",
    Component: ServerPathBulk,
    componentName: "ServerPathBulk",
  },,
  {
    variant: "linear",
    slug: "server-path-linear",
    Component: ServerPathLinear,
    componentName: "ServerPathLinear",
  },,
  {
    variant: "outline",
    slug: "server-path-outline",
    Component: ServerPathOutline,
    componentName: "ServerPathOutline",
  },,
  {
    variant: "twotone",
    slug: "server-path-twotone",
    Component: ServerPathTwotone,
    componentName: "ServerPathTwotone",
  }
];

export default { ServerPathBold, ServerPathBroken, ServerPathBulk, ServerPathLinear, ServerPathOutline, ServerPathTwotone };
