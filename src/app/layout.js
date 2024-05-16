import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Appless customer support',
  description: 'Appless customer support for all customers and products',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="xC3h4fz6ZvBHSXJc23BDTgiwdQVLG0SAnA8NqKjodHg" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7753611648248622"
     crossOrigin="anonymous"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16567684665">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'AW-16567684665');
</script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
