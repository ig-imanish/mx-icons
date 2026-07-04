import RemoteControllerBold from "./RemoteControllerBold";
import RemoteControllerBroken from "./RemoteControllerBroken";
import RemoteControllerBulk from "./RemoteControllerBulk";
import RemoteControllerLinear from "./RemoteControllerLinear";
import RemoteControllerOutline from "./RemoteControllerOutline";
import RemoteControllerTwotone from "./RemoteControllerTwotone";

export { RemoteControllerBold, RemoteControllerBroken, RemoteControllerBulk, RemoteControllerLinear, RemoteControllerOutline, RemoteControllerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "remote-controller-bold",
    Component: RemoteControllerBold,
    componentName: "RemoteControllerBold",
  },,
  {
    variant: "broken",
    slug: "remote-controller-broken",
    Component: RemoteControllerBroken,
    componentName: "RemoteControllerBroken",
  },,
  {
    variant: "bulk",
    slug: "remote-controller-bulk",
    Component: RemoteControllerBulk,
    componentName: "RemoteControllerBulk",
  },,
  {
    variant: "linear",
    slug: "remote-controller-linear",
    Component: RemoteControllerLinear,
    componentName: "RemoteControllerLinear",
  },,
  {
    variant: "outline",
    slug: "remote-controller-outline",
    Component: RemoteControllerOutline,
    componentName: "RemoteControllerOutline",
  },,
  {
    variant: "twotone",
    slug: "remote-controller-twotone",
    Component: RemoteControllerTwotone,
    componentName: "RemoteControllerTwotone",
  }
];

export default { RemoteControllerBold, RemoteControllerBroken, RemoteControllerBulk, RemoteControllerLinear, RemoteControllerOutline, RemoteControllerTwotone };
