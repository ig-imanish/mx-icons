import Icon from "../../Icon";

export default function ChatAlertOff({
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
		<mask id="SVGaDebxcYc">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<g stroke="currentColor">
					<path d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z" stroke-dasharray="70">
						<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="70;0" />
					</path>
					<g stroke-dasharray="4">
						<path d="M12 7v2" stroke-dashoffset="4">
							<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
						</path>
						<path d="M12 13v0.01" stroke-dashoffset="4">
							<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
						</path>
					</g>
				</g>
				<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGaDebxcYc)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
