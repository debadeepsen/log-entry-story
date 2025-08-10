import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Elysium Anomaly',
  description: 'Written by ChatGPT and Google Gemini'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
