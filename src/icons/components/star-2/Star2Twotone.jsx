import React from "react";
import Icon from "../../Icon";

export default function Star2Twotone({
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
      <path d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M17.6569 6.34277L15.9599 8.03983M8.04029 15.9594L6.34323 17.6565M6.34302 6.34295L8.04007 8.04001M15.9597 15.9596L17.6567 17.6567" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
