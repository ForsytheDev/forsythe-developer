import React from 'react'

import { FaAnglesDown } from 'react-icons/fa6'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const Hero: React.FC = () => {
  const onScroll = (element: string) => {
    gsap.to(window, {
      duration: 0.75,
      scrollTo: { y: `#${element}`, offsetY: 90 },
      ease: 'power1',
    })
  }

  return (
    <section className="hero">
      <div className="foreground">
        <h1 className="slogan">
          Forsythe
          <span className="stroke opacity-90">Forsythe</span>
          <span className="stroke opacity-75">Forsythe</span>
          <span className="stroke opacity-50">Forsythe</span>
        </h1>
        <p className="signature">
          Modernity Junior <span>React</span> Developer
        </p>
      </div>
      <button className="down" onClick={() => onScroll('stack')}>
        <FaAnglesDown className="text-3xl opacity-80 hover:opacity-100 transition-all duration-150" />
      </button>
    </section>
  )
}
