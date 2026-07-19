import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Aura Browser — An aura around everything you do',
  description: 'A privacy-first agentic browser. Three moods — Frost, Noir, Aurora — one calm, fast, workspace-native shell that quietly does the work for you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-theme="aurora" suppressHydrationWarning>
        {children}
        <Script src="https://unpkg.com/lucide@0.395.0/dist/umd/lucide.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
