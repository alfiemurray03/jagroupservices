// Format overrides runtime helpers

export type FormatOverrideTarget = {
  file: string
  tagName: string
  sourceKind: 'bound-expression' | 'content-key'
  contentKey: string | null | undefined
  contentKeyTemplate: string | null | undefined
  expressionHash: string | null | undefined
}

export type FormatOverrideMarks = {
  bold?: boolean
  italic?: boolean
  color?: string | null
}

export type FormatOverrideEntry = {
  target: FormatOverrideTarget
  marks: FormatOverrideMarks
  updatedAt: string
}

export type FormatOverrideSidecar = {
  version: 1
  overrides: Record<string, FormatOverrideEntry>
}

export type FormatOverrideBundle = {
  version: 1
  scopes: Record<string, FormatOverrideSidecar>
}

export const EMPTY_FORMAT_OVERRIDE_BUNDLE: FormatOverrideBundle = { version: 1, scopes: {} }

export type FormatOverrideResult =
  | { status: 'missing' }
  | { status: 'applicable'; marks: FormatOverrideMarks }
  | { status: 'guard-mismatch'; expected: FormatOverrideTarget; actual: FormatOverrideTarget }

export function targetsMatch(a: FormatOverrideTarget, b: FormatOverrideTarget): boolean {
  const norm = (v: string | null | undefined) => v ?? null
  return (
    a.file === b.file &&
    a.tagName === b.tagName &&
    a.sourceKind === b.sourceKind &&
    norm(a.contentKey) === norm(b.contentKey) &&
    norm(a.contentKeyTemplate) === norm(b.contentKeyTemplate) &&
    norm(a.expressionHash) === norm(b.expressionHash)
  )
}

export function deriveFormatOverrideScope(file: string): { key: string; filePath: string } {
  const match = file.match(/^src\/pages\/([a-zA-Z0-9/_-]+)\.tsx$/)
  if (!match) return { key: 'shared', filePath: 'format-overrides/shared.json' }
  const key = `pages/${match[1]}`
  return { key, filePath: `format-overrides/${key}.json` }
}

export function findApplicableFormatOverride(
  bundle: FormatOverrideBundle,
  devId: string,
  target: FormatOverrideTarget,
): FormatOverrideResult {
  const scope = deriveFormatOverrideScope(target.file)
  const sidecar = bundle.scopes[scope.key]
  if (!sidecar) return { status: 'missing' }
  const entry = sidecar.overrides[devId]
  if (!entry) return { status: 'missing' }
  if (!entry.target || !entry.marks) {
    console.warn('[format-overrides] Ignoring malformed override entry.', { scope: scope.key, devId })
    return { status: 'missing' }
  }
  if (!targetsMatch(entry.target, target)) {
    return { status: 'guard-mismatch', expected: entry.target, actual: target }
  }
  return { status: 'applicable', marks: entry.marks }
}

export function buildFormatOverrideStyle(marks: FormatOverrideMarks): React.CSSProperties {
  const style: React.CSSProperties = {}
  if (marks.bold) style.fontWeight = 700
  if (marks.italic) style.fontStyle = 'italic'
  if (marks.color) style.color = marks.color
  return style
}
