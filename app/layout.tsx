import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baby Shower',
  description: 'Acompáñanos a celebrar la llegada de nuestra bebé',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
