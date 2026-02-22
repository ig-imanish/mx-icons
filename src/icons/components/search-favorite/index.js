import SearchFavoriteBold from "./SearchFavoriteBold";
import SearchFavoriteBroken from "./SearchFavoriteBroken";
import SearchFavoriteBulk from "./SearchFavoriteBulk";
import SearchFavoriteLinear from "./SearchFavoriteLinear";
import SearchFavoriteOutline from "./SearchFavoriteOutline";
import SearchFavoriteTwotone from "./SearchFavoriteTwotone";

export { SearchFavoriteBold, SearchFavoriteBroken, SearchFavoriteBulk, SearchFavoriteLinear, SearchFavoriteOutline, SearchFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "search-favorite-bold",
    Component: SearchFavoriteBold,
    componentName: "SearchFavoriteBold",
  },
  {
    variant: "broken",
    slug: "search-favorite-broken",
    Component: SearchFavoriteBroken,
    componentName: "SearchFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "search-favorite-bulk",
    Component: SearchFavoriteBulk,
    componentName: "SearchFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "search-favorite-linear",
    Component: SearchFavoriteLinear,
    componentName: "SearchFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "search-favorite-outline",
    Component: SearchFavoriteOutline,
    componentName: "SearchFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "search-favorite-twotone",
    Component: SearchFavoriteTwotone,
    componentName: "SearchFavoriteTwotone",
  },
];
