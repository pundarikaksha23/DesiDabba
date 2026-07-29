import { useCallback, useState } from 'react'
import type { FormEvent } from 'react'
import type { ContactFormValues, FormErrors, FormStatus } from '../types/forms'
import { submitContactForm } from '../utils/mockFormApi'
import { validateContactForm } from '../utils/validation'
import { useToast } from './useToast'

export const initialContactFormValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  interest: 'Weekly Meals',
  message: '',
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues)
  const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const { notify } = useToast()

  const updateValue = useCallback((field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus('idle')
    setSubmitMessage('')
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const nextErrors = validateContactForm(values)
      setErrors(nextErrors)

      if (Object.keys(nextErrors).length > 0) {
        const message = 'Please review the highlighted fields.'
        setStatus('error')
        setSubmitMessage(message)
        notify({ message, variant: 'error' })
        return
      }

      setStatus('loading')
      setSubmitMessage('')

      try {
        const response = await submitContactForm(values)

        setValues(initialContactFormValues)
        setErrors({})
        setStatus('success')
        setSubmitMessage(response.message)
        notify({ message: response.message })
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.'

        setStatus('error')
        setSubmitMessage(message)
        notify({ message, variant: 'error' })
      }
    },
    [notify, values],
  )

  return {
    values,
    errors,
    status,
    submitMessage,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    updateValue,
    handleSubmit,
  }
}
