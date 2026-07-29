import type { FaqItem } from '../types/content'

export const contactFaq: FaqItem[] = [
  {
    question: 'How quickly do you reply?',
    answer: 'We usually respond within one business day. For urgent catering dates, WhatsApp is the fastest route.',
  },
  {
    question: 'Can I ask about a custom menu?',
    answer: 'Yes. Share the occasion, guest count, dietary needs, and any regional references you care about.',
  },
  {
    question: 'Do you confirm delivery areas before booking?',
    answer: 'Yes. We confirm address, timing, and delivery fit before a weekly plan or event booking is finalized.',
  },
]

export const openingHours = [
  ['Monday-Friday', '9 AM - 6 PM'],
  ['Saturday', '10 AM - 3 PM'],
  ['Sunday', 'Closed for prep'],
] as const
