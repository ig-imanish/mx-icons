import RecoveryConvertBold from "./RecoveryConvertBold";
import RecoveryConvertBroken from "./RecoveryConvertBroken";
import RecoveryConvertBulk from "./RecoveryConvertBulk";
import RecoveryConvertLinear from "./RecoveryConvertLinear";
import RecoveryConvertOutline from "./RecoveryConvertOutline";
import RecoveryConvertTwotone from "./RecoveryConvertTwotone";

export { RecoveryConvertBold, RecoveryConvertBroken, RecoveryConvertBulk, RecoveryConvertLinear, RecoveryConvertOutline, RecoveryConvertTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "recovery-convert-bold",
    Component: RecoveryConvertBold,
    componentName: "RecoveryConvertBold",
  },
  {
    variant: "broken",
    slug: "recovery-convert-broken",
    Component: RecoveryConvertBroken,
    componentName: "RecoveryConvertBroken",
  },
  {
    variant: "bulk",
    slug: "recovery-convert-bulk",
    Component: RecoveryConvertBulk,
    componentName: "RecoveryConvertBulk",
  },
  {
    variant: "linear",
    slug: "recovery-convert-linear",
    Component: RecoveryConvertLinear,
    componentName: "RecoveryConvertLinear",
  },
  {
    variant: "outline",
    slug: "recovery-convert-outline",
    Component: RecoveryConvertOutline,
    componentName: "RecoveryConvertOutline",
  },
  {
    variant: "twotone",
    slug: "recovery-convert-twotone",
    Component: RecoveryConvertTwotone,
    componentName: "RecoveryConvertTwotone",
  },
];
