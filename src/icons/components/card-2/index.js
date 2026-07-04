import Card2Bold from "./Card2Bold";
import Card2Broken from "./Card2Broken";
import Card2Bulk from "./Card2Bulk";
import Card2Linear from "./Card2Linear";
import Card2Outline from "./Card2Outline";
import Card2Twotone from "./Card2Twotone";

export { Card2Bold, Card2Broken, Card2Bulk, Card2Linear, Card2Outline, Card2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-2-bold",
    Component: Card2Bold,
    componentName: "Card2Bold",
  },,
  {
    variant: "broken",
    slug: "card-2-broken",
    Component: Card2Broken,
    componentName: "Card2Broken",
  },,
  {
    variant: "bulk",
    slug: "card-2-bulk",
    Component: Card2Bulk,
    componentName: "Card2Bulk",
  },,
  {
    variant: "linear",
    slug: "card-2-linear",
    Component: Card2Linear,
    componentName: "Card2Linear",
  },,
  {
    variant: "outline",
    slug: "card-2-outline",
    Component: Card2Outline,
    componentName: "Card2Outline",
  },,
  {
    variant: "twotone",
    slug: "card-2-twotone",
    Component: Card2Twotone,
    componentName: "Card2Twotone",
  }
];

export default { Card2Bold, Card2Broken, Card2Bulk, Card2Linear, Card2Outline, Card2Twotone };
