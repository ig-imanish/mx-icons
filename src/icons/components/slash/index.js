import SlashBold from "./SlashBold";
import SlashBroken from "./SlashBroken";
import SlashBulk from "./SlashBulk";
import SlashLinear from "./SlashLinear";
import SlashOutline from "./SlashOutline";
import SlashTwotone from "./SlashTwotone";

export { SlashBold, SlashBroken, SlashBulk, SlashLinear, SlashOutline, SlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "slash-bold",
    Component: SlashBold,
    componentName: "SlashBold",
  },
  {
    variant: "broken",
    slug: "slash-broken",
    Component: SlashBroken,
    componentName: "SlashBroken",
  },
  {
    variant: "bulk",
    slug: "slash-bulk",
    Component: SlashBulk,
    componentName: "SlashBulk",
  },
  {
    variant: "linear",
    slug: "slash-linear",
    Component: SlashLinear,
    componentName: "SlashLinear",
  },
  {
    variant: "outline",
    slug: "slash-outline",
    Component: SlashOutline,
    componentName: "SlashOutline",
  },
  {
    variant: "twotone",
    slug: "slash-twotone",
    Component: SlashTwotone,
    componentName: "SlashTwotone",
  },
];
