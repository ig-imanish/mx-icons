import MicrophoneBold from "./MicrophoneBold";
import MicrophoneBroken from "./MicrophoneBroken";
import MicrophoneBulk from "./MicrophoneBulk";
import MicrophoneLinear from "./MicrophoneLinear";
import MicrophoneOutline from "./MicrophoneOutline";
import MicrophoneTwotone from "./MicrophoneTwotone";

export { MicrophoneBold, MicrophoneBroken, MicrophoneBulk, MicrophoneLinear, MicrophoneOutline, MicrophoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "microphone-bold",
    Component: MicrophoneBold,
    componentName: "MicrophoneBold",
  },
  {
    variant: "broken",
    slug: "microphone-broken",
    Component: MicrophoneBroken,
    componentName: "MicrophoneBroken",
  },
  {
    variant: "bulk",
    slug: "microphone-bulk",
    Component: MicrophoneBulk,
    componentName: "MicrophoneBulk",
  },
  {
    variant: "linear",
    slug: "microphone-linear",
    Component: MicrophoneLinear,
    componentName: "MicrophoneLinear",
  },
  {
    variant: "outline",
    slug: "microphone-outline",
    Component: MicrophoneOutline,
    componentName: "MicrophoneOutline",
  },
  {
    variant: "twotone",
    slug: "microphone-twotone",
    Component: MicrophoneTwotone,
    componentName: "MicrophoneTwotone",
  },
];
