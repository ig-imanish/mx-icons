import ServerSquareUpdateBold from "./ServerSquareUpdateBold";
import ServerSquareUpdateBroken from "./ServerSquareUpdateBroken";
import ServerSquareUpdateBulk from "./ServerSquareUpdateBulk";
import ServerSquareUpdateLinear from "./ServerSquareUpdateLinear";
import ServerSquareUpdateOutline from "./ServerSquareUpdateOutline";
import ServerSquareUpdateTwotone from "./ServerSquareUpdateTwotone";

export { ServerSquareUpdateBold, ServerSquareUpdateBroken, ServerSquareUpdateBulk, ServerSquareUpdateLinear, ServerSquareUpdateOutline, ServerSquareUpdateTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "server-square-update-bold",
    Component: ServerSquareUpdateBold,
    componentName: "ServerSquareUpdateBold",
  },,
  {
    variant: "broken",
    slug: "server-square-update-broken",
    Component: ServerSquareUpdateBroken,
    componentName: "ServerSquareUpdateBroken",
  },,
  {
    variant: "bulk",
    slug: "server-square-update-bulk",
    Component: ServerSquareUpdateBulk,
    componentName: "ServerSquareUpdateBulk",
  },,
  {
    variant: "linear",
    slug: "server-square-update-linear",
    Component: ServerSquareUpdateLinear,
    componentName: "ServerSquareUpdateLinear",
  },,
  {
    variant: "outline",
    slug: "server-square-update-outline",
    Component: ServerSquareUpdateOutline,
    componentName: "ServerSquareUpdateOutline",
  },,
  {
    variant: "twotone",
    slug: "server-square-update-twotone",
    Component: ServerSquareUpdateTwotone,
    componentName: "ServerSquareUpdateTwotone",
  }
];

export default { ServerSquareUpdateBold, ServerSquareUpdateBroken, ServerSquareUpdateBulk, ServerSquareUpdateLinear, ServerSquareUpdateOutline, ServerSquareUpdateTwotone };
