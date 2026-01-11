import React from "react";
import Icon from "../../Icon";

export default function GmailBold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M1 6.5A2.5 2.5 0 0 1 3.5 4h0.782a2.5 2.5 0 0 1 1.442 0.458l1.276 0.9v7.514L1 8.437V6.5Zm0 3.802V20h6v-5.263l-6 -4.435Zm16 4.435V20h6v-9.698l-6 4.435Zm6 -6.3V6.5A2.5 2.5 0 0 0 20.5 4h-0.782a2.5 2.5 0 0 0 -1.442 0.458l-1.276 0.9v7.514l6 -4.435Zm-7.5 -2.02L12 8.888l-3.5 -2.47v7.562l3.5 2.587 3.5 -2.587V6.417Z"
        clip-rule="evenodd"
        stroke-width="1"
      ></path>
    </Icon>
  );
}
