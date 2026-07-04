import React from "react";
import Icon from "../../Icon";

export default function TennisBroken({
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
      <path d="M13.1958 2.07129C13.1958 2.07129 12.9641 5.67 15.4641 10.0001C17.9641 14.3303 21.1965 15.929 21.1965 15.929M2.80347 8.07129C2.80347 8.07129 6.03588 9.67 8.53588 14.0001C11.0359 18.3303 10.8042 21.929 10.8042 21.929" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
