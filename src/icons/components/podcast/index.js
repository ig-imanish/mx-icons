import PodcastBold from "./PodcastBold";
import PodcastBroken from "./PodcastBroken";
import PodcastBulk from "./PodcastBulk";
import PodcastLinear from "./PodcastLinear";
import PodcastOutline from "./PodcastOutline";
import PodcastTwotone from "./PodcastTwotone";

export { PodcastBold, PodcastBroken, PodcastBulk, PodcastLinear, PodcastOutline, PodcastTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "podcast-bold",
    Component: PodcastBold,
    componentName: "PodcastBold",
  },,
  {
    variant: "broken",
    slug: "podcast-broken",
    Component: PodcastBroken,
    componentName: "PodcastBroken",
  },,
  {
    variant: "bulk",
    slug: "podcast-bulk",
    Component: PodcastBulk,
    componentName: "PodcastBulk",
  },,
  {
    variant: "linear",
    slug: "podcast-linear",
    Component: PodcastLinear,
    componentName: "PodcastLinear",
  },,
  {
    variant: "outline",
    slug: "podcast-outline",
    Component: PodcastOutline,
    componentName: "PodcastOutline",
  },,
  {
    variant: "twotone",
    slug: "podcast-twotone",
    Component: PodcastTwotone,
    componentName: "PodcastTwotone",
  }
];

export default { PodcastBold, PodcastBroken, PodcastBulk, PodcastLinear, PodcastOutline, PodcastTwotone };
