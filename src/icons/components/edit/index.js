import EditBold from "./EditBold";
import EditBroken from "./EditBroken";
import EditBulk from "./EditBulk";
import EditFilled from "./EditFilled";
import EditFullFilled from "./EditFullFilled";
import EditFullTwotone from "./EditFullTwotone";
import EditLinear from "./EditLinear";
import EditOutline from "./EditOutline";
import EditTwotone from "./EditTwotone";

export { EditBold, EditBroken, EditBulk, EditFilled, EditFullFilled, EditFullTwotone, EditLinear, EditOutline, EditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "edit-bold",
    Component: EditBold,
    componentName: "EditBold",
  },
  {
    variant: "broken",
    slug: "edit-broken",
    Component: EditBroken,
    componentName: "EditBroken",
  },
  {
    variant: "bulk",
    slug: "edit-bulk",
    Component: EditBulk,
    componentName: "EditBulk",
  },
  {
    variant: "filled",
    slug: "edit-filled",
    Component: EditFilled,
    componentName: "EditFilled",
  },
  {
    variant: "filled",
    slug: "edit-full-filled",
    Component: EditFullFilled,
    componentName: "EditFullFilled",
  },
  {
    variant: "twotone",
    slug: "edit-full-twotone",
    Component: EditFullTwotone,
    componentName: "EditFullTwotone",
  },
  {
    variant: "linear",
    slug: "edit-linear",
    Component: EditLinear,
    componentName: "EditLinear",
  },
  {
    variant: "outline",
    slug: "edit-outline",
    Component: EditOutline,
    componentName: "EditOutline",
  },
  {
    variant: "twotone",
    slug: "edit-twotone",
    Component: EditTwotone,
    componentName: "EditTwotone",
  },
];
