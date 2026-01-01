import "./globals.css"

export const metadata = {
  title: "Jo Yuri",
  description: "Jo Yuri",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
