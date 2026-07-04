import MeditationBold from "./MeditationBold";
import MeditationBroken from "./MeditationBroken";
import MeditationBulk from "./MeditationBulk";
import MeditationLinear from "./MeditationLinear";
import MeditationOutline from "./MeditationOutline";
import MeditationTwotone from "./MeditationTwotone";

export { MeditationBold, MeditationBroken, MeditationBulk, MeditationLinear, MeditationOutline, MeditationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "meditation-bold",
    Component: MeditationBold,
    componentName: "MeditationBold",
  },,
  {
    variant: "broken",
    slug: "meditation-broken",
    Component: MeditationBroken,
    componentName: "MeditationBroken",
  },,
  {
    variant: "bulk",
    slug: "meditation-bulk",
    Component: MeditationBulk,
    componentName: "MeditationBulk",
  },,
  {
    variant: "linear",
    slug: "meditation-linear",
    Component: MeditationLinear,
    componentName: "MeditationLinear",
  },,
  {
    variant: "outline",
    slug: "meditation-outline",
    Component: MeditationOutline,
    componentName: "MeditationOutline",
  },,
  {
    variant: "twotone",
    slug: "meditation-twotone",
    Component: MeditationTwotone,
    componentName: "MeditationTwotone",
  }
];

export default { MeditationBold, MeditationBroken, MeditationBulk, MeditationLinear, MeditationOutline, MeditationTwotone };
