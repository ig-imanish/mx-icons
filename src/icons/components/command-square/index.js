import CommandSquareBold from "./CommandSquareBold";
import CommandSquareBroken from "./CommandSquareBroken";
import CommandSquareBulk from "./CommandSquareBulk";
import CommandSquareLinear from "./CommandSquareLinear";
import CommandSquareOutline from "./CommandSquareOutline";
import CommandSquareTwotone from "./CommandSquareTwotone";

export { CommandSquareBold, CommandSquareBroken, CommandSquareBulk, CommandSquareLinear, CommandSquareOutline, CommandSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "command-square-bold",
    Component: CommandSquareBold,
    componentName: "CommandSquareBold",
  },
  {
    variant: "broken",
    slug: "command-square-broken",
    Component: CommandSquareBroken,
    componentName: "CommandSquareBroken",
  },
  {
    variant: "bulk",
    slug: "command-square-bulk",
    Component: CommandSquareBulk,
    componentName: "CommandSquareBulk",
  },
  {
    variant: "linear",
    slug: "command-square-linear",
    Component: CommandSquareLinear,
    componentName: "CommandSquareLinear",
  },
  {
    variant: "outline",
    slug: "command-square-outline",
    Component: CommandSquareOutline,
    componentName: "CommandSquareOutline",
  },
  {
    variant: "twotone",
    slug: "command-square-twotone",
    Component: CommandSquareTwotone,
    componentName: "CommandSquareTwotone",
  },
];
