import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Revenue Leak Detector — Find Hidden Revenue Leaks Killing Your Startup',
  description: 'Analyze your Stripe data to identify churn patterns, failed charges, and pricing optimization opportunities. Built for SaaS founders with $10k+ MRR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c45fee16-1e9c-47a4-b9ba-cec09b9d862c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
