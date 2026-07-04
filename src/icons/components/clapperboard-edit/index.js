import ClapperboardEditBold from "./ClapperboardEditBold";
import ClapperboardEditBroken from "./ClapperboardEditBroken";
import ClapperboardEditBulk from "./ClapperboardEditBulk";
import ClapperboardEditLinear from "./ClapperboardEditLinear";
import ClapperboardEditOutline from "./ClapperboardEditOutline";
import ClapperboardEditTwotone from "./ClapperboardEditTwotone";

export { ClapperboardEditBold, ClapperboardEditBroken, ClapperboardEditBulk, ClapperboardEditLinear, ClapperboardEditOutline, ClapperboardEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clapperboard-edit-bold",
    Component: ClapperboardEditBold,
    componentName: "ClapperboardEditBold",
  },,
  {
    variant: "broken",
    slug: "clapperboard-edit-broken",
    Component: ClapperboardEditBroken,
    componentName: "ClapperboardEditBroken",
  },,
  {
    variant: "bulk",
    slug: "clapperboard-edit-bulk",
    Component: ClapperboardEditBulk,
    componentName: "ClapperboardEditBulk",
  },,
  {
    variant: "linear",
    slug: "clapperboard-edit-linear",
    Component: ClapperboardEditLinear,
    componentName: "ClapperboardEditLinear",
  },,
  {
    variant: "outline",
    slug: "clapperboard-edit-outline",
    Component: ClapperboardEditOutline,
    componentName: "ClapperboardEditOutline",
  },,
  {
    variant: "twotone",
    slug: "clapperboard-edit-twotone",
    Component: ClapperboardEditTwotone,
    componentName: "ClapperboardEditTwotone",
  }
];

export default { ClapperboardEditBold, ClapperboardEditBroken, ClapperboardEditBulk, ClapperboardEditLinear, ClapperboardEditOutline, ClapperboardEditTwotone };
