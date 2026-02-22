import Icon from "../../Icon";

export default function Question({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M7 8c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5c0 1.64 -0.79 3.09 -2 4c-0.84 0.63 -3 2 -3 5" stroke-dasharray="30">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="30;0" />
		</path>
		<path d="M12 21v0.01" stroke-dasharray="4" stroke-dashoffset="4">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
