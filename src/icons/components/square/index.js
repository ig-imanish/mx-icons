import SquareFilled from "./SquareFilled";
import SquareFilledToConfirmSquareFilledTransition from "./SquareFilledToConfirmSquareFilledTransition";
import SquareToConfirmSquareTransition from "./SquareToConfirmSquareTransition";
import SquareToConfirmSquareTwotoneTransition from "./SquareToConfirmSquareTwotoneTransition";
import SquareTwotone from "./SquareTwotone";
import SquareTwotoneToConfirmSquareTransition from "./SquareTwotoneToConfirmSquareTransition";
import SquareTwotoneToConfirmSquareTwotoneTransition from "./SquareTwotoneToConfirmSquareTwotoneTransition";

export { SquareFilled, SquareFilledToConfirmSquareFilledTransition, SquareToConfirmSquareTransition, SquareToConfirmSquareTwotoneTransition, SquareTwotone, SquareTwotoneToConfirmSquareTransition, SquareTwotoneToConfirmSquareTwotoneTransition };

export const variants = [
  {
    variant: "filled",
    slug: "square-filled",
    Component: SquareFilled,
    componentName: "SquareFilled",
  },
  {
    variant: "filled",
    slug: "square-filled-to-confirm-square-filled-transition",
    Component: SquareFilledToConfirmSquareFilledTransition,
    componentName: "SquareFilledToConfirmSquareFilledTransition",
  },
  {
    variant: "linear",
    slug: "square-to-confirm-square-transition",
    Component: SquareToConfirmSquareTransition,
    componentName: "SquareToConfirmSquareTransition",
  },
  {
    variant: "twotone",
    slug: "square-to-confirm-square-twotone-transition",
    Component: SquareToConfirmSquareTwotoneTransition,
    componentName: "SquareToConfirmSquareTwotoneTransition",
  },
  {
    variant: "twotone",
    slug: "square-twotone",
    Component: SquareTwotone,
    componentName: "SquareTwotone",
  },
  {
    variant: "twotone",
    slug: "square-twotone-to-confirm-square-transition",
    Component: SquareTwotoneToConfirmSquareTransition,
    componentName: "SquareTwotoneToConfirmSquareTransition",
  },
  {
    variant: "twotone",
    slug: "square-twotone-to-confirm-square-twotone-transition",
    Component: SquareTwotoneToConfirmSquareTwotoneTransition,
    componentName: "SquareTwotoneToConfirmSquareTwotoneTransition",
  },
];
