import Send1Bold from "./Send1Bold";
import Send1Broken from "./Send1Broken";
import Send1Bulk from "./Send1Bulk";
import Send1Linear from "./Send1Linear";
import Send1Outline from "./Send1Outline";
import Send1Twotone from "./Send1Twotone";

export { Send1Bold, Send1Broken, Send1Bulk, Send1Linear, Send1Outline, Send1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "send1-bold",
    Component: Send1Bold,
    componentName: "Send1Bold",
  },
  {
    variant: "broken",
    slug: "send1-broken",
    Component: Send1Broken,
    componentName: "Send1Broken",
  },
  {
    variant: "bulk",
    slug: "send1-bulk",
    Component: Send1Bulk,
    componentName: "Send1Bulk",
  },
  {
    variant: "linear",
    slug: "send1-linear",
    Component: Send1Linear,
    componentName: "Send1Linear",
  },
  {
    variant: "outline",
    slug: "send1-outline",
    Component: Send1Outline,
    componentName: "Send1Outline",
  },
  {
    variant: "twotone",
    slug: "send1-twotone",
    Component: Send1Twotone,
    componentName: "Send1Twotone",
  },
];
