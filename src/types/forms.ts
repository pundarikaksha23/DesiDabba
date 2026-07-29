export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export type FormErrors<T> = Partial<Record<keyof T, string>>

export type ContactFormValues = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

export type NewsletterFormValues = {
  email: string
}

export type MockFormResponse = {
  message: string
}
