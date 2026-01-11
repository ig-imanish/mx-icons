import React from "react";
import Icon from "../../Icon";

export default function GoogleDriveBulk({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >

      <path
        opacity="0.4"
        fill="currentColor"
        d="M15.053 2.108A2.498 2.498 0 0 0 14.328 2H9.672c-0.25 0 -0.493 0.037 -0.725 0.108L12 7.069l3.053 -4.961Z"
      />

      <path
        opacity="0.6"
        fill="currentColor"
        d="M7.707 2.955c-0.08 0.101 -0.152 0.21 -0.216 0.323l-5.91 10.553a2.5 2.5 0 0 0 -0.186 0.419h6.186l3.538 -5.75 -3.412 -5.545ZM1.362 15.75c0.041 0.144 0.096 0.285 0.164 0.421L3.5 20.118c0.068 0.135 0.147 0.263 0.235 0.381l2.923 -4.749H1.362Z"
      />

      <path
        opacity="0.8"
        fill="currentColor"
        d="M5.957 21.376a2.5 2.5 0 0 0 0.779 0.124h12.528c0.269 0 0.531 -0.043 0.779 -0.124L15.58 15.75H8.419l-3.462 5.626Z"
      />

      <path
        fill="currentColor"
        d="M20.265 20.499a2.58 2.58 0 0 0 0.235 -0.381l1.974 -3.947a2.43 2.43 0 0 0 0.164 -0.421h-5.296l2.923 4.75ZM22.605 14.25h-6.186L12.881 8.5l3.412 -5.545c0.08 0.101 0.152 0.21 0.216 0.323l5.91 10.553c0.075 0.135 0.137 0.275 0.186 0.419Z"
      />
    </Icon>
  );
}
