import DataBold from "./DataBold";
import DataBroken from "./DataBroken";
import DataBulk from "./DataBulk";
import DataLinear from "./DataLinear";
import DataOutline from "./DataOutline";
import DataTwotone from "./DataTwotone";

export { DataBold, DataBroken, DataBulk, DataLinear, DataOutline, DataTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "data-bold",
    Component: DataBold,
    componentName: "DataBold",
  },
  {
    variant: "broken",
    slug: "data-broken",
    Component: DataBroken,
    componentName: "DataBroken",
  },
  {
    variant: "bulk",
    slug: "data-bulk",
    Component: DataBulk,
    componentName: "DataBulk",
  },
  {
    variant: "linear",
    slug: "data-linear",
    Component: DataLinear,
    componentName: "DataLinear",
  },
  {
    variant: "outline",
    slug: "data-outline",
    Component: DataOutline,
    componentName: "DataOutline",
  },
  {
    variant: "twotone",
    slug: "data-twotone",
    Component: DataTwotone,
    componentName: "DataTwotone",
  },
];
