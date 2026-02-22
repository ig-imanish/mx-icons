import Icon from "../../Icon";

export default function ConfirmSquareFilledToSquareFilledTransition({
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
		<mask id="SVG7UMwAeaA">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z" stroke="currentColor" fill="currentColor" />
				<path d="M8 12l3 3l5 -5" stroke="currentColor" fill="none" stroke-dasharray="14">
					<animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="0;14" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG7UMwAeaA)" />
    </Icon>
  );
}
