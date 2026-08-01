import { renderToString } from 'react-dom/server'
import { HelmetProvider } from '@dr.pogodin/react-helmet'

export type SsrRenderResult = {
  html: string
  head: string
  status: number
  redirect?: string
}

export async function render(url: string): Promise<SsrRenderResult> {
  // Dynamically import router utilities to avoid SSR module resolution issues
  const { createStaticHandler, createStaticRouter, StaticRouterProvider } = await import(
    'react-router-dom' as string
  ) as any

  const { routes } = await import('./routes')
  const { default: RootLayout } = await import('./layouts/RootLayout')

  const handler = createStaticHandler(routes)
  const request = new Request(`http://localhost${url}`)

  let context: any
  try {
    context = await handler.query(request)
  } catch {
    return { html: '', head: '', status: 500 }
  }

  if (context instanceof Response) {
    const location = context.headers.get('Location')
    return { html: '', head: '', status: context.status, redirect: location ?? undefined }
  }

  const router = createStaticRouter(handler.dataRoutes, context)
  const helmetContext: any = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <RootLayout>
        <StaticRouterProvider router={router} context={context} />
      </RootLayout>
    </HelmetProvider>
  )

  const { helmet } = helmetContext
  const head = helmet
    ? [helmet.title?.toString(), helmet.meta?.toString(), helmet.link?.toString(), helmet.script?.toString()]
        .filter(Boolean)
        .join('\n')
    : ''

  return { html, head, status: context.statusCode ?? 200 }
}
