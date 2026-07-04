import React from "react";
import Icon from "../../Icon";

export default function AccumulatorBroken({
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
      <path d="M10 20H8C5.17157 20 3.75736 20 2.87868 19.1213C2 18.2426 2 16.8284 2 14V11.9751C2 10.1294 2 9.20663 2.39219 8.51698C2.65908 8.04767 3.04767 7.65908 3.51698 7.39219C4.20663 7 5.12945 7 6.97508 7H7.25464C7.37758 7 7.43905 7 7.49576 6.9935C7.79166 6.95961 8.05705 6.79559 8.21969 6.54609C8.25086 6.49827 8.27836 6.44328 8.33333 6.33333C8.44329 6.11342 8.49827 6.00346 8.56062 5.90782C8.8859 5.40882 9.41668 5.08078 10.0085 5.01299C10.1219 5 10.2448 5 10.4907 5H13.5093C13.7552 5 13.8781 5 13.9915 5.01299C14.5833 5.08078 15.1141 5.40882 15.4394 5.90782C15.5017 6.00345 15.5567 6.11345 15.6667 6.33333C15.7216 6.44329 15.7491 6.49827 15.7803 6.54609C15.943 6.79559 16.2083 6.95961 16.5042 6.9935C16.561 7 16.6224 7 16.7454 7H17.0249C18.8706 7 19.7934 7 20.483 7.39219C20.9523 7.65908 21.3409 8.04767 21.6078 8.51698C22 9.20663 22 10.1294 22 11.9751V14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 7V6C7 5.05719 7 4.58579 6.70711 4.29289C6.41421 4 5.94281 4 5 4M3 7.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 6V8M17 7V6C17 5.05719 17 4.58579 17.2929 4.29289C17.5858 4 18.0572 4 19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 13.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 13.5L16.5 13.5M16.5 13.5L15 13.5M16.5 13.5L16.5 12M16.5 13.5L16.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
