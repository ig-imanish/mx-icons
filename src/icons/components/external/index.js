import ExternalLink from "./ExternalLink";
import ExternalLinkRounded from "./ExternalLinkRounded";

export { ExternalLink, ExternalLinkRounded };

export const variants = [
  {
    variant: "linear",
    slug: "external-link",
    Component: ExternalLink,
    componentName: "ExternalLink",
  },
  {
    variant: "linear",
    slug: "external-link-rounded",
    Component: ExternalLinkRounded,
    componentName: "ExternalLinkRounded",
  },
];
