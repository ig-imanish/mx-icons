import React from "react";
import Icon from "../../Icon";

export default function DevicesMouseCircleBroken({
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
      <path d="M16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.5 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 10V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8.89182V3.85022C12 2.73646 11.0955 1.81254 10.0128 2.03267C5.44193 2.96194 2 7.03407 2 11.9168C2 13.7706 2.49614 15.5075 3.36182 17M16.3641 2.8419C19.7003 4.4761 22 7.92565 22 11.9168C22 17.4856 17.5228 22 12 22C10.1786 22 8.47087 21.509 7 20.651" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
