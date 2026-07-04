import ServerMinimalisticBold from "./ServerMinimalisticBold";
import ServerMinimalisticBroken from "./ServerMinimalisticBroken";
import ServerMinimalisticBulk from "./ServerMinimalisticBulk";
import ServerMinimalisticLinear from "./ServerMinimalisticLinear";
import ServerMinimalisticOutline from "./ServerMinimalisticOutline";
import ServerMinimalisticTwotone from "./ServerMinimalisticTwotone";

export { ServerMinimalisticBold, ServerMinimalisticBroken, ServerMinimalisticBulk, ServerMinimalisticLinear, ServerMinimalisticOutline, ServerMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "server-minimalistic-bold",
    Component: ServerMinimalisticBold,
    componentName: "ServerMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "server-minimalistic-broken",
    Component: ServerMinimalisticBroken,
    componentName: "ServerMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "server-minimalistic-bulk",
    Component: ServerMinimalisticBulk,
    componentName: "ServerMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "server-minimalistic-linear",
    Component: ServerMinimalisticLinear,
    componentName: "ServerMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "server-minimalistic-outline",
    Component: ServerMinimalisticOutline,
    componentName: "ServerMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "server-minimalistic-twotone",
    Component: ServerMinimalisticTwotone,
    componentName: "ServerMinimalisticTwotone",
  }
];

export default { ServerMinimalisticBold, ServerMinimalisticBroken, ServerMinimalisticBulk, ServerMinimalisticLinear, ServerMinimalisticOutline, ServerMinimalisticTwotone };
