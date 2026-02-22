import Icon from "../../Icon";

export default function MonitorSmallOffFilled({
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
		<mask id="SVGEuwYscWq">
			<g fill="currentColor">
				<path d="M12 17h-8v-14h16v14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="62" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
					<animate attributeName="fill-opacity" begin="1.2s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M10 16h4v0h-4Z">
					<animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze" to="M10 16h4v6h-4Z" />
				</path>
			</g>
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 21h3M12 21h-3" stroke="currentColor" stroke-dasharray="6" stroke-dashoffset="6">
					<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" fill="freeze" to="0" />
				</path>
				<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="1.7s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGEuwYscWq)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.7s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
