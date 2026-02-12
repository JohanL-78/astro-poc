import { useRef, useCallback } from 'react'
import { VisualEditing } from '@sanity/visual-editing/react'

export default function DebouncedVisualEditing() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const refresh = useCallback(() => {
    return new Promise<void>((resolve) => {
      // Clear any pending reload
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      // Wait 3s of inactivity before reloading
      timeoutRef.current = setTimeout(() => {
        window.location.reload()
      }, 3000)
      // Resolve immediately so the Presentation tool stays connected
      resolve()
    })
  }, [])

  return <VisualEditing portal refresh={refresh} />
}
