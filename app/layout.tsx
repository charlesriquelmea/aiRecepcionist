import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'PROTOLYLAT — AI Receptionist 2.0 for MedSpas',
  description:
    'We install AI agent systems that capture, qualify, and book every lead in under 60 seconds. Serving NYC MedSpas and beyond.',
  generator: 'v0.app',

  icons: {
    icon: 'favicon.png',
    apple: 'favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#07070A] text-[#F5F5F0]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
