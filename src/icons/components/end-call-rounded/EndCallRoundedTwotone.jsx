import React from "react";
import Icon from "../../Icon";

export default function EndCallRoundedTwotone({
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
      <path d="M3.08289 10.5034C2.27659 11.3733 2 12.6129 2 13.8506C2 15.9105 3.78158 17.4153 5.6072 16.8975L6.9469 16.5175C8.15591 16.1746 9 14.9828 9 13.6187M20.9171 10.5034C21.7234 11.3733 22 12.6129 22 13.8506C22 15.9105 20.2184 17.4153 18.3928 16.8975L17.0531 16.5175C15.8441 16.1746 15 14.9828 15 13.6187" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M3.08301 10.5032C4.44035 9.03888 7.19334 7 12.0001 7C16.8069 7 19.5599 9.03889 20.9172 10.5032" stroke="currentColor" strokeWidth="1.5"/>
      <path opacity="0.5" d="M9 13.6185C9 13.6185 9 11.9639 12 11.9639C15 11.9639 15 13.6185 15 13.6185" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
