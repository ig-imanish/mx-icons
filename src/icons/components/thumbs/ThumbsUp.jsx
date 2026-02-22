import Icon from "../../Icon";

export default function ThumbsUp({
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
      <path d="M7 11l5 -8l3 1l-1 6h7v3l-3 7h-11h-4v-9h4v9" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="76">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="76;0" />
	</path>
    </Icon>
  );
}
