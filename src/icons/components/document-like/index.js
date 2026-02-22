import DocumentLikeBold from "./DocumentLikeBold";
import DocumentLikeBroken from "./DocumentLikeBroken";
import DocumentLikeBulk from "./DocumentLikeBulk";
import DocumentLikeLinear from "./DocumentLikeLinear";
import DocumentLikeOutline from "./DocumentLikeOutline";
import DocumentLikeTwotone from "./DocumentLikeTwotone";

export { DocumentLikeBold, DocumentLikeBroken, DocumentLikeBulk, DocumentLikeLinear, DocumentLikeOutline, DocumentLikeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-like-bold",
    Component: DocumentLikeBold,
    componentName: "DocumentLikeBold",
  },
  {
    variant: "broken",
    slug: "document-like-broken",
    Component: DocumentLikeBroken,
    componentName: "DocumentLikeBroken",
  },
  {
    variant: "bulk",
    slug: "document-like-bulk",
    Component: DocumentLikeBulk,
    componentName: "DocumentLikeBulk",
  },
  {
    variant: "linear",
    slug: "document-like-linear",
    Component: DocumentLikeLinear,
    componentName: "DocumentLikeLinear",
  },
  {
    variant: "outline",
    slug: "document-like-outline",
    Component: DocumentLikeOutline,
    componentName: "DocumentLikeOutline",
  },
  {
    variant: "twotone",
    slug: "document-like-twotone",
    Component: DocumentLikeTwotone,
    componentName: "DocumentLikeTwotone",
  },
];
