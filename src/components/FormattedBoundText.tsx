import React, { useEffect, useState } from 'react'
import {
  findApplicableFormatOverride,
  buildFormatOverrideStyle,
  type FormatOverrideTarget,
} from '@/lib/format-overrides'
import {
  getFormatOverrideBundle,
  subscribeFormatOverrideBundle,
} from '@/lib/format-overrides-store'

interface FormattedBoundTextProps {
  devId: string
  guard: FormatOverrideTarget
  children?: React.ReactNode
}

export function FormattedBoundText({ devId, guard, children }: FormattedBoundTextProps) {
  const [bundle, setBundle] = useState(() => getFormatOverrideBundle())

  useEffect(() => {
    return subscribeFormatOverrideBundle(() => setBundle(getFormatOverrideBundle()))
  }, [])

  const result = findApplicableFormatOverride(bundle, devId, guard)

  if (result.status === 'missing') {
    return <>{children}</>
  }

  if (result.status === 'guard-mismatch') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[format-overrides] Ignoring stale override for bound text.', { devId, expected: result.expected, actual: result.actual })
    }
    return <>{children}</>
  }

  const style = buildFormatOverrideStyle(result.marks)
  const attrs: Record<string, string> = {
    'data-airo-formatted-bound-text': 'true',
  }
  if (result.marks.bold) attrs['data-airo-format-bold'] = 'true'
  if (result.marks.italic) attrs['data-airo-format-italic'] = 'true'
  if (result.marks.color) attrs['data-airo-format-color'] = result.marks.color

  return (
    <span style={style} {...attrs}>
      {children}
    </span>
  )
}

export default FormattedBoundText
