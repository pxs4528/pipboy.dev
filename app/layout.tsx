import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import AuthProvider from './context/AuthProvider';
import localFont from '@next/font/local'


export const metadata: Metadata = {
  title: "parth's Vault",
}

const chillax = localFont({
  src: [
    {
      path: '../public/fonts/Chillax-Regular.otf',
      weight: 'normal',
    },
    {
      path: '../public/fonts/Chillax-Bold.otf',
      weight: 'bold',
    },
  ],
  variable: '--font-chillax',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${chillax.variable} font-sans`}>
      <body>
        <AuthProvider>
        {children}
        <Analytics  />
        </AuthProvider>
      </body>
    </html>
  )
}