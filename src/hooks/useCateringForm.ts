import { useCallback, useState } from 'react'
import type { FormEvent } from 'react'
import type { CateringFormValues, FormErrors, FormStatus } from '../types/forms'
import { submitCateringForm } from '../utils/mockFormApi'
import { validateCateringForm } from '../utils/validation'
import { useToast } from './useToast'

export const initialCateringFormValues: CateringFormValues = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  location: '',
  occasion: 'Small get-together',
  dietaryNeeds: '',
  notes: '',
}

export function useCateringForm() {
  const [values, setValues] = useState<CateringFormValues>(initialCateringFormValues)
  const [errors, setErrors] = useState<FormErrors<CateringFormValues>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const { notify } = useToast()

  const updateValue = useCallback((field: keyof CateringFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus('idle')
    setSubmitMessage('')
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const nextErrors = validateCateringForm(values)
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
        const response = await submitCateringForm(values)

        setValues(initialCateringFormValues)
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
