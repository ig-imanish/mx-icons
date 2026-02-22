import Icon from "../../Icon";

export default function Facebook({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
		<path d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12" stroke-dasharray="24">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="24;0" />
		</path>
		<path d="M8 12h7" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
