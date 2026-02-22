import Icon from "../../Icon";

export default function VolumeLowOff({
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
		<mask id="SVG7SIjzcgC">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M8 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z" stroke="currentColor" stroke-dasharray="34">
					<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="34;0" />
				</path>
				<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG7SIjzcgC)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
