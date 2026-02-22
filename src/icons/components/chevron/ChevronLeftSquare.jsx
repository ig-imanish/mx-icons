import Icon from "../../Icon";

export default function ChevronLeftSquare({
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
		<path d="M20 12v7c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z" stroke-dasharray="66">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="66;0" />
		</path>
		<path d="M10 12l3 -3M10 12l3 3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
