import SocketBold from "./SocketBold";
import SocketBroken from "./SocketBroken";
import SocketBulk from "./SocketBulk";
import SocketLinear from "./SocketLinear";
import SocketOutline from "./SocketOutline";
import SocketTwotone from "./SocketTwotone";

export { SocketBold, SocketBroken, SocketBulk, SocketLinear, SocketOutline, SocketTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "socket-bold",
    Component: SocketBold,
    componentName: "SocketBold",
  },,
  {
    variant: "broken",
    slug: "socket-broken",
    Component: SocketBroken,
    componentName: "SocketBroken",
  },,
  {
    variant: "bulk",
    slug: "socket-bulk",
    Component: SocketBulk,
    componentName: "SocketBulk",
  },,
  {
    variant: "linear",
    slug: "socket-linear",
    Component: SocketLinear,
    componentName: "SocketLinear",
  },,
  {
    variant: "outline",
    slug: "socket-outline",
    Component: SocketOutline,
    componentName: "SocketOutline",
  },,
  {
    variant: "twotone",
    slug: "socket-twotone",
    Component: SocketTwotone,
    componentName: "SocketTwotone",
  }
];

export default { SocketBold, SocketBroken, SocketBulk, SocketLinear, SocketOutline, SocketTwotone };
