import Messages2Bold from "./Messages2Bold";
import Messages2Broken from "./Messages2Broken";
import Messages2Bulk from "./Messages2Bulk";
import Messages2Linear from "./Messages2Linear";
import Messages2Outline from "./Messages2Outline";
import Messages2Twotone from "./Messages2Twotone";

export { Messages2Bold, Messages2Broken, Messages2Bulk, Messages2Linear, Messages2Outline, Messages2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "messages2-bold",
    Component: Messages2Bold,
    componentName: "Messages2Bold",
  },
  {
    variant: "broken",
    slug: "messages2-broken",
    Component: Messages2Broken,
    componentName: "Messages2Broken",
  },
  {
    variant: "bulk",
    slug: "messages2-bulk",
    Component: Messages2Bulk,
    componentName: "Messages2Bulk",
  },
  {
    variant: "linear",
    slug: "messages2-linear",
    Component: Messages2Linear,
    componentName: "Messages2Linear",
  },
  {
    variant: "outline",
    slug: "messages2-outline",
    Component: Messages2Outline,
    componentName: "Messages2Outline",
  },
  {
    variant: "twotone",
    slug: "messages2-twotone",
    Component: Messages2Twotone,
    componentName: "Messages2Twotone",
  },
];
