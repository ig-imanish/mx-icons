import GamepadBold from "./GamepadBold";
import GamepadBroken from "./GamepadBroken";
import GamepadBulk from "./GamepadBulk";
import GamepadLinear from "./GamepadLinear";
import GamepadOutline from "./GamepadOutline";
import GamepadTwotone from "./GamepadTwotone";

export { GamepadBold, GamepadBroken, GamepadBulk, GamepadLinear, GamepadOutline, GamepadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gamepad-bold",
    Component: GamepadBold,
    componentName: "GamepadBold",
  },,
  {
    variant: "broken",
    slug: "gamepad-broken",
    Component: GamepadBroken,
    componentName: "GamepadBroken",
  },,
  {
    variant: "bulk",
    slug: "gamepad-bulk",
    Component: GamepadBulk,
    componentName: "GamepadBulk",
  },,
  {
    variant: "linear",
    slug: "gamepad-linear",
    Component: GamepadLinear,
    componentName: "GamepadLinear",
  },,
  {
    variant: "outline",
    slug: "gamepad-outline",
    Component: GamepadOutline,
    componentName: "GamepadOutline",
  },,
  {
    variant: "twotone",
    slug: "gamepad-twotone",
    Component: GamepadTwotone,
    componentName: "GamepadTwotone",
  }
];

export default { GamepadBold, GamepadBroken, GamepadBulk, GamepadLinear, GamepadOutline, GamepadTwotone };
