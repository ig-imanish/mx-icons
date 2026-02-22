import Icon from "../../Icon";

export default function MapMarkerMultipleAltOffTwotone({
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
		<mask id="SVGX5mrpdEZ">
			<g stroke-linecap="round" stroke-linejoin="round">
				<path d="M10 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" fill="currentColor" stroke-width="2" fill-opacity="0">
					<animate attributeName="d" dur="0.4s" fill="freeze" keyTimes="0;0.7;1" values="M10 20.5c0 0 -1 -1.5 -1 -2.5c0 -0.5 0.5 -1 1 -1c0.5 0 1 0.5 1 1c0 1 -1 2.5 -1 2.5Z;M10 20.5c0 0 -7 -7.5 -7 -12.5c0 -3.5 3 -7 7 -7c4 0 7 3.5 7 7c0 5 -7 12.5 -7 12.5Z;M10 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" />
					<animate attributeName="fill-opacity" begin="0.4s" dur="0.15s" fill="freeze" to="0.3" />
				</path>
				<path d="M14 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" fill="currentColor" stroke-width="4" fill-opacity="0">
					<animate attributeName="d" dur="0.4s" fill="freeze" keyTimes="0;0.7;1" values="M14 20.5c0 0 -1 -1.5 -1 -2.5c0 -0.5 0.5 -1 1 -1c0.5 0 1 0.5 1 1c0 1 -1 2.5 -1 2.5Z;M14 20.5c0 0 -7 -7.5 -7 -12.5c0 -3.5 3 -7 7 -7c4 0 7 3.5 7 7c0 5 -7 12.5 -7 12.5Z;M14 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" />
					<animate attributeName="fill-opacity" begin="0.4s" dur="0.15s" fill="freeze" to="1" />
				</path>
			</g>
			<g fill="currentColor">
				<path d="M14 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0">
					<animate attributeName="d" dur="0.4s" fill="freeze" keyTimes="0;0.7;1" values="M14 20.5c0 0 -1 -1.5 -1 -2.5c0 -0.5 0.5 -1 1 -1c0.5 0 1 0.5 1 1c0 1 -1 2.5 -1 2.5Z;M14 20.5c0 0 -7 -7.5 -7 -12.5c0 -3.5 3 -7 7 -7c4 0 7 3.5 7 7c0 5 -7 12.5 -7 12.5Z;M14 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" />
					<animate attributeName="fill-opacity" begin="0.4s" dur="0.15s" fill="freeze" to="0.3" />
				</path>
				<circle cx="14" cy="9">
					<animate attributeName="r" begin="0.65s" dur="0.2s" fill="freeze" to="2.5" />
				</circle>
			</g>
			<path d="M-1 11h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
				<animate attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" fill="freeze" to="0" />
			</path>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGX5mrpdEZ)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
