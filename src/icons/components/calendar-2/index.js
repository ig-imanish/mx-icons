import Calendar2Bold from "./Calendar2Bold";
import Calendar2Broken from "./Calendar2Broken";
import Calendar2Bulk from "./Calendar2Bulk";
import Calendar2Linear from "./Calendar2Linear";
import Calendar2Outline from "./Calendar2Outline";
import Calendar2Twotone from "./Calendar2Twotone";

export { Calendar2Bold, Calendar2Broken, Calendar2Bulk, Calendar2Linear, Calendar2Outline, Calendar2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar2-bold",
    Component: Calendar2Bold,
    componentName: "Calendar2Bold",
  },
  {
    variant: "broken",
    slug: "calendar2-broken",
    Component: Calendar2Broken,
    componentName: "Calendar2Broken",
  },
  {
    variant: "bulk",
    slug: "calendar2-bulk",
    Component: Calendar2Bulk,
    componentName: "Calendar2Bulk",
  },
  {
    variant: "linear",
    slug: "calendar2-linear",
    Component: Calendar2Linear,
    componentName: "Calendar2Linear",
  },
  {
    variant: "outline",
    slug: "calendar2-outline",
    Component: Calendar2Outline,
    componentName: "Calendar2Outline",
  },
  {
    variant: "twotone",
    slug: "calendar2-twotone",
    Component: Calendar2Twotone,
    componentName: "Calendar2Twotone",
  },
];
