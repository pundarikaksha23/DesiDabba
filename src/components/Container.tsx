import type { ComponentPropsWithoutRef } from 'react'

export function Container({ className = '', children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={`container-brand ${className}`} {...props}>
      {children}
    </div>
  )
}
