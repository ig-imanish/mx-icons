import Icon from "../../Icon";

export default function MapMarkerMultiple({
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
      <defs>
		<mask id="SVGGQuzLc4B">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48">
				<path d="M10 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" fill="none" stroke-width="2">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0" />
				</path>
				<path d="M14 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" fill="currentColor" stroke-width="4">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGGQuzLc4B)" />
	<path d="M14 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0" />
	</path>
	<circle cx="14" cy="9" fill="currentColor">
		<animate attributeName="r" begin="0.7s" dur="0.2s" fill="freeze" to="2.5" />
	</circle>
    </Icon>
  );
}
