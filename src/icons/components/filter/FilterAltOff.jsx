import Icon from "../../Icon";

export default function FilterAltOff({
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
		<mask id="SVG72S2tbcF">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<g stroke="currentColor">
					<path d="M4 7h16" stroke-dasharray="18">
						<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="18;0" />
					</path>
					<path d="M7 12h10" stroke-dasharray="12" stroke-dashoffset="12">
						<animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" to="0" />
					</path>
					<path d="M11 17h2" stroke-dasharray="4" stroke-dashoffset="4">
						<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" fill="freeze" to="0" />
					</path>
				</g>
				<path d="M0 11h24" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="26" stroke-dashoffset="26">
					<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG72S2tbcF)" />
	<path d="M0 13h24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="26" stroke-dashoffset="26">
		<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
