import LibraryBold from "./LibraryBold";
import LibraryBroken from "./LibraryBroken";
import LibraryBulk from "./LibraryBulk";
import LibraryLinear from "./LibraryLinear";
import LibraryOutline from "./LibraryOutline";
import LibraryTwotone from "./LibraryTwotone";

export { LibraryBold, LibraryBroken, LibraryBulk, LibraryLinear, LibraryOutline, LibraryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "library-bold",
    Component: LibraryBold,
    componentName: "LibraryBold",
  },,
  {
    variant: "broken",
    slug: "library-broken",
    Component: LibraryBroken,
    componentName: "LibraryBroken",
  },,
  {
    variant: "bulk",
    slug: "library-bulk",
    Component: LibraryBulk,
    componentName: "LibraryBulk",
  },,
  {
    variant: "linear",
    slug: "library-linear",
    Component: LibraryLinear,
    componentName: "LibraryLinear",
  },,
  {
    variant: "outline",
    slug: "library-outline",
    Component: LibraryOutline,
    componentName: "LibraryOutline",
  },,
  {
    variant: "twotone",
    slug: "library-twotone",
    Component: LibraryTwotone,
    componentName: "LibraryTwotone",
  }
];

export default { LibraryBold, LibraryBroken, LibraryBulk, LibraryLinear, LibraryOutline, LibraryTwotone };
