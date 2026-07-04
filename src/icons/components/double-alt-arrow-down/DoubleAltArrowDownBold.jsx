import React from "react";
import Icon from "../../Icon";

export default function DoubleAltArrowDownBold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4.43057 10.5119C4.70014 10.1974 5.17361 10.161 5.48811 10.4306L12 16.0122L18.5119 10.4306C18.8264 10.161 19.2999 10.1974 19.5695 10.5119C19.839 10.8264 19.8026 11.2999 19.4881 11.5694L12.4881 17.5694C12.2072 17.8102 11.7928 17.8102 11.5119 17.5694L4.51192 11.5694C4.19743 11.2999 4.161 10.8264 4.43057 10.5119Z" fill="currentColor"/>
      <path d="M5.00005 6.25C4.68619 6.25 4.40553 6.44543 4.29664 6.73979C4.18774 7.03415 4.27366 7.36519 4.51196 7.56944L11.512 13.5694C11.7928 13.8102 12.2073 13.8102 12.4881 13.5694L19.4881 7.56944C19.7264 7.36519 19.8124 7.03415 19.7035 6.73979C19.5946 6.44543 19.3139 6.25 19 6.25H5.00005Z" fill="currentColor"/>
    </Icon>
  );
}
