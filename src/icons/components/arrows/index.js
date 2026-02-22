import ArrowsDiagonal from "./ArrowsDiagonal";
import ArrowsDiagonalRotated from "./ArrowsDiagonalRotated";
import ArrowsHorizontal from "./ArrowsHorizontal";
import ArrowsHorizontalAlt from "./ArrowsHorizontalAlt";
import ArrowsLongDiagonal from "./ArrowsLongDiagonal";
import ArrowsLongDiagonalRotated from "./ArrowsLongDiagonalRotated";
import ArrowsVertical from "./ArrowsVertical";
import ArrowsVerticalAlt from "./ArrowsVerticalAlt";

export { ArrowsDiagonal, ArrowsDiagonalRotated, ArrowsHorizontal, ArrowsHorizontalAlt, ArrowsLongDiagonal, ArrowsLongDiagonalRotated, ArrowsVertical, ArrowsVerticalAlt };

export const variants = [
  {
    variant: "linear",
    slug: "arrows-diagonal",
    Component: ArrowsDiagonal,
    componentName: "ArrowsDiagonal",
  },
  {
    variant: "linear",
    slug: "arrows-diagonal-rotated",
    Component: ArrowsDiagonalRotated,
    componentName: "ArrowsDiagonalRotated",
  },
  {
    variant: "linear",
    slug: "arrows-horizontal",
    Component: ArrowsHorizontal,
    componentName: "ArrowsHorizontal",
  },
  {
    variant: "linear",
    slug: "arrows-horizontal-alt",
    Component: ArrowsHorizontalAlt,
    componentName: "ArrowsHorizontalAlt",
  },
  {
    variant: "linear",
    slug: "arrows-long-diagonal",
    Component: ArrowsLongDiagonal,
    componentName: "ArrowsLongDiagonal",
  },
  {
    variant: "linear",
    slug: "arrows-long-diagonal-rotated",
    Component: ArrowsLongDiagonalRotated,
    componentName: "ArrowsLongDiagonalRotated",
  },
  {
    variant: "linear",
    slug: "arrows-vertical",
    Component: ArrowsVertical,
    componentName: "ArrowsVertical",
  },
  {
    variant: "linear",
    slug: "arrows-vertical-alt",
    Component: ArrowsVerticalAlt,
    componentName: "ArrowsVerticalAlt",
  },
];
