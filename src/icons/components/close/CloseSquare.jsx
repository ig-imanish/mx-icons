import Icon from "../../Icon";

export default function CloseSquare({
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
		<path d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z" stroke-dasharray="66">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="66;0" />
		</path>
		<path d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
