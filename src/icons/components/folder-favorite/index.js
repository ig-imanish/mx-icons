import FolderFavoriteBold from "./FolderFavoriteBold";
import FolderFavoriteBroken from "./FolderFavoriteBroken";
import FolderFavoriteBulk from "./FolderFavoriteBulk";
import FolderFavoriteLinear from "./FolderFavoriteLinear";
import FolderFavoriteOutline from "./FolderFavoriteOutline";
import FolderFavoriteTwotone from "./FolderFavoriteTwotone";

export { FolderFavoriteBold, FolderFavoriteBroken, FolderFavoriteBulk, FolderFavoriteLinear, FolderFavoriteOutline, FolderFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "folder-favorite-bold",
    Component: FolderFavoriteBold,
    componentName: "FolderFavoriteBold",
  },
  {
    variant: "broken",
    slug: "folder-favorite-broken",
    Component: FolderFavoriteBroken,
    componentName: "FolderFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "folder-favorite-bulk",
    Component: FolderFavoriteBulk,
    componentName: "FolderFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "folder-favorite-linear",
    Component: FolderFavoriteLinear,
    componentName: "FolderFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "folder-favorite-outline",
    Component: FolderFavoriteOutline,
    componentName: "FolderFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "folder-favorite-twotone",
    Component: FolderFavoriteTwotone,
    componentName: "FolderFavoriteTwotone",
  },
];
