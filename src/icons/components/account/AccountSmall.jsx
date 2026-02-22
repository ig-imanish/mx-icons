import Icon from "../../Icon";

export default function AccountSmall({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="22">
		<path d="M6 19v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="22;0" />
		</path>
		<path d="M12 11c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z" stroke-dashoffset="22">
			<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
