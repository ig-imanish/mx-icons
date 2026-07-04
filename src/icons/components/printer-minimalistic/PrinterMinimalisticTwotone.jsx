import React from "react";
import Icon from "../../Icon";

export default function PrinterMinimalisticTwotone({
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
      <path d="M6 17.9827C4.44655 17.9359 3.51998 17.7626 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H16C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.48 17.7626 19.5535 17.9359 18 17.9827" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18 12V16C18 18.8284 18 20.2426 17.1213 21.1213C16.2426 22 14.8284 22 12 22C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M17.9829 6C17.9361 4.44655 17.7629 3.51998 17.1216 2.87868C16.2429 2 14.8287 2 12.0003 2C9.17183 2 7.75761 2 6.87893 2.87868C6.23763 3.51998 6.06438 4.44655 6.01758 6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19.5 12.4434C17.8729 11.7128 15.4115 11.0003 12 11.0003C8.58854 11.0003 6.12712 11.7128 4.5 12.4434" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
