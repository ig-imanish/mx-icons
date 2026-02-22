import ConvertBold from "./ConvertBold";
import ConvertBroken from "./ConvertBroken";
import ConvertBulk from "./ConvertBulk";
import ConvertLinear from "./ConvertLinear";
import ConvertOutline from "./ConvertOutline";
import ConvertTwotone from "./ConvertTwotone";

export { ConvertBold, ConvertBroken, ConvertBulk, ConvertLinear, ConvertOutline, ConvertTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "convert-bold",
    Component: ConvertBold,
    componentName: "ConvertBold",
  },
  {
    variant: "broken",
    slug: "convert-broken",
    Component: ConvertBroken,
    componentName: "ConvertBroken",
  },
  {
    variant: "bulk",
    slug: "convert-bulk",
    Component: ConvertBulk,
    componentName: "ConvertBulk",
  },
  {
    variant: "linear",
    slug: "convert-linear",
    Component: ConvertLinear,
    componentName: "ConvertLinear",
  },
  {
    variant: "outline",
    slug: "convert-outline",
    Component: ConvertOutline,
    componentName: "ConvertOutline",
  },
  {
    variant: "twotone",
    slug: "convert-twotone",
    Component: ConvertTwotone,
    componentName: "ConvertTwotone",
  },
];
