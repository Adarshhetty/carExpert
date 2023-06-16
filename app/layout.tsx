import { Footer, Navbar } from '@/Components'
import './globals.css'


export const metadata = {
  title: 'Car Expert',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>{children}<Footer/></body>
    </html>
  )
}