import React from "react";
import Icon from "../../Icon";

export default function Sofa3Linear({
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
      <path d="M4 18H20C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14H4C2.89543 14 2 14.8954 2 16C2 17.1046 2.89543 18 4 18Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.49993 14L4.42528 13.7014C3.33845 9.35409 2.79504 7.18043 3.86584 5.67821C3.93339 5.58345 4.00504 5.49169 4.08059 5.40317C5.27824 4 7.5188 4 11.9999 4C16.4811 4 18.7216 4 19.9193 5.40317C19.9948 5.49169 20.0665 5.58345 20.134 5.67821C21.2048 7.18043 20.6614 9.35409 19.5746 13.7014L19.4999 14" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 20V18M4 20V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
