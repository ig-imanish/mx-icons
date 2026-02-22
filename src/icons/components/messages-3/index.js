import Messages3Bold from "./Messages3Bold";
import Messages3Broken from "./Messages3Broken";
import Messages3Bulk from "./Messages3Bulk";
import Messages3Linear from "./Messages3Linear";
import Messages3Outline from "./Messages3Outline";
import Messages3Twotone from "./Messages3Twotone";

export { Messages3Bold, Messages3Broken, Messages3Bulk, Messages3Linear, Messages3Outline, Messages3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "messages3-bold",
    Component: Messages3Bold,
    componentName: "Messages3Bold",
  },
  {
    variant: "broken",
    slug: "messages3-broken",
    Component: Messages3Broken,
    componentName: "Messages3Broken",
  },
  {
    variant: "bulk",
    slug: "messages3-bulk",
    Component: Messages3Bulk,
    componentName: "Messages3Bulk",
  },
  {
    variant: "linear",
    slug: "messages3-linear",
    Component: Messages3Linear,
    componentName: "Messages3Linear",
  },
  {
    variant: "outline",
    slug: "messages3-outline",
    Component: Messages3Outline,
    componentName: "Messages3Outline",
  },
  {
    variant: "twotone",
    slug: "messages3-twotone",
    Component: Messages3Twotone,
    componentName: "Messages3Twotone",
  },
];
