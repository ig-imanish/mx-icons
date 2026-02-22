import ExportBold from "./ExportBold";
import ExportBroken from "./ExportBroken";
import ExportBulk from "./ExportBulk";
import ExportLinear from "./ExportLinear";
import ExportOutline from "./ExportOutline";
import ExportTwotone from "./ExportTwotone";

export { ExportBold, ExportBroken, ExportBulk, ExportLinear, ExportOutline, ExportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "export-bold",
    Component: ExportBold,
    componentName: "ExportBold",
  },
  {
    variant: "broken",
    slug: "export-broken",
    Component: ExportBroken,
    componentName: "ExportBroken",
  },
  {
    variant: "bulk",
    slug: "export-bulk",
    Component: ExportBulk,
    componentName: "ExportBulk",
  },
  {
    variant: "linear",
    slug: "export-linear",
    Component: ExportLinear,
    componentName: "ExportLinear",
  },
  {
    variant: "outline",
    slug: "export-outline",
    Component: ExportOutline,
    componentName: "ExportOutline",
  },
  {
    variant: "twotone",
    slug: "export-twotone",
    Component: ExportTwotone,
    componentName: "ExportTwotone",
  },
];
