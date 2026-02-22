import Icon from "../../Icon";

export default function ArrowsLongDiagonalRotated({
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
		<path d="M12 12l8.5 8.5M12 12l-8.5 -8.5" stroke-dasharray="16">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="16;0" />
		</path>
		<path d="M3 3h8M21 21v-8M3 3v8M21 21h-8" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
