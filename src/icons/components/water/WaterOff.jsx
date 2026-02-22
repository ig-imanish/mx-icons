import Icon from "../../Icon";

export default function WaterOff({
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
		<mask id="SVGUrDGsdpT">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5" stroke="currentColor" stroke-dasharray="22">
					<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="22;0" />
				</path>
				<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGUrDGsdpT)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
