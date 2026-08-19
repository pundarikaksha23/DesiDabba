import type { CateringFormValues, ContactFormValues, FormErrors, NewsletterFormValues } from '../types/forms'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[\d\s()+-]{7,}$/

export function isBlank(value: string) {
  return value.trim().length === 0
}

export function isValidEmail(value: string) {
  return emailPattern.test(value.trim())
}

export function isValidPhone(value: string) {
  return phonePattern.test(value.trim())
}

export function hasMinimumLength(value: string, length: number) {
  return value.trim().length >= length
}

export function validateContactForm(values: ContactFormValues) {
  const errors: FormErrors<ContactFormValues> = {}

  if (isBlank(values.name)) {
    errors.name = 'Please enter your name.'
  }

  if (isBlank(values.email)) {
    errors.email = 'Please enter your email.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!isBlank(values.phone) && !isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (isBlank(values.message)) {
    errors.message = 'Please tell us a little about what you need.'
  } else if (!hasMinimumLength(values.message, 12)) {
    errors.message = 'Please add a few more details.'
  }

  return errors
}

export function validateCateringForm(values: CateringFormValues) {
  const errors: FormErrors<CateringFormValues> = {}

  if (isBlank(values.name)) {
    errors.name = 'Please enter your name.'
  }

  if (isBlank(values.email)) {
    errors.email = 'Please enter your email.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (isBlank(values.phone)) {
    errors.phone = 'Please enter your phone or WhatsApp number.'
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (isBlank(values.eventDate)) {
    errors.eventDate = 'Please choose your event date.'
  }

  if (isBlank(values.guestCount)) {
    errors.guestCount = 'Please enter the expected guest count.'
  } else if (!/^\d+$/.test(values.guestCount.trim()) || Number(values.guestCount) < 1) {
    errors.guestCount = 'Please enter a valid guest count.'
  }

  if (isBlank(values.location)) {
    errors.location = 'Please enter the event location.'
  }

  if (isBlank(values.occasion)) {
    errors.occasion = 'Please select the occasion.'
  }

  if (isBlank(values.notes)) {
    errors.notes = 'Please tell us a little about the event.'
  } else if (!hasMinimumLength(values.notes, 12)) {
    errors.notes = 'Please add a few more details.'
  }

  return errors
}

export function validateNewsletterForm(values: NewsletterFormValues) {
  const errors: FormErrors<NewsletterFormValues> = {}

  if (isBlank(values.email)) {
    errors.email = 'Please enter your email.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  return errors
}
