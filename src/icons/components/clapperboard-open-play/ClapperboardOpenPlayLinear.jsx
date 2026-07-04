import React from "react";
import Icon from "../../Icon";

export default function ClapperboardOpenPlayLinear({
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
      <path d="M4 11H16C17.8856 11 18.8284 11 19.4142 11.5858C20 12.1716 20 13.1144 20 15V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V11Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.00128 10.9997C3.51749 9.19412 3.27559 8.29135 3.48364 7.51489C3.61994 7.00622 3.88773 6.5424 4.2601 6.17003C4.82851 5.60162 5.73128 5.35973 7.53682 4.87593L14.5398 2.99949C15.213 2.8191 15.5496 2.72891 15.8445 2.70958C17.0553 2.63022 18.1946 3.28804 18.7313 4.37629C18.862 4.64129 18.9522 4.97791 19.1326 5.65114C19.1927 5.87556 19.2228 5.98776 19.2292 6.08604C19.2557 6.48964 19.0364 6.86943 18.6736 7.04832C18.5853 7.09188 18.4731 7.12195 18.2487 7.18208L4.00128 10.9997Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14.7004 2.94135L14.0627 8.28861" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.42209 4.62396L7.78433 9.97123" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 16.5C14 16.0778 13.6028 15.793 12.8084 15.2235C12.0031 14.6462 11.6005 14.3575 11.3002 14.5695C11 14.7814 11 15.3543 11 16.5C11 17.6457 11 18.2186 11.3002 18.4305C11.6005 18.6425 12.0031 18.3538 12.8084 17.7765C13.6028 17.207 14 16.9222 14 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
