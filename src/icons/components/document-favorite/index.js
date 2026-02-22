import DocumentFavoriteBold from "./DocumentFavoriteBold";
import DocumentFavoriteBroken from "./DocumentFavoriteBroken";
import DocumentFavoriteBulk from "./DocumentFavoriteBulk";
import DocumentFavoriteLinear from "./DocumentFavoriteLinear";
import DocumentFavoriteOutline from "./DocumentFavoriteOutline";
import DocumentFavoriteTwotone from "./DocumentFavoriteTwotone";

export { DocumentFavoriteBold, DocumentFavoriteBroken, DocumentFavoriteBulk, DocumentFavoriteLinear, DocumentFavoriteOutline, DocumentFavoriteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-favorite-bold",
    Component: DocumentFavoriteBold,
    componentName: "DocumentFavoriteBold",
  },
  {
    variant: "broken",
    slug: "document-favorite-broken",
    Component: DocumentFavoriteBroken,
    componentName: "DocumentFavoriteBroken",
  },
  {
    variant: "bulk",
    slug: "document-favorite-bulk",
    Component: DocumentFavoriteBulk,
    componentName: "DocumentFavoriteBulk",
  },
  {
    variant: "linear",
    slug: "document-favorite-linear",
    Component: DocumentFavoriteLinear,
    componentName: "DocumentFavoriteLinear",
  },
  {
    variant: "outline",
    slug: "document-favorite-outline",
    Component: DocumentFavoriteOutline,
    componentName: "DocumentFavoriteOutline",
  },
  {
    variant: "twotone",
    slug: "document-favorite-twotone",
    Component: DocumentFavoriteTwotone,
    componentName: "DocumentFavoriteTwotone",
  },
];
