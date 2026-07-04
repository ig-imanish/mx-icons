import React from "react";
import Icon from "../../Icon";

export default function DownloadBroken({
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
      <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
