import Icon from "../../Icon";

export default function ArrowsDiagonalRotated({
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
		<path d="M14 14l6.5 6.5M10 10l-6.5 -6.5" stroke-dasharray="12">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="12;0" />
		</path>
		<path d="M3 3h6M21 21v-6M3 3v6M21 21h-6" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
