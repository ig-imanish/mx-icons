import CircleFilled from "./CircleFilled";
import CircleFilledToConfirmCircleFilledTransition from "./CircleFilledToConfirmCircleFilledTransition";
import CircleToConfirmCircleTransition from "./CircleToConfirmCircleTransition";
import CircleToConfirmCircleTwotoneTransition from "./CircleToConfirmCircleTwotoneTransition";
import CircleTwotone from "./CircleTwotone";
import CircleTwotoneToConfirmCircleTransition from "./CircleTwotoneToConfirmCircleTransition";
import CircleTwotoneToConfirmCircleTwotoneTransition from "./CircleTwotoneToConfirmCircleTwotoneTransition";

export { CircleFilled, CircleFilledToConfirmCircleFilledTransition, CircleToConfirmCircleTransition, CircleToConfirmCircleTwotoneTransition, CircleTwotone, CircleTwotoneToConfirmCircleTransition, CircleTwotoneToConfirmCircleTwotoneTransition };

export const variants = [
  {
    variant: "filled",
    slug: "circle-filled",
    Component: CircleFilled,
    componentName: "CircleFilled",
  },
  {
    variant: "filled",
    slug: "circle-filled-to-confirm-circle-filled-transition",
    Component: CircleFilledToConfirmCircleFilledTransition,
    componentName: "CircleFilledToConfirmCircleFilledTransition",
  },
  {
    variant: "linear",
    slug: "circle-to-confirm-circle-transition",
    Component: CircleToConfirmCircleTransition,
    componentName: "CircleToConfirmCircleTransition",
  },
  {
    variant: "twotone",
    slug: "circle-to-confirm-circle-twotone-transition",
    Component: CircleToConfirmCircleTwotoneTransition,
    componentName: "CircleToConfirmCircleTwotoneTransition",
  },
  {
    variant: "twotone",
    slug: "circle-twotone",
    Component: CircleTwotone,
    componentName: "CircleTwotone",
  },
  {
    variant: "twotone",
    slug: "circle-twotone-to-confirm-circle-transition",
    Component: CircleTwotoneToConfirmCircleTransition,
    componentName: "CircleTwotoneToConfirmCircleTransition",
  },
  {
    variant: "twotone",
    slug: "circle-twotone-to-confirm-circle-twotone-transition",
    Component: CircleTwotoneToConfirmCircleTwotoneTransition,
    componentName: "CircleTwotoneToConfirmCircleTwotoneTransition",
  },
];
