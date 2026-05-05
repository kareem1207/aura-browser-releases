import './globals.css'

export const metadata = {
  title: 'Aura Browser — The Browser Built for You',
  description: 'A privacy-first, feature-rich browser built on Electron. Canvas mode, advanced privacy suite, and a workspace OS for how you actually work.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
