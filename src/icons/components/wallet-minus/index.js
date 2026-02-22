import WalletMinusBold from "./WalletMinusBold";
import WalletMinusBroken from "./WalletMinusBroken";
import WalletMinusBulk from "./WalletMinusBulk";
import WalletMinusLinear from "./WalletMinusLinear";
import WalletMinusOutline from "./WalletMinusOutline";
import WalletMinusTwotone from "./WalletMinusTwotone";

export { WalletMinusBold, WalletMinusBroken, WalletMinusBulk, WalletMinusLinear, WalletMinusOutline, WalletMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-minus-bold",
    Component: WalletMinusBold,
    componentName: "WalletMinusBold",
  },
  {
    variant: "broken",
    slug: "wallet-minus-broken",
    Component: WalletMinusBroken,
    componentName: "WalletMinusBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-minus-bulk",
    Component: WalletMinusBulk,
    componentName: "WalletMinusBulk",
  },
  {
    variant: "linear",
    slug: "wallet-minus-linear",
    Component: WalletMinusLinear,
    componentName: "WalletMinusLinear",
  },
  {
    variant: "outline",
    slug: "wallet-minus-outline",
    Component: WalletMinusOutline,
    componentName: "WalletMinusOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-minus-twotone",
    Component: WalletMinusTwotone,
    componentName: "WalletMinusTwotone",
  },
];
