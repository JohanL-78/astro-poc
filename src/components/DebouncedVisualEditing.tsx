import { VisualEditing } from '@sanity/visual-editing/react'

export default function DebouncedVisualEditing() {
  return (
    <VisualEditing
      portal
      refresh={() => Promise.resolve()}
    />
  )
}
