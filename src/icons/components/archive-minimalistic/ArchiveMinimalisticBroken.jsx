import React from "react";
import Icon from "../../Icon";

export default function ArchiveMinimalisticBroken({
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
      <path d="M9.5 14.4L10.9286 16L14.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 11.9997C2 7.28562 2 4.9286 3.46447 3.46413C4.70529 2.22331 6.58687 2.03382 10 2.00488M22 11.9997C22 7.28562 22 4.9286 20.5355 3.46413C19.2947 2.22331 17.4131 2.03382 14 2.00488" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 22C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
