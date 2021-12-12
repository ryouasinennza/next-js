import { DocumentContext, DocumentInitialProps } from 'next/dist/shared/lib/utils'
import Document from 'next/document'
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): DocumentInitialProps | Promise<DocumentInitialProps> => {
        return originalRenderPage({
          enhanceApp:
            (App) =>
            (props): ReactElement<{ sheet: ServerStyleSheet }> =>
              sheet.collectStyles(<App {...props} />),
        })
      }

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
