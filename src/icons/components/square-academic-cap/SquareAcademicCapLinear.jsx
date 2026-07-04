import React from "react";
import Icon from "../../Icon";

export default function SquareAcademicCapLinear({
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
      <path d="M9.78272 3.49965C11.2037 2.83345 12.7962 2.83345 14.2172 3.49965L20.9084 6.63664C22.3639 7.31899 22.3639 9.68105 20.9084 10.3634L14.2173 13.5004C12.7963 14.1665 11.2038 14.1665 9.78281 13.5004L3.0916 10.3634C1.63613 9.68101 1.63614 7.31895 3.0916 6.63659L9.78272 3.49965Z" stroke="#1C274D" strokeWidth="1.5"/>
      <path d="M2 8.5V14" stroke="#1C274D" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5" stroke="#1C274D" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
