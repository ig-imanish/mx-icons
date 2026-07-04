import React from "react";
import Icon from "../../Icon";

export default function CircleTopDownBroken({
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
      <path d="M21 3L12 12M12 12H17.3438M12 12V6.65625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17M22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
