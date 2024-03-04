import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav>
        <span>Copyright © ForsytheDev 2024</span>
        <span>
          <Link href="mailto:forsythe.dev@gmail.com">forsythe.dev@gmail.com</Link>
        </span>
      </nav>
    </footer>
  )
}
