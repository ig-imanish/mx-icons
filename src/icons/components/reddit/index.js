import RedditCircle from "./RedditCircle";
import RedditCircleLoop from "./RedditCircleLoop";
import RedditLoop from "./RedditLoop";

export { RedditCircle, RedditCircleLoop, RedditLoop };

export const variants = [
  {
    variant: "linear",
    slug: "reddit-circle",
    Component: RedditCircle,
    componentName: "RedditCircle",
  },
  {
    variant: "linear",
    slug: "reddit-circle-loop",
    Component: RedditCircleLoop,
    componentName: "RedditCircleLoop",
  },
  {
    variant: "linear",
    slug: "reddit-loop",
    Component: RedditLoop,
    componentName: "RedditLoop",
  },
];
