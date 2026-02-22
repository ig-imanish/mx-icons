import ConvertCardBold from "./ConvertCardBold";
import ConvertCardBroken from "./ConvertCardBroken";
import ConvertCardBulk from "./ConvertCardBulk";
import ConvertCardOutline from "./ConvertCardOutline";
import ConvertCardTwotone from "./ConvertCardTwotone";

export { ConvertCardBold, ConvertCardBroken, ConvertCardBulk, ConvertCardOutline, ConvertCardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "convert-card-bold",
    Component: ConvertCardBold,
    componentName: "ConvertCardBold",
  },
  {
    variant: "broken",
    slug: "convert-card-broken",
    Component: ConvertCardBroken,
    componentName: "ConvertCardBroken",
  },
  {
    variant: "bulk",
    slug: "convert-card-bulk",
    Component: ConvertCardBulk,
    componentName: "ConvertCardBulk",
  },
  {
    variant: "outline",
    slug: "convert-card-outline",
    Component: ConvertCardOutline,
    componentName: "ConvertCardOutline",
  },
  {
    variant: "twotone",
    slug: "convert-card-twotone",
    Component: ConvertCardTwotone,
    componentName: "ConvertCardTwotone",
  },
];
