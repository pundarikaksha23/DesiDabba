import type { ContactFormValues, MockFormResponse, NewsletterFormValues } from '../types/forms'

const MOCK_DELAY_MS = 650

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function shouldMockFailure(email: string) {
  return email.toLowerCase().includes('fail')
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

export async function submitNewsletterForm(values: NewsletterFormValues): Promise<MockFormResponse> {
  await wait(MOCK_DELAY_MS)

  if (shouldMockFailure(values.email)) {
    throw new Error('We could not add you to the list right now. Please try again.')
  }

  return {
    message: 'You are on the list. We will send only thoughtful updates.',
  }
}
