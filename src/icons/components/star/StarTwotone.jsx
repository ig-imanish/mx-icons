import Icon from "../../Icon";

export default function StarTwotone({
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
      <path d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z" fill="currentColor" fill-opacity="0">
		<animate attributeName="fill-opacity" begin="0.5s" dur="0.15s" fill="freeze" to="0.3" />
	</path>
	<path d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="34">
		<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="34;0" />
	</path>
    </Icon>
  );
}
