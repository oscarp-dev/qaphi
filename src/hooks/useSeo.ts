import { useEffect } from 'react'
import { SITE_URL, DEFAULT_OG_IMAGE } from '../lib/seo'

interface SeoOptions {
  title: string
  description: string
  path: string
  image?: string
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({ title, description, path, image = DEFAULT_OG_IMAGE }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title

    setMetaTag('name', 'description', description)
    setLinkTag('canonical', url)

    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', image)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:locale', 'es_ES')
    setMetaTag('property', 'og:site_name', 'Qaphi')

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', image)
  }, [title, description, path, image])
}
