import ThumbsDown from "./ThumbsDown";
import ThumbsDownFilled from "./ThumbsDownFilled";
import ThumbsDownTwotone from "./ThumbsDownTwotone";
import ThumbsUp from "./ThumbsUp";
import ThumbsUpFilled from "./ThumbsUpFilled";
import ThumbsUpTwotone from "./ThumbsUpTwotone";

export { ThumbsDown, ThumbsDownFilled, ThumbsDownTwotone, ThumbsUp, ThumbsUpFilled, ThumbsUpTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "thumbs-down",
    Component: ThumbsDown,
    componentName: "ThumbsDown",
  },
  {
    variant: "filled",
    slug: "thumbs-down-filled",
    Component: ThumbsDownFilled,
    componentName: "ThumbsDownFilled",
  },
  {
    variant: "twotone",
    slug: "thumbs-down-twotone",
    Component: ThumbsDownTwotone,
    componentName: "ThumbsDownTwotone",
  },
  {
    variant: "linear",
    slug: "thumbs-up",
    Component: ThumbsUp,
    componentName: "ThumbsUp",
  },
  {
    variant: "filled",
    slug: "thumbs-up-filled",
    Component: ThumbsUpFilled,
    componentName: "ThumbsUpFilled",
  },
  {
    variant: "twotone",
    slug: "thumbs-up-twotone",
    Component: ThumbsUpTwotone,
    componentName: "ThumbsUpTwotone",
  },
];
