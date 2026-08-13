import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type ConsentStatus = 'accepted' | 'rejected' | null

const STORAGE_KEY = 'qaphi-cookie-consent'

interface CookieConsentValue {
  status: ConsentStatus
  accept: () => void
  reject: () => void
  openPreferences: () => void
}

const CookieConsentContext = createContext<CookieConsentValue | null>(null)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted' || stored === 'rejected') setStatus(stored)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setStatus('accepted')
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setStatus('rejected')
  }

  const openPreferences = () => {
    localStorage.removeItem(STORAGE_KEY)
    setStatus(null)
  }

  return (
    <CookieConsentContext.Provider value={{ status, accept, reject, openPreferences }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  return ctx
}
