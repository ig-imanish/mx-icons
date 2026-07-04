import FileFavouriteBold from "./FileFavouriteBold";
import FileFavouriteBroken from "./FileFavouriteBroken";
import FileFavouriteBulk from "./FileFavouriteBulk";
import FileFavouriteLinear from "./FileFavouriteLinear";
import FileFavouriteOutline from "./FileFavouriteOutline";
import FileFavouriteTwotone from "./FileFavouriteTwotone";

export { FileFavouriteBold, FileFavouriteBroken, FileFavouriteBulk, FileFavouriteLinear, FileFavouriteOutline, FileFavouriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "file-favourite-bold",
    Component: FileFavouriteBold,
    componentName: "FileFavouriteBold",
  },,
  {
    variant: "broken",
    slug: "file-favourite-broken",
    Component: FileFavouriteBroken,
    componentName: "FileFavouriteBroken",
  },,
  {
    variant: "bulk",
    slug: "file-favourite-bulk",
    Component: FileFavouriteBulk,
    componentName: "FileFavouriteBulk",
  },,
  {
    variant: "linear",
    slug: "file-favourite-linear",
    Component: FileFavouriteLinear,
    componentName: "FileFavouriteLinear",
  },,
  {
    variant: "outline",
    slug: "file-favourite-outline",
    Component: FileFavouriteOutline,
    componentName: "FileFavouriteOutline",
  },,
  {
    variant: "twotone",
    slug: "file-favourite-twotone",
    Component: FileFavouriteTwotone,
    componentName: "FileFavouriteTwotone",
  }
];

export default { FileFavouriteBold, FileFavouriteBroken, FileFavouriteBulk, FileFavouriteLinear, FileFavouriteOutline, FileFavouriteTwotone };
