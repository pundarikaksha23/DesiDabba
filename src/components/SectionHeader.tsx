type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'center' | 'left'
  inverse?: boolean
  titleAs?: 'h1' | 'h2'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  inverse = false,
  titleAs: Title = 'h2',
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <Title className={`display-lg mt-3 ${inverse ? 'text-cream-50' : 'text-brown'}`}>{title}</Title>
      <p className={`body-lg mt-4 ${inverse ? 'text-cream-50/72' : 'text-brown/70'}`}>{description}</p>
    </div>
  )
}
