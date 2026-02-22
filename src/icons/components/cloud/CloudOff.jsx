import Icon from "../../Icon";

export default function CloudOff({
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
		<mask id="SVGpElOjdfK">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<g stroke="currentColor">
					<path d="M12 19h-5c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M12 19h5c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5" stroke-dasharray="22">
						<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="22;0" />
					</path>
					<path d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5" stroke-dasharray="12" stroke-dashoffset="12">
						<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" fill="freeze" to="0" />
					</path>
				</g>
				<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGpElOjdfK)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
