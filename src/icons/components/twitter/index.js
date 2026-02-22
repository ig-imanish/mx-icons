import TwitterBold from "./TwitterBold";
import TwitterFilled from "./TwitterFilled";
import TwitterLinear from "./TwitterLinear";
import TwitterTwotone from "./TwitterTwotone";
import TwitterX from "./TwitterX";
import TwitterXAlt from "./TwitterXAlt";

export { TwitterBold, TwitterFilled, TwitterLinear, TwitterTwotone, TwitterX, TwitterXAlt };

export const variants = [
  {
    variant: "bold",
    slug: "twitter-bold",
    Component: TwitterBold,
    componentName: "TwitterBold",
  },
  {
    variant: "filled",
    slug: "twitter-filled",
    Component: TwitterFilled,
    componentName: "TwitterFilled",
  },
  {
    variant: "linear",
    slug: "twitter-linear",
    Component: TwitterLinear,
    componentName: "TwitterLinear",
  },
  {
    variant: "twotone",
    slug: "twitter-twotone",
    Component: TwitterTwotone,
    componentName: "TwitterTwotone",
  },
  {
    variant: "linear",
    slug: "twitter-x",
    Component: TwitterX,
    componentName: "TwitterX",
  },
  {
    variant: "linear",
    slug: "twitter-x-alt",
    Component: TwitterXAlt,
    componentName: "TwitterXAlt",
  },
];
