import CommandBold from "./CommandBold";
import CommandBroken from "./CommandBroken";
import CommandBulk from "./CommandBulk";
import CommandLinear from "./CommandLinear";
import CommandOutline from "./CommandOutline";
import CommandTwotone from "./CommandTwotone";

export { CommandBold, CommandBroken, CommandBulk, CommandLinear, CommandOutline, CommandTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "command-bold",
    Component: CommandBold,
    componentName: "CommandBold",
  },
  {
    variant: "broken",
    slug: "command-broken",
    Component: CommandBroken,
    componentName: "CommandBroken",
  },
  {
    variant: "bulk",
    slug: "command-bulk",
    Component: CommandBulk,
    componentName: "CommandBulk",
  },
  {
    variant: "linear",
    slug: "command-linear",
    Component: CommandLinear,
    componentName: "CommandLinear",
  },
  {
    variant: "outline",
    slug: "command-outline",
    Component: CommandOutline,
    componentName: "CommandOutline",
  },
  {
    variant: "twotone",
    slug: "command-twotone",
    Component: CommandTwotone,
    componentName: "CommandTwotone",
  },
];
