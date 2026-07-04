import ServerSquareBold from "./ServerSquareBold";
import ServerSquareBroken from "./ServerSquareBroken";
import ServerSquareBulk from "./ServerSquareBulk";
import ServerSquareLinear from "./ServerSquareLinear";
import ServerSquareOutline from "./ServerSquareOutline";
import ServerSquareTwotone from "./ServerSquareTwotone";

export { ServerSquareBold, ServerSquareBroken, ServerSquareBulk, ServerSquareLinear, ServerSquareOutline, ServerSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "server-square-bold",
    Component: ServerSquareBold,
    componentName: "ServerSquareBold",
  },,
  {
    variant: "broken",
    slug: "server-square-broken",
    Component: ServerSquareBroken,
    componentName: "ServerSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "server-square-bulk",
    Component: ServerSquareBulk,
    componentName: "ServerSquareBulk",
  },,
  {
    variant: "linear",
    slug: "server-square-linear",
    Component: ServerSquareLinear,
    componentName: "ServerSquareLinear",
  },,
  {
    variant: "outline",
    slug: "server-square-outline",
    Component: ServerSquareOutline,
    componentName: "ServerSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "server-square-twotone",
    Component: ServerSquareTwotone,
    componentName: "ServerSquareTwotone",
  }
];

export default { ServerSquareBold, ServerSquareBroken, ServerSquareBulk, ServerSquareLinear, ServerSquareOutline, ServerSquareTwotone };
