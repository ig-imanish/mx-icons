import MentionCircleBold from "./MentionCircleBold";
import MentionCircleBroken from "./MentionCircleBroken";
import MentionCircleBulk from "./MentionCircleBulk";
import MentionCircleLinear from "./MentionCircleLinear";
import MentionCircleOutline from "./MentionCircleOutline";
import MentionCircleTwotone from "./MentionCircleTwotone";

export { MentionCircleBold, MentionCircleBroken, MentionCircleBulk, MentionCircleLinear, MentionCircleOutline, MentionCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mention-circle-bold",
    Component: MentionCircleBold,
    componentName: "MentionCircleBold",
  },,
  {
    variant: "broken",
    slug: "mention-circle-broken",
    Component: MentionCircleBroken,
    componentName: "MentionCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "mention-circle-bulk",
    Component: MentionCircleBulk,
    componentName: "MentionCircleBulk",
  },,
  {
    variant: "linear",
    slug: "mention-circle-linear",
    Component: MentionCircleLinear,
    componentName: "MentionCircleLinear",
  },,
  {
    variant: "outline",
    slug: "mention-circle-outline",
    Component: MentionCircleOutline,
    componentName: "MentionCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "mention-circle-twotone",
    Component: MentionCircleTwotone,
    componentName: "MentionCircleTwotone",
  }
];

export default { MentionCircleBold, MentionCircleBroken, MentionCircleBulk, MentionCircleLinear, MentionCircleOutline, MentionCircleTwotone };
