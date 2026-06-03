import { useEffect, useRef } from 'react'

interface GivebutterWidgetProps {
  campaignId?: string
  className?: string
}

let isGivebutterScriptLoaded = false
let scriptLoadPromise: Promise<void> | null = null

export function GivebutterWidget({ campaignId, className = '' }: GivebutterWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!campaignId || !containerRef.current) return

    const originalWarn = console.warn
    console.warn = (...args: unknown[]) => {
      const message = String(args[0] || '')
      if (message.includes('iFrameSizer') && (message.includes('Deprecated') || message.includes('not found'))) {
        return
      }
      originalWarn.apply(console, args)
    }

    const initWidget = async () => {
      if (!isGivebutterScriptLoaded) {
        if (!scriptLoadPromise) {
          scriptLoadPromise = new Promise<void>((resolve) => {
            const existingScript = document.querySelector('script[src*="widgets.givebutter.com"]')
            if (existingScript) {
              resolve()
              return
            }
            const script = document.createElement('script')
            script.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=8gEghFRoQZCzGF4V&p=other'
            script.async = true
            script.onload = () => resolve()
            script.onerror = () => resolve()
            document.body.appendChild(script)
          })
        }
        await scriptLoadPromise
        isGivebutterScriptLoaded = true
      }

      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }

      const widget = document.createElement('givebutter-widget')
      widget.setAttribute('id', campaignId)
      widgetRef.current = widget
      containerRef.current?.appendChild(widget)
    }

    initWidget()

    return () => {
      if (widgetRef.current) {
        try { widgetRef.current.remove() } catch {}
        widgetRef.current = null
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
      console.warn = originalWarn
    }
  }, [campaignId])

  if (!campaignId) {
    return (
      <div className={className}>
        <div className="bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-lg p-12 text-center">
          <p className="text-neutral-600 mb-4">Givebutter Widget Placeholder</p>
          <p className="text-sm text-neutral-500">
            To activate the donation widget, add your Givebutter campaign ID.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div ref={containerRef} className="min-h-[400px]" />
    </div>
  )
}
