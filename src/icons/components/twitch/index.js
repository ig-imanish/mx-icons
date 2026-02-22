import TwitchBold from "./TwitchBold";
import TwitchLinear from "./TwitchLinear";

export { TwitchBold, TwitchLinear };

export const variants = [
  {
    variant: "bold",
    slug: "twitch-bold",
    Component: TwitchBold,
    componentName: "TwitchBold",
  },
  {
    variant: "linear",
    slug: "twitch-linear",
    Component: TwitchLinear,
    componentName: "TwitchLinear",
  },
];
