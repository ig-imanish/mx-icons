import React from "react";
import Icon from "../../Icon";

export default function ArchiveDownMinimalisticBroken({
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
      <path d="M2 12.0002C2 7.28611 2 4.92909 3.46447 3.46462C4.70529 2.2238 6.58687 2.03431 10 2.00537M22 12.0002C22 7.28611 22 4.92909 20.5355 3.46462C19.2947 2.2238 17.4131 2.03431 14 2.00537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 22C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 11L12 17M12 17L14.5 14.5M12 17L9.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
