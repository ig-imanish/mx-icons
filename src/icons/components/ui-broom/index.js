import UiBroomBold from "./UiBroomBold";
import UiBroomBroken from "./UiBroomBroken";
import UiBroomBulk from "./UiBroomBulk";
import UiBroomLinear from "./UiBroomLinear";
import UiBroomOutline from "./UiBroomOutline";
import UiBroomTwotone from "./UiBroomTwotone";

export { UiBroomBold, UiBroomBroken, UiBroomBulk, UiBroomLinear, UiBroomOutline, UiBroomTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-broom-bold",
    Component: UiBroomBold,
    componentName: "UiBroomBold",
  },,
  {
    variant: "broken",
    slug: "ui-broom-broken",
    Component: UiBroomBroken,
    componentName: "UiBroomBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-broom-bulk",
    Component: UiBroomBulk,
    componentName: "UiBroomBulk",
  },,
  {
    variant: "linear",
    slug: "ui-broom-linear",
    Component: UiBroomLinear,
    componentName: "UiBroomLinear",
  },,
  {
    variant: "outline",
    slug: "ui-broom-outline",
    Component: UiBroomOutline,
    componentName: "UiBroomOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-broom-twotone",
    Component: UiBroomTwotone,
    componentName: "UiBroomTwotone",
  }
];

export default { UiBroomBold, UiBroomBroken, UiBroomBulk, UiBroomLinear, UiBroomOutline, UiBroomTwotone };
