import MastodonFilled from "./MastodonFilled";
import MastodonTwotone from "./MastodonTwotone";

export { MastodonFilled, MastodonTwotone };

export const variants = [
  {
    variant: "filled",
    slug: "mastodon-filled",
    Component: MastodonFilled,
    componentName: "MastodonFilled",
  },
  {
    variant: "twotone",
    slug: "mastodon-twotone",
    Component: MastodonTwotone,
    componentName: "MastodonTwotone",
  },
];
