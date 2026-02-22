import Icon from "../../Icon";

export default function ImageFilled({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M3 14v-9h18v14h-18v-5" stroke-width="2" stroke-dasharray="66">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="66;0" />
		</path>
		<path d="M3 16l4 -3l3 2l6 -5l5 4" stroke-dasharray="26" stroke-dashoffset="26">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" fill="freeze" to="0" />
		</path>
	</g>
	<g fill="currentColor">
		<circle cx="7.5" cy="9.5" r="1.5" opacity="0">
			<animate attributeName="opacity" begin="1s" dur="0.2s" fill="freeze" to="1" />
		</circle>
		<path d="M3 16l4 -3l3 2l6 -5l5 4v5h-18Z" fill-opacity="0">
			<animate attributeName="fill-opacity" begin="1.2s" dur="0.4s" fill="freeze" to="1" />
		</path>
	</g>
    </Icon>
  );
}
