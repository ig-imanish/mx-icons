import React from "react";
import Icon from "../../Icon";

export default function ScaleLinear({
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
      <path d="M11 2C6.94493 2.0073 4.8215 2.10686 3.46447 3.46389C2 4.92835 2 7.28538 2 11.9994C2 16.7135 2 19.0705 3.46447 20.535C4.92893 21.9994 7.28596 21.9994 12 21.9994C16.714 21.9994 19.0711 21.9994 20.5355 20.535C21.8926 19.1779 21.9921 17.0545 21.9994 12.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 11L22 2M22 2H16.6562M22 2V7.34375M21 3L12 12M12 12H16M12 12V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
