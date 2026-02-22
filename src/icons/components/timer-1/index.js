import Timer1Bold from "./Timer1Bold";
import Timer1Broken from "./Timer1Broken";
import Timer1Bulk from "./Timer1Bulk";
import Timer1Linear from "./Timer1Linear";
import Timer1Outline from "./Timer1Outline";
import Timer1Twotone from "./Timer1Twotone";

export { Timer1Bold, Timer1Broken, Timer1Bulk, Timer1Linear, Timer1Outline, Timer1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "timer1-bold",
    Component: Timer1Bold,
    componentName: "Timer1Bold",
  },
  {
    variant: "broken",
    slug: "timer1-broken",
    Component: Timer1Broken,
    componentName: "Timer1Broken",
  },
  {
    variant: "bulk",
    slug: "timer1-bulk",
    Component: Timer1Bulk,
    componentName: "Timer1Bulk",
  },
  {
    variant: "linear",
    slug: "timer1-linear",
    Component: Timer1Linear,
    componentName: "Timer1Linear",
  },
  {
    variant: "outline",
    slug: "timer1-outline",
    Component: Timer1Outline,
    componentName: "Timer1Outline",
  },
  {
    variant: "twotone",
    slug: "timer1-twotone",
    Component: Timer1Twotone,
    componentName: "Timer1Twotone",
  },
];
