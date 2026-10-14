export const PHONE = '+34678817917'
export const PHONE_DISPLAY = '+34 678 81 79 17'

export function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(message)}`
}
