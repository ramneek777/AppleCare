import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apple customer support',
  description: 'Apple customer support for all customers and products',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="xC3h4fz6ZvBHSXJc23BDTgiwdQVLG0SAnA8NqKjodHg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
