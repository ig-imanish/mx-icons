import React from "react";
import Icon from "../../Icon";

export default function Sofa3Broken({
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
      <path d="M11 18H20C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14H4C2.89543 14 2 14.8954 2 16C2 17.1046 2.89543 18 4 18H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.49993 14L4.42528 13.7014C3.33845 9.35409 2.79504 7.18043 3.86584 5.67821C3.93339 5.58345 4.00504 5.49169 4.08059 5.40317C5.27824 4 7.5188 4 11.9999 4C12.7233 4 13.3883 4 14 4.0059M19.4999 14L19.5746 13.7014C20.6614 9.35409 21.2048 7.18043 20.134 5.67821C20.0665 5.58345 19.9948 5.49169 19.9193 5.40317C19.4575 4.86212 18.8406 4.52969 18 4.32545" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 20V18M4 20V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
