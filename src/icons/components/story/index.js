import StoryBold from "./StoryBold";
import StoryBroken from "./StoryBroken";
import StoryBulk from "./StoryBulk";
import StoryLinear from "./StoryLinear";
import StoryOutline from "./StoryOutline";
import StoryTwotone from "./StoryTwotone";

export { StoryBold, StoryBroken, StoryBulk, StoryLinear, StoryOutline, StoryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "story-bold",
    Component: StoryBold,
    componentName: "StoryBold",
  },
  {
    variant: "broken",
    slug: "story-broken",
    Component: StoryBroken,
    componentName: "StoryBroken",
  },
  {
    variant: "bulk",
    slug: "story-bulk",
    Component: StoryBulk,
    componentName: "StoryBulk",
  },
  {
    variant: "linear",
    slug: "story-linear",
    Component: StoryLinear,
    componentName: "StoryLinear",
  },
  {
    variant: "outline",
    slug: "story-outline",
    Component: StoryOutline,
    componentName: "StoryOutline",
  },
  {
    variant: "twotone",
    slug: "story-twotone",
    Component: StoryTwotone,
    componentName: "StoryTwotone",
  },
];
