import DiscordBold from "./DiscordBold";
import DiscordLinear from "./DiscordLinear";
import DiscordTwotone from "./DiscordTwotone";

export { DiscordBold, DiscordLinear, DiscordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "discord-bold",
    Component: DiscordBold,
    componentName: "DiscordBold",
  },
  {
    variant: "linear",
    slug: "discord-linear",
    Component: DiscordLinear,
    componentName: "DiscordLinear",
  },
  {
    variant: "twotone",
    slug: "discord-twotone",
    Component: DiscordTwotone,
    componentName: "DiscordTwotone",
  },
];
