import type { ReactNode } from 'react'

import './globals.css'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <html>
    <body>{children}</body>
  </html>
)

export default Layout
