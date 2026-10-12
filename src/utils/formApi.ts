import { site } from '../config/site'
import type { ContactFormValues, FormResponse, NewsletterFormValues } from '../types/forms'

const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`

type FormSubmitResult = {
  success?: boolean | string
  message?: string
}

function isFormSubmitResult(value: unknown): value is FormSubmitResult {
  return typeof value === 'object' && value !== null
}

async function submitForm(
  values: Record<string, string>,
  subject: string,
  errorMessage: string,
): Promise<void> {
  const response = await fetch(FORM_SUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...values, _subject: subject, _template: 'table' }),
  })
  const payload: unknown = await response.json()
  const result = isFormSubmitResult(payload) ? payload : {}

  if (!response.ok || (result.success !== true && result.success !== 'true')) {
    throw new Error(typeof result.message === 'string' ? result.message : errorMessage)
  }
}

export async function submitContactForm(values: ContactFormValues): Promise<FormResponse> {
  await submitForm(
    { ...values, _replyto: values.email },
    `Contact enquiry - ${values.interest}`,
    'We could not send your message right now. Please try again.',
  )

  return {
    message: 'Thank you. Your message has been sent; we will follow up with a thoughtful next step.',
  }
}

export async function submitNewsletterForm(values: NewsletterFormValues): Promise<FormResponse> {
  await submitForm(
    { ...values, _replyto: values.email },
    'Weekly meals newsletter signup',
    'We could not send your signup right now. Please try again.',
  )

  return {
    message: 'Thanks for your interest. We will follow up with thoughtful updates.',
  }
}
