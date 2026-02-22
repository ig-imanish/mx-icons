import UndoBold from "./UndoBold";
import UndoBroken from "./UndoBroken";
import UndoBulk from "./UndoBulk";
import UndoLinear from "./UndoLinear";
import UndoOutline from "./UndoOutline";
import UndoTwotone from "./UndoTwotone";

export { UndoBold, UndoBroken, UndoBulk, UndoLinear, UndoOutline, UndoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "undo-bold",
    Component: UndoBold,
    componentName: "UndoBold",
  },
  {
    variant: "broken",
    slug: "undo-broken",
    Component: UndoBroken,
    componentName: "UndoBroken",
  },
  {
    variant: "bulk",
    slug: "undo-bulk",
    Component: UndoBulk,
    componentName: "UndoBulk",
  },
  {
    variant: "linear",
    slug: "undo-linear",
    Component: UndoLinear,
    componentName: "UndoLinear",
  },
  {
    variant: "outline",
    slug: "undo-outline",
    Component: UndoOutline,
    componentName: "UndoOutline",
  },
  {
    variant: "twotone",
    slug: "undo-twotone",
    Component: UndoTwotone,
    componentName: "UndoTwotone",
  },
];
