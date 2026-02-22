import PaintDrop from "./PaintDrop";
import PaintDropFilled from "./PaintDropFilled";
import PaintDropHalfFilled from "./PaintDropHalfFilled";
import PaintDropHalfFilledTwotone from "./PaintDropHalfFilledTwotone";
import PaintDropHalfTwotone from "./PaintDropHalfTwotone";
import PaintDropTwotone from "./PaintDropTwotone";

export { PaintDrop, PaintDropFilled, PaintDropHalfFilled, PaintDropHalfFilledTwotone, PaintDropHalfTwotone, PaintDropTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "paint-drop",
    Component: PaintDrop,
    componentName: "PaintDrop",
  },
  {
    variant: "filled",
    slug: "paint-drop-filled",
    Component: PaintDropFilled,
    componentName: "PaintDropFilled",
  },
  {
    variant: "filled",
    slug: "paint-drop-half-filled",
    Component: PaintDropHalfFilled,
    componentName: "PaintDropHalfFilled",
  },
  {
    variant: "twotone",
    slug: "paint-drop-half-filled-twotone",
    Component: PaintDropHalfFilledTwotone,
    componentName: "PaintDropHalfFilledTwotone",
  },
  {
    variant: "twotone",
    slug: "paint-drop-half-twotone",
    Component: PaintDropHalfTwotone,
    componentName: "PaintDropHalfTwotone",
  },
  {
    variant: "twotone",
    slug: "paint-drop-twotone",
    Component: PaintDropTwotone,
    componentName: "PaintDropTwotone",
  },
];
