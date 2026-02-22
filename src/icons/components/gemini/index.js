import GeminiBold from "./GeminiBold";
import GeminiBroken from "./GeminiBroken";
import GeminiBulk from "./GeminiBulk";
import GeminiLinear from "./GeminiLinear";
import GeminiOutline from "./GeminiOutline";
import GeminiTwotone from "./GeminiTwotone";

export { GeminiBold, GeminiBroken, GeminiBulk, GeminiLinear, GeminiOutline, GeminiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gemini-bold",
    Component: GeminiBold,
    componentName: "GeminiBold",
  },
  {
    variant: "broken",
    slug: "gemini-broken",
    Component: GeminiBroken,
    componentName: "GeminiBroken",
  },
  {
    variant: "bulk",
    slug: "gemini-bulk",
    Component: GeminiBulk,
    componentName: "GeminiBulk",
  },
  {
    variant: "linear",
    slug: "gemini-linear",
    Component: GeminiLinear,
    componentName: "GeminiLinear",
  },
  {
    variant: "outline",
    slug: "gemini-outline",
    Component: GeminiOutline,
    componentName: "GeminiOutline",
  },
  {
    variant: "twotone",
    slug: "gemini-twotone",
    Component: GeminiTwotone,
    componentName: "GeminiTwotone",
  },
];
