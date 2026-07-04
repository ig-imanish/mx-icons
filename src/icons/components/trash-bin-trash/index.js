import TrashBinTrashBold from "./TrashBinTrashBold";
import TrashBinTrashBroken from "./TrashBinTrashBroken";
import TrashBinTrashBulk from "./TrashBinTrashBulk";
import TrashBinTrashLinear from "./TrashBinTrashLinear";
import TrashBinTrashOutline from "./TrashBinTrashOutline";
import TrashBinTrashTwotone from "./TrashBinTrashTwotone";

export { TrashBinTrashBold, TrashBinTrashBroken, TrashBinTrashBulk, TrashBinTrashLinear, TrashBinTrashOutline, TrashBinTrashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "trash-bin-trash-bold",
    Component: TrashBinTrashBold,
    componentName: "TrashBinTrashBold",
  },,
  {
    variant: "broken",
    slug: "trash-bin-trash-broken",
    Component: TrashBinTrashBroken,
    componentName: "TrashBinTrashBroken",
  },,
  {
    variant: "bulk",
    slug: "trash-bin-trash-bulk",
    Component: TrashBinTrashBulk,
    componentName: "TrashBinTrashBulk",
  },,
  {
    variant: "linear",
    slug: "trash-bin-trash-linear",
    Component: TrashBinTrashLinear,
    componentName: "TrashBinTrashLinear",
  },,
  {
    variant: "outline",
    slug: "trash-bin-trash-outline",
    Component: TrashBinTrashOutline,
    componentName: "TrashBinTrashOutline",
  },,
  {
    variant: "twotone",
    slug: "trash-bin-trash-twotone",
    Component: TrashBinTrashTwotone,
    componentName: "TrashBinTrashTwotone",
  }
];

export default { TrashBinTrashBold, TrashBinTrashBroken, TrashBinTrashBulk, TrashBinTrashLinear, TrashBinTrashOutline, TrashBinTrashTwotone };
