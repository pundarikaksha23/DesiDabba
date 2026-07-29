import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ToastContext } from '../contexts/toast'
import type { ToastInput, ToastVariant } from '../contexts/toast'

type Toast = {
  id: number
  message: string
  variant: ToastVariant
}

function toastClass(variant: ToastVariant) {
  return variant === 'success'
    ? 'border-green/20 bg-mint text-green'
    : 'border-maroon/20 bg-cream-50 text-maroon'
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const notify = useCallback(
    ({ message, variant = 'success' }: ToastInput) => {
      const id = Date.now()

      setToasts((current) => [...current, { id, message, variant }])
      window.setTimeout(() => dismiss(id), 4200)
    },
    [dismiss],
  )

  const value = useMemo(() => ({ notify }), [notify])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-4 left-4 right-4 z-50 flex flex-col items-end gap-3 sm:left-auto sm:max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto w-full rounded-md border px-4 py-3 text-sm font-semibold shadow-card ${toastClass(
              toast.variant,
            )}`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
