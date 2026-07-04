import MicrophoneLargeBold from "./MicrophoneLargeBold";
import MicrophoneLargeBroken from "./MicrophoneLargeBroken";
import MicrophoneLargeBulk from "./MicrophoneLargeBulk";
import MicrophoneLargeLinear from "./MicrophoneLargeLinear";
import MicrophoneLargeOutline from "./MicrophoneLargeOutline";
import MicrophoneLargeTwotone from "./MicrophoneLargeTwotone";

export { MicrophoneLargeBold, MicrophoneLargeBroken, MicrophoneLargeBulk, MicrophoneLargeLinear, MicrophoneLargeOutline, MicrophoneLargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "microphone-large-bold",
    Component: MicrophoneLargeBold,
    componentName: "MicrophoneLargeBold",
  },,
  {
    variant: "broken",
    slug: "microphone-large-broken",
    Component: MicrophoneLargeBroken,
    componentName: "MicrophoneLargeBroken",
  },,
  {
    variant: "bulk",
    slug: "microphone-large-bulk",
    Component: MicrophoneLargeBulk,
    componentName: "MicrophoneLargeBulk",
  },,
  {
    variant: "linear",
    slug: "microphone-large-linear",
    Component: MicrophoneLargeLinear,
    componentName: "MicrophoneLargeLinear",
  },,
  {
    variant: "outline",
    slug: "microphone-large-outline",
    Component: MicrophoneLargeOutline,
    componentName: "MicrophoneLargeOutline",
  },,
  {
    variant: "twotone",
    slug: "microphone-large-twotone",
    Component: MicrophoneLargeTwotone,
    componentName: "MicrophoneLargeTwotone",
  }
];

export default { MicrophoneLargeBold, MicrophoneLargeBroken, MicrophoneLargeBulk, MicrophoneLargeLinear, MicrophoneLargeOutline, MicrophoneLargeTwotone };
