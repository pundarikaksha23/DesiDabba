type WhatsappIconProps = {
  className?: string
}

export function WhatsappIcon({ className = '' }: WhatsappIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.2c0 3.4 2.9 6.3 6.3 6.3.5 0 1-.4 1-.9 0-.2-.1-.4-.3-.6l-1.2-.8c-.3-.2-.6-.1-.8.1l-.4.5c-1-.4-1.8-1.2-2.2-2.2l.5-.4c.2-.2.3-.5.1-.8l-.8-1.2c-.2-.3-.6-.4-.9-.2-.5.2-.9.6-.9 1.1Z"
        fill="currentColor"
      />
    </svg>
  )
}
