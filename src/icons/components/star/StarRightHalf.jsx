import Icon from "../../Icon";

export default function StarRightHalf({
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
      <path d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="34">
		<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="34;0" />
	</path>
    </Icon>
  );
}
