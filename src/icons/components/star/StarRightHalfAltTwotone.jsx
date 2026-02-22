import Icon from "../../Icon";

export default function StarRightHalfAltTwotone({
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
      <path d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28Z" fill="currentColor" fill-opacity="0">
		<animate attributeName="fill-opacity" begin="0.5s" dur="0.15s" fill="freeze" to="0.3" />
	</path>
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28" stroke-dasharray="34">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="34;0" />
		</path>
		<path d="M12 3v13" stroke-dasharray="16">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="16;0" />
		</path>
	</g>
    </Icon>
  );
}
