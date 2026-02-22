import Icon from "../../Icon";

export default function Iconify2Static({
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
		<mask id="SVGCnWo2dnh">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round">
				<g stroke="currentColor">
					<path d="M3.25 22.25h17.5" stroke-width="1.5" />
					<path d="M7 6v-3M5 8v11h14v-11" stroke-width="2" />
				</g>
				<path d="M12 16v4.5M12 3l8.5 5.5" stroke="currentColor" stroke-width="4" />
				<path d="M12 3l8.5 5.5" stroke="currentColor" stroke-width="2" />
				<path d="M12 3l-8.5 5.5" stroke="currentColor" stroke-width="4" />
				<path d="M12 3l-8.5 5.5M12 11.5v9" stroke="currentColor" stroke-width="2" />
			</g>
			<circle cx="12" cy="11.5" r="3.5" fill="currentColor" />
		</mask>
	</defs>
	<g fill="currentColor">
		<path d="M0 0h24v24H0z" mask="url(#SVGCnWo2dnh)" />
		<circle cx="12" cy="11.5" r="1.5" />
	</g>
    </Icon>
  );
}
