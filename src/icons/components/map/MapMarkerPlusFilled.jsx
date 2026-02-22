import Icon from "../../Icon";

export default function MapMarkerPlusFilled({
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
		<mask id="SVG418omcDn">
			<path d="M9 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0" />
				<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<circle cx="9" cy="9" fill="currentColor">
				<animate attributeName="r" begin="1.1s" dur="0.2s" fill="freeze" to="2.5" />
			</circle>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG418omcDn)" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="8">
		<path d="M16 18h6" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M19 15v6" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
