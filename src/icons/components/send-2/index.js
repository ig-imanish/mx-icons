import Send2Bold from "./Send2Bold";
import Send2Broken from "./Send2Broken";
import Send2Bulk from "./Send2Bulk";
import Send2Linear from "./Send2Linear";
import Send2Outline from "./Send2Outline";
import Send2Twotone from "./Send2Twotone";

export { Send2Bold, Send2Broken, Send2Bulk, Send2Linear, Send2Outline, Send2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "send2-bold",
    Component: Send2Bold,
    componentName: "Send2Bold",
  },
  {
    variant: "broken",
    slug: "send2-broken",
    Component: Send2Broken,
    componentName: "Send2Broken",
  },
  {
    variant: "bulk",
    slug: "send2-bulk",
    Component: Send2Bulk,
    componentName: "Send2Bulk",
  },
  {
    variant: "linear",
    slug: "send2-linear",
    Component: Send2Linear,
    componentName: "Send2Linear",
  },
  {
    variant: "outline",
    slug: "send2-outline",
    Component: Send2Outline,
    componentName: "Send2Outline",
  },
  {
    variant: "twotone",
    slug: "send2-twotone",
    Component: Send2Twotone,
    componentName: "Send2Twotone",
  },
];
