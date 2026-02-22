import List3 from "./List3";
import List3Filled from "./List3Filled";
import List3Twotone from "./List3Twotone";
import ListIndented from "./ListIndented";
import ListIndentedReversed from "./ListIndentedReversed";

export { List3, List3Filled, List3Twotone, ListIndented, ListIndentedReversed };

export const variants = [
  {
    variant: "linear",
    slug: "list3",
    Component: List3,
    componentName: "List3",
  },
  {
    variant: "filled",
    slug: "list3-filled",
    Component: List3Filled,
    componentName: "List3Filled",
  },
  {
    variant: "twotone",
    slug: "list3-twotone",
    Component: List3Twotone,
    componentName: "List3Twotone",
  },
  {
    variant: "linear",
    slug: "list-indented",
    Component: ListIndented,
    componentName: "ListIndented",
  },
  {
    variant: "linear",
    slug: "list-indented-reversed",
    Component: ListIndentedReversed,
    componentName: "ListIndentedReversed",
  },
];
