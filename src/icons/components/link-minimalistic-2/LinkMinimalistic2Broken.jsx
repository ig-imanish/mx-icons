import React from "react";
import Icon from "../../Icon";

export default function LinkMinimalistic2Broken({
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
      <path d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.8374 14.1625L14.1625 9.8374" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151M18.4876 14.1625L19.2084 13.4417C20.4324 12.2177 21.0292 10.604 20.9988 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
