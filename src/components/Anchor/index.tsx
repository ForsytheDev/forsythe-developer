import React from 'react'

import { GoArrowUp } from 'react-icons/go'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const Anchor: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      '.anchor',
      { opacity: 0 },
      {
        opacity: 0.85,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top',
          end: 'center',
          scrub: true,
        },
      }
    )
  }, [])

  const onScroll = () => {
    gsap.to(window, {
      duration: 0.35,
      scrollTo: { y: 0 },
      ease: 'power2',
    })
  }

  return (
    <button className="anchor" onClick={onScroll}>
      <GoArrowUp className="text-3xl" />
    </button>
  )
}
