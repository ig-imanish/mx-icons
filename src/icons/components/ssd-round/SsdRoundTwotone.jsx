import React from "react";
import Icon from "../../Icon";

export default function SsdRoundTwotone({
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
      <path d="M21.5534 15.4813L19 5.11765C18.5 3.52941 17.6046 3 16.5 3H7.5C6.39543 3 5.5 3.52941 5 5.11765L2.44664 15.4813M21.5534 15.4813C20.9538 14.3515 19.8111 13.5882 18.5 13.5882H5.5C4.18893 13.5882 3.04623 14.3515 2.44664 15.4813M21.5534 15.4813C21.8378 16.0172 22 16.6356 22 17.2941C22 19.3408 20.433 21 18.5 21H5.5C3.567 21 2 19.3408 2 17.2941C2 16.6356 2.16221 16.0172 2.44664 15.4813" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M18 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M15.5 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M13 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M10.5 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
