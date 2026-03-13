export const metadata = {
  title: 'Wayfarer Performance Review',
  description: '2026 H1 Performance Review System',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
