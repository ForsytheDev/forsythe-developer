import React from 'react'
import Link from 'next/link'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const Header: React.FC = () => {
  const onScroll = (element: string) => {
    gsap.to(window, {
      duration: 0.55,
      scrollTo: { y: `#${element}`, offsetY: 90 },
      ease: 'power2',
    })
  }

  return (
    <header className="header">
      <nav>
        <Link className="logotype" href="/">
          <h5>Forsythe</h5>
          <span>.im</span>
        </Link>
        <ul className="menu">
          <li className="item" onClick={() => onScroll('features')}>
            Features
          </li>
          <li className="item" onClick={() => onScroll('skills')}>
            Skills
          </li>
          <li className="item" onClick={() => onScroll('roadmap')}>
            Roadmap
          </li>
          <li className="item" onClick={() => onScroll('resources')}>
            Resources
          </li>
        </ul>
      </nav>
    </header>
  )
}
