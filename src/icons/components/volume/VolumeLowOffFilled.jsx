import Icon from "../../Icon";

export default function VolumeLowOffFilled({
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
		<mask id="SVGYOH7le6z">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M8 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z" stroke="currentColor" fill="currentColor" stroke-dasharray="34" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="34;0" />
					<animate attributeName="fill-opacity" begin="0.4s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M-1 11h26" stroke="currentColor" fill="none" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGYOH7le6z)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
