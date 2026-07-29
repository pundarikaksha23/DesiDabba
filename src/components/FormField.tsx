import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { useId } from 'react'

type BaseFieldProps = {
  label: string
  error?: string
  fieldId: string
  errorId: string
  children: ReactNode
}

function FieldShell({ label, error, fieldId, errorId, children }: BaseFieldProps) {
  return (
    <label className="block text-sm font-bold text-brown" htmlFor={fieldId}>
      {label}
      {children}
      {error && (
        <span id={errorId} className="mt-2 block text-xs font-semibold text-maroon">
          {error}
        </span>
      )}
    </label>
  )
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
  options: string[]
}

const fieldClass =
  'mt-2 min-h-12 w-full rounded-md border border-brown/12 bg-cream px-4 text-brown outline-none transition placeholder:text-brown/38 focus:border-gold'

/**
 * Reusable accessible text input with consistent label, focus, and error UI.
 */
export function InputField({ label, error, className = '', ...props }: InputFieldProps) {
  const generatedId = useId()
  const fieldId = props.id ?? generatedId
  const errorId = `${fieldId}-error`

  return (
    <FieldShell label={label} error={error} fieldId={fieldId} errorId={errorId}>
      <input
        id={fieldId}
        className={`${fieldClass} ${className}`}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </FieldShell>
  )
}

/**
 * Reusable textarea that matches the brand form treatment and validation UI.
 */
export function TextareaField({ label, error, className = '', ...props }: TextareaFieldProps) {
  const generatedId = useId()
  const fieldId = props.id ?? generatedId
  const errorId = `${fieldId}-error`

  return (
    <FieldShell label={label} error={error} fieldId={fieldId} errorId={errorId}>
      <textarea
        id={fieldId}
        className={`${fieldClass} min-h-32 py-3 ${className}`}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </FieldShell>
  )
}

/**
 * Reusable select field for compact option sets in service enquiry forms.
 */
export function SelectField({ label, error, options, className = '', ...props }: SelectFieldProps) {
  const generatedId = useId()
  const fieldId = props.id ?? generatedId
  const errorId = `${fieldId}-error`

  return (
    <FieldShell label={label} error={error} fieldId={fieldId} errorId={errorId}>
      <select
        id={fieldId}
        className={`${fieldClass} ${className}`}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </FieldShell>
  )
}
