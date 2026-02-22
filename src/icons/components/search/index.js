import SearchFilled from "./SearchFilled";
import SearchTwotone from "./SearchTwotone";

export { SearchFilled, SearchTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "search-filled",
    Component: SearchFilled,
    componentName: "SearchFilled",
  },
  {
    variant: "twotone",
    slug: "search-twotone",
    Component: SearchTwotone,
    componentName: "SearchTwotone",
  },
];
