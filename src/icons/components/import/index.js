import ImportBold from "./ImportBold";
import ImportBroken from "./ImportBroken";
import ImportBulk from "./ImportBulk";
import ImportLinear from "./ImportLinear";
import ImportOutline from "./ImportOutline";
import ImportTwotone from "./ImportTwotone";

export { ImportBold, ImportBroken, ImportBulk, ImportLinear, ImportOutline, ImportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "import-bold",
    Component: ImportBold,
    componentName: "ImportBold",
  },
  {
    variant: "broken",
    slug: "import-broken",
    Component: ImportBroken,
    componentName: "ImportBroken",
  },
  {
    variant: "bulk",
    slug: "import-bulk",
    Component: ImportBulk,
    componentName: "ImportBulk",
  },
  {
    variant: "linear",
    slug: "import-linear",
    Component: ImportLinear,
    componentName: "ImportLinear",
  },
  {
    variant: "outline",
    slug: "import-outline",
    Component: ImportOutline,
    componentName: "ImportOutline",
  },
  {
    variant: "twotone",
    slug: "import-twotone",
    Component: ImportTwotone,
    componentName: "ImportTwotone",
  },
];
