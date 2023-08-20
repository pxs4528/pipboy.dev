import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import AuthProvider from './context/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "parth's Vault",
}

import localFont from '@next/font/local'
const epilogue = localFont({ src : '../public/fonts/Epilogue-Regular.otf', display: 'swap'});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>\
        <AuthProvider>
        {children}
        <Analytics  />
        </AuthProvider>
      </body>
    </html>
  )
}