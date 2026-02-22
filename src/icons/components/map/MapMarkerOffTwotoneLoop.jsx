import Icon from "../../Icon";

export default function MapMarkerOffTwotoneLoop({
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
		<mask id="SVGclapZcRA">
			<g fill="currentColor">
				<path d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke-dasharray="48">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="48;0" />
					<animateTransform attributeName="transform" type="rotate" dur="3s" repeatCount="indefinite" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5" />
					<animate attributeName="fill-opacity" begin="0.7s" dur="0.15s" fill="freeze" to="0.3" />
				</path>
				<circle cx="12" cy="9">
					<animate attributeName="r" begin="0.95s" dur="0.2s" fill="freeze" to="2.5" />
				</circle>
			</g>
			<path d="M-1 11h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
				<animate attributeName="stroke-dashoffset" begin="1.15s" dur="0.4s" fill="freeze" to="0" />
			</path>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGclapZcRA)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.15s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
