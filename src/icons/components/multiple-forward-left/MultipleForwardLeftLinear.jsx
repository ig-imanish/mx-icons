import React from "react";
import Icon from "../../Icon";

export default function MultipleForwardLeftLinear({
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
      <path d="M11.3355 5.47875L7.3632 9.00968C5.79457 10.404 5.01025 11.1012 5.01025 11.9993C5.01025 12.8975 5.79457 13.5946 7.3632 14.989L11.3355 18.5199C12.0515 19.1563 12.4095 19.4746 12.7047 19.342C12.9999 19.2095 12.9999 18.7305 12.9999 17.7725V15.4279C16.5999 15.4279 20.4999 17.1422 21.9999 19.9993C21.9999 10.8565 16.6665 8.57075 12.9999 8.57075V6.22616C12.9999 5.26817 12.9999 4.78917 12.7047 4.65662C12.4095 4.52407 12.0515 4.8423 11.3355 5.47875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.46154 4.5L3.24533 9.34362C2.45122 10.081 2 11.1158 2 12.1994C2 13.3418 2.50122 14.4266 3.37112 15.1671L8.46154 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
