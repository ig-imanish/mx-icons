import CardSearchBold from "./CardSearchBold";
import CardSearchBroken from "./CardSearchBroken";
import CardSearchBulk from "./CardSearchBulk";
import CardSearchLinear from "./CardSearchLinear";
import CardSearchOutline from "./CardSearchOutline";
import CardSearchTwotone from "./CardSearchTwotone";

export { CardSearchBold, CardSearchBroken, CardSearchBulk, CardSearchLinear, CardSearchOutline, CardSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-search-bold",
    Component: CardSearchBold,
    componentName: "CardSearchBold",
  },,
  {
    variant: "broken",
    slug: "card-search-broken",
    Component: CardSearchBroken,
    componentName: "CardSearchBroken",
  },,
  {
    variant: "bulk",
    slug: "card-search-bulk",
    Component: CardSearchBulk,
    componentName: "CardSearchBulk",
  },,
  {
    variant: "linear",
    slug: "card-search-linear",
    Component: CardSearchLinear,
    componentName: "CardSearchLinear",
  },,
  {
    variant: "outline",
    slug: "card-search-outline",
    Component: CardSearchOutline,
    componentName: "CardSearchOutline",
  },,
  {
    variant: "twotone",
    slug: "card-search-twotone",
    Component: CardSearchTwotone,
    componentName: "CardSearchTwotone",
  }
];

export default { CardSearchBold, CardSearchBroken, CardSearchBulk, CardSearchLinear, CardSearchOutline, CardSearchTwotone };
