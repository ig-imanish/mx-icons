import SpeakerMinimalisticBold from "./SpeakerMinimalisticBold";
import SpeakerMinimalisticBroken from "./SpeakerMinimalisticBroken";
import SpeakerMinimalisticBulk from "./SpeakerMinimalisticBulk";
import SpeakerMinimalisticLinear from "./SpeakerMinimalisticLinear";
import SpeakerMinimalisticOutline from "./SpeakerMinimalisticOutline";
import SpeakerMinimalisticTwotone from "./SpeakerMinimalisticTwotone";

export { SpeakerMinimalisticBold, SpeakerMinimalisticBroken, SpeakerMinimalisticBulk, SpeakerMinimalisticLinear, SpeakerMinimalisticOutline, SpeakerMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "speaker-minimalistic-bold",
    Component: SpeakerMinimalisticBold,
    componentName: "SpeakerMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "speaker-minimalistic-broken",
    Component: SpeakerMinimalisticBroken,
    componentName: "SpeakerMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "speaker-minimalistic-bulk",
    Component: SpeakerMinimalisticBulk,
    componentName: "SpeakerMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "speaker-minimalistic-linear",
    Component: SpeakerMinimalisticLinear,
    componentName: "SpeakerMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "speaker-minimalistic-outline",
    Component: SpeakerMinimalisticOutline,
    componentName: "SpeakerMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "speaker-minimalistic-twotone",
    Component: SpeakerMinimalisticTwotone,
    componentName: "SpeakerMinimalisticTwotone",
  }
];

export default { SpeakerMinimalisticBold, SpeakerMinimalisticBroken, SpeakerMinimalisticBulk, SpeakerMinimalisticLinear, SpeakerMinimalisticOutline, SpeakerMinimalisticTwotone };
