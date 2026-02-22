import Icon from "../../Icon";

export default function EngineOffFilled({
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
		<mask id="SVGK5z3AbOm">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z" stroke="currentColor" fill="currentColor" stroke-dasharray="42" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="42;0" />
					<animate attributeName="fill-opacity" begin="1.7s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<g fill="none">
					<g stroke="currentColor">
						<path d="M17 13h4v-3h1v8h-1v-3h-4Z" opacity="0">
							<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
							<animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze" values="M17 13h0v-3h0v8h0v-3h0Z;M17 13h4v-3h1v8h-1v-3h-4Z" />
						</path>
						<path d="M6 14h-4M2 11v6" opacity="0">
							<set attributeName="opacity" to="1" begin="0.8s" fill="freeze" />
							<animate attributeName="d" begin="0.8s" dur="0.2s" fill="freeze" values="M6 14h0M6 11v6;M6 14h-4M2 11v6" />
						</path>
						<path d="M11 9v-4M8 5h6" opacity="0">
							<set attributeName="opacity" to="1" begin="1s" fill="freeze" />
							<animate attributeName="d" begin="1s" dur="0.2s" fill="freeze" values="M11 9v0M8 9h6;M11 9v-4M8 5h6" />
						</path>
					</g>
					<path d="M0 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
						<animate attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" fill="freeze" to="0" />
					</path>
				</g>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGK5z3AbOm)" />
	<path d="M0 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
