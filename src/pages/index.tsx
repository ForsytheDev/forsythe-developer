import React from 'react'
import Head from 'next/head'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import {
  Header,
  Hero,
  Stack,
  Productions,
  Skills,
  Roadmap,
  Resources,
  Footer,
  Anchor,
} from '@/components'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  React.useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      const sections: HTMLElement[] = gsap.utils.toArray('.section')
      const technologies: HTMLElement[] = gsap.utils.toArray('.stack .category')
      const productions: HTMLElement[] = gsap.utils.toArray('.productions .production')
      const skills: HTMLElement[] = gsap.utils.toArray('.skills .item')
      const roadmap: HTMLElement[] = gsap.utils.toArray('.roadmap .timeline')
      const resources: HTMLElement[] = gsap.utils.toArray('.resources .item')

      gsap.fromTo(
        '.hero',
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero',
            start: 'top',
            end: 'center',
            scrub: true,
          },
        }
      )

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 100 },
          {
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      technologies.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      productions.forEach((item) => {
        gsap.fromTo(
          item,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      skills.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      roadmap.forEach((item) => {
        gsap.fromTo(
          item,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      resources.forEach((item) => {
        gsap.fromTo(
          item,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Forsythe.im</title>
      </Head>
      <div className="container">
        <Header />
        <Hero />
        <Stack />
        <Productions />
        <Skills />
        <Roadmap />
        <Resources />
        <Footer />
        <Anchor />
      </div>
    </>
  )
}
