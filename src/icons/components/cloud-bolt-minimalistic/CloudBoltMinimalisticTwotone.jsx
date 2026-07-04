import React from "react";
import Icon from "../../Icon";

export default function CloudBoltMinimalisticTwotone({
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
      <path opacity="0.5" d="M6.28571 18C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887M14.381 7.02721C14.9767 6.81911 15.6178 6.70588 16.2857 6.70588C16.9404 6.70588 17.5693 6.81468 18.1551 7.01498M7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498M7.11616 9.60887C7.68059 9.71839 8.20528 9.9374 8.66667 10.2426M18.1551 7.01498C20.393 7.78024 22 9.88113 22 12.3529C22 15.0599 20.0726 17.3221 17.5 17.8722" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 22.0002L14.2857 18.3078H10L14.2857 14.6152" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
