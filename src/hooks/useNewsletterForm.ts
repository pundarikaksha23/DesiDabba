import { useCallback, useState } from 'react'
import type { FormEvent } from 'react'
import type { FormErrors, FormStatus, NewsletterFormValues } from '../types/forms'
import { submitNewsletterForm } from '../utils/mockFormApi'
import { validateNewsletterForm } from '../utils/validation'
import { useToast } from './useToast'

const initialNewsletterFormValues: NewsletterFormValues = {
  email: '',
}

export function useNewsletterForm() {
  const [values, setValues] = useState<NewsletterFormValues>(initialNewsletterFormValues)
  const [errors, setErrors] = useState<FormErrors<NewsletterFormValues>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const { notify } = useToast()

  const updateEmail = useCallback((email: string) => {
    setValues({ email })
    setErrors({})
    setStatus('idle')
    setSubmitMessage('')
  }, [])

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const nextErrors = validateNewsletterForm(values)
      setErrors(nextErrors)

      if (Object.keys(nextErrors).length > 0) {
        const message = 'Please enter a valid email to join the list.'
        setStatus('error')
        setSubmitMessage(message)
        notify({ message, variant: 'error' })
        return
      }

      setStatus('loading')
      setSubmitMessage('')

      try {
        const response = await submitNewsletterForm(values)

        setValues(initialNewsletterFormValues)
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
    updateEmail,
    handleSubmit,
  }
}
