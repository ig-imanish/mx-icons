import SagittariusBold from "./SagittariusBold";
import SagittariusBroken from "./SagittariusBroken";
import SagittariusBulk from "./SagittariusBulk";
import SagittariusLinear from "./SagittariusLinear";
import SagittariusOutline from "./SagittariusOutline";
import SagittariusTwotone from "./SagittariusTwotone";

export { SagittariusBold, SagittariusBroken, SagittariusBulk, SagittariusLinear, SagittariusOutline, SagittariusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sagittarius-bold",
    Component: SagittariusBold,
    componentName: "SagittariusBold",
  },
  {
    variant: "broken",
    slug: "sagittarius-broken",
    Component: SagittariusBroken,
    componentName: "SagittariusBroken",
  },
  {
    variant: "bulk",
    slug: "sagittarius-bulk",
    Component: SagittariusBulk,
    componentName: "SagittariusBulk",
  },
  {
    variant: "linear",
    slug: "sagittarius-linear",
    Component: SagittariusLinear,
    componentName: "SagittariusLinear",
  },
  {
    variant: "outline",
    slug: "sagittarius-outline",
    Component: SagittariusOutline,
    componentName: "SagittariusOutline",
  },
  {
    variant: "twotone",
    slug: "sagittarius-twotone",
    Component: SagittariusTwotone,
    componentName: "SagittariusTwotone",
  },
];
