import GamepadChargeBold from "./GamepadChargeBold";
import GamepadChargeBroken from "./GamepadChargeBroken";
import GamepadChargeBulk from "./GamepadChargeBulk";
import GamepadChargeLinear from "./GamepadChargeLinear";
import GamepadChargeOutline from "./GamepadChargeOutline";
import GamepadChargeTwotone from "./GamepadChargeTwotone";

export { GamepadChargeBold, GamepadChargeBroken, GamepadChargeBulk, GamepadChargeLinear, GamepadChargeOutline, GamepadChargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gamepad-charge-bold",
    Component: GamepadChargeBold,
    componentName: "GamepadChargeBold",
  },,
  {
    variant: "broken",
    slug: "gamepad-charge-broken",
    Component: GamepadChargeBroken,
    componentName: "GamepadChargeBroken",
  },,
  {
    variant: "bulk",
    slug: "gamepad-charge-bulk",
    Component: GamepadChargeBulk,
    componentName: "GamepadChargeBulk",
  },,
  {
    variant: "linear",
    slug: "gamepad-charge-linear",
    Component: GamepadChargeLinear,
    componentName: "GamepadChargeLinear",
  },,
  {
    variant: "outline",
    slug: "gamepad-charge-outline",
    Component: GamepadChargeOutline,
    componentName: "GamepadChargeOutline",
  },,
  {
    variant: "twotone",
    slug: "gamepad-charge-twotone",
    Component: GamepadChargeTwotone,
    componentName: "GamepadChargeTwotone",
  }
];

export default { GamepadChargeBold, GamepadChargeBroken, GamepadChargeBulk, GamepadChargeLinear, GamepadChargeOutline, GamepadChargeTwotone };
