import ConfettiBold from "./ConfettiBold";
import ConfettiBroken from "./ConfettiBroken";
import ConfettiBulk from "./ConfettiBulk";
import ConfettiLinear from "./ConfettiLinear";
import ConfettiOutline from "./ConfettiOutline";
import ConfettiTwotone from "./ConfettiTwotone";

export { ConfettiBold, ConfettiBroken, ConfettiBulk, ConfettiLinear, ConfettiOutline, ConfettiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "confetti-bold",
    Component: ConfettiBold,
    componentName: "ConfettiBold",
  },,
  {
    variant: "broken",
    slug: "confetti-broken",
    Component: ConfettiBroken,
    componentName: "ConfettiBroken",
  },,
  {
    variant: "bulk",
    slug: "confetti-bulk",
    Component: ConfettiBulk,
    componentName: "ConfettiBulk",
  },,
  {
    variant: "linear",
    slug: "confetti-linear",
    Component: ConfettiLinear,
    componentName: "ConfettiLinear",
  },,
  {
    variant: "outline",
    slug: "confetti-outline",
    Component: ConfettiOutline,
    componentName: "ConfettiOutline",
  },,
  {
    variant: "twotone",
    slug: "confetti-twotone",
    Component: ConfettiTwotone,
    componentName: "ConfettiTwotone",
  }
];

export default { ConfettiBold, ConfettiBroken, ConfettiBulk, ConfettiLinear, ConfettiOutline, ConfettiTwotone };
