export const PHONE = '+34678817917'
export const PHONE_DISPLAY = '+34 678 81 79 17'

export const PARTNER_PHONE = '+34671253989'

export function whatsappUrl(message: string, phone = PHONE) {
  return `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`
}
