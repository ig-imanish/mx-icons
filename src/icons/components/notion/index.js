import NotionBold from "./NotionBold";
import NotionLinear from "./NotionLinear";
import NotionMini from "./NotionMini";

export { NotionBold, NotionLinear, NotionMini };

export const variants = [
  {
    variant: "bold",
    slug: "notion-bold",
    Component: NotionBold,
    componentName: "NotionBold",
  },
  {
    variant: "linear",
    slug: "notion-linear",
    Component: NotionLinear,
    componentName: "NotionLinear",
  },
  {
    variant: "mini",
    slug: "notion-mini",
    Component: NotionMini,
    componentName: "NotionMini",
  },
];

export default { NotionBold, NotionLinear, NotionMini };
