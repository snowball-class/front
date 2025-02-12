import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import Modal from '@/components/ui/modal'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  preload: false,
})

export const metadata: Metadata = {
  title: 'Snowball',
  description: 'This is Snowball Content',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body>
        <Modal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
