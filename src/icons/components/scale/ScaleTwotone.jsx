import React from "react";
import Icon from "../../Icon";

export default function ScaleTwotone({
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
      <path opacity="0.5" d="M11.0002 2C6.94518 2.0073 4.82174 2.10686 3.46471 3.46389C2.00024 4.92835 2.00024 7.28538 2.00024 11.9994C2.00024 16.7135 2.00024 19.0705 3.46471 20.535C4.92918 21.9994 7.2862 21.9994 12.0002 21.9994C16.7143 21.9994 19.0713 21.9994 20.5358 20.535C21.8928 19.1779 21.9924 17.0545 21.9997 12.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 11L22 2M22 2H16.6562M22 2V7.34375M21 3L12 12M12 12H16M12 12V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
