import ItHashtagBold from "./ItHashtagBold";
import ItHashtagBroken from "./ItHashtagBroken";
import ItHashtagBulk from "./ItHashtagBulk";
import ItHashtagLinear from "./ItHashtagLinear";
import ItHashtagOutline from "./ItHashtagOutline";
import ItHashtagTwotone from "./ItHashtagTwotone";

export { ItHashtagBold, ItHashtagBroken, ItHashtagBulk, ItHashtagLinear, ItHashtagOutline, ItHashtagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "it-hashtag-bold",
    Component: ItHashtagBold,
    componentName: "ItHashtagBold",
  },,
  {
    variant: "broken",
    slug: "it-hashtag-broken",
    Component: ItHashtagBroken,
    componentName: "ItHashtagBroken",
  },,
  {
    variant: "bulk",
    slug: "it-hashtag-bulk",
    Component: ItHashtagBulk,
    componentName: "ItHashtagBulk",
  },,
  {
    variant: "linear",
    slug: "it-hashtag-linear",
    Component: ItHashtagLinear,
    componentName: "ItHashtagLinear",
  },,
  {
    variant: "outline",
    slug: "it-hashtag-outline",
    Component: ItHashtagOutline,
    componentName: "ItHashtagOutline",
  },,
  {
    variant: "twotone",
    slug: "it-hashtag-twotone",
    Component: ItHashtagTwotone,
    componentName: "ItHashtagTwotone",
  }
];

export default { ItHashtagBold, ItHashtagBroken, ItHashtagBulk, ItHashtagLinear, ItHashtagOutline, ItHashtagTwotone };
