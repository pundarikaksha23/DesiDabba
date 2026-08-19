import type { CateringFormValues, ContactFormValues, MockFormResponse, NewsletterFormValues } from '../types/forms'

const MOCK_DELAY_MS = 650
const CATERING_ENQUIRIES_STORAGE_KEY = 'desi-dabba-catering-enquiries'

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function shouldMockFailure(email: string) {
  return email.toLowerCase().includes('fail')
}

function storeCateringEnquiry(values: CateringFormValues) {
  if (typeof window === 'undefined' || !('localStorage' in window)) {
    return
  }

  const existing = window.localStorage.getItem(CATERING_ENQUIRIES_STORAGE_KEY)
  const enquiries = existing ? JSON.parse(existing) : []

  enquiries.push({
    ...values,
    submittedAt: new Date().toISOString(),
  })

  window.localStorage.setItem(CATERING_ENQUIRIES_STORAGE_KEY, JSON.stringify(enquiries))
}

export async function submitContactForm(values: ContactFormValues): Promise<MockFormResponse> {
  await wait(MOCK_DELAY_MS)

  if (shouldMockFailure(values.email)) {
    throw new Error('We could not send your message right now. Please try again.')
  }

  return {
    message: 'Thank you. Your details look good; we will follow up with a thoughtful next step.',
  }
}

export async function submitCateringForm(values: CateringFormValues): Promise<MockFormResponse> {
  await wait(MOCK_DELAY_MS)

  if (shouldMockFailure(values.email)) {
    throw new Error('We could not send your catering enquiry right now. Please try again.')
  }

  storeCateringEnquiry(values)

  return {
    message: 'Thank you. Your catering enquiry is with us, and we will follow up with a custom quote.',
  }
}

export async function submitNewsletterForm(values: NewsletterFormValues): Promise<MockFormResponse> {
  await wait(MOCK_DELAY_MS)

  if (shouldMockFailure(values.email)) {
    throw new Error('We could not add you to the list right now. Please try again.')
  }

  return {
    message: 'You are on the list. We will send only thoughtful updates.',
  }
}
