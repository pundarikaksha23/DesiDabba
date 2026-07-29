import { createContext } from 'react'

export type ToastVariant = 'success' | 'error'

export type ToastInput = {
  message: string
  variant?: ToastVariant
}

export type ToastContextValue = {
  notify: (toast: ToastInput) => void
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined)
