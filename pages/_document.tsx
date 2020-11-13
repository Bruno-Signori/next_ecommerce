import Document, {DocumentProps, Head, Html, Main, NextScript} from 'next/document';

class MyDocumnet extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
      <Head>
        <meta charSet="utf-8"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocumnet;