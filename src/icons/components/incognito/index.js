import IncognitoBold from "./IncognitoBold";
import IncognitoBroken from "./IncognitoBroken";
import IncognitoBulk from "./IncognitoBulk";
import IncognitoLinear from "./IncognitoLinear";
import IncognitoOutline from "./IncognitoOutline";
import IncognitoTwotone from "./IncognitoTwotone";

export { IncognitoBold, IncognitoBroken, IncognitoBulk, IncognitoLinear, IncognitoOutline, IncognitoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "incognito-bold",
    Component: IncognitoBold,
    componentName: "IncognitoBold",
  },,
  {
    variant: "broken",
    slug: "incognito-broken",
    Component: IncognitoBroken,
    componentName: "IncognitoBroken",
  },,
  {
    variant: "bulk",
    slug: "incognito-bulk",
    Component: IncognitoBulk,
    componentName: "IncognitoBulk",
  },,
  {
    variant: "linear",
    slug: "incognito-linear",
    Component: IncognitoLinear,
    componentName: "IncognitoLinear",
  },,
  {
    variant: "outline",
    slug: "incognito-outline",
    Component: IncognitoOutline,
    componentName: "IncognitoOutline",
  },,
  {
    variant: "twotone",
    slug: "incognito-twotone",
    Component: IncognitoTwotone,
    componentName: "IncognitoTwotone",
  }
];

export default { IncognitoBold, IncognitoBroken, IncognitoBulk, IncognitoLinear, IncognitoOutline, IncognitoTwotone };
