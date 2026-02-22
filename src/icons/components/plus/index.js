import PlusCircle from "./PlusCircle";
import PlusCircleFilled from "./PlusCircleFilled";
import PlusCircleTwotone from "./PlusCircleTwotone";
import PlusSquare from "./PlusSquare";
import PlusSquareFilled from "./PlusSquareFilled";
import PlusSquareTwotone from "./PlusSquareTwotone";

export { PlusCircle, PlusCircleFilled, PlusCircleTwotone, PlusSquare, PlusSquareFilled, PlusSquareTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "plus-circle",
    Component: PlusCircle,
    componentName: "PlusCircle",
  },
  {
    variant: "filled",
    slug: "plus-circle-filled",
    Component: PlusCircleFilled,
    componentName: "PlusCircleFilled",
  },
  {
    variant: "twotone",
    slug: "plus-circle-twotone",
    Component: PlusCircleTwotone,
    componentName: "PlusCircleTwotone",
  },
  {
    variant: "linear",
    slug: "plus-square",
    Component: PlusSquare,
    componentName: "PlusSquare",
  },
  {
    variant: "filled",
    slug: "plus-square-filled",
    Component: PlusSquareFilled,
    componentName: "PlusSquareFilled",
  },
  {
    variant: "twotone",
    slug: "plus-square-twotone",
    Component: PlusSquareTwotone,
    componentName: "PlusSquareTwotone",
  },
];
