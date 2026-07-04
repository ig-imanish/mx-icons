import React from "react";
import Icon from "../../Icon";

export default function MultipleForwardLeftBroken({
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
      <path d="M18 10.1308C16.3867 8.97671 14.5454 8.57075 13.0001 8.57075V6.22616C13.0001 5.26817 13.0001 4.78917 12.7049 4.65662C12.4098 4.52407 12.0517 4.8423 11.3357 5.47875L7.36344 9.00968C5.79482 10.404 5.0105 11.1012 5.0105 11.9993C5.0105 12.8975 5.79481 13.5946 7.36344 14.989L11.3357 18.5199C12.0517 19.1563 12.4098 19.4746 12.7049 19.342C13.0001 19.2095 13.0001 18.7305 13.0001 17.7725V15.4279C16.6001 15.4279 20.5001 17.1422 22.0001 19.9993C22.0001 17.5676 21.6228 15.621 21 14.0735" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.46129 4.5L3.24509 9.34362C2.45098 10.081 1.99976 11.1158 1.99976 12.1994C1.99976 13.3418 2.50097 14.4266 3.37087 15.1671L8.46129 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
