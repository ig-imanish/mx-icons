import React from "react";
import Icon from "../../Icon";

export default function GoogleDriveLinear({
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
          d="m8.8744 2.1585 6.2511 -0.0041m-6.2511 0.0041L1.0605 15.286M8.8744 2.1585l10.162 19.6871M15.1255 2.1544l7.814 13.1316m-7.814 -13.1316L4.9713 21.8456m14.0651 0H4.9713m14.0651 0 3.9031 -6.5596M4.9713 21.8456 1.0605 15.286m21.879 0H1.0605"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></path>

    </Icon>
  );
}
