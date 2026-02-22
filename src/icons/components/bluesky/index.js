import BlueskyFilled from "./BlueskyFilled";
import BlueskyTwotone from "./BlueskyTwotone";

export { BlueskyFilled, BlueskyTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "bluesky-filled",
    Component: BlueskyFilled,
    componentName: "BlueskyFilled",
  },
  {
    variant: "twotone",
    slug: "bluesky-twotone",
    Component: BlueskyTwotone,
    componentName: "BlueskyTwotone",
  },
];
