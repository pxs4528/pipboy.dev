import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "pip-boy's Vault",
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
      <body className={epilogue.className}>{children}</body>
    </html>
  )
}
