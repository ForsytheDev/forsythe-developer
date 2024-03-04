import React from 'react'
import Link from 'next/link'

import { FaGithub } from 'react-icons/fa'
import { GrFormNextLink } from 'react-icons/gr'

const projects = [
  {
    name: 'Forsythe',
    imageUrl: '/assets/forsythe.jpg',
    description:
      'Welcome to the world of React Sneakers – the frontend part of an online store for selling sports sneakers. This small application is built using the React library and incorporates the latest technologies suitable for Beginner/Junior devs.',
    technologies: ['Next.js', 'TypeScript', 'GSAP', 'SCSS', 'Tailwind CSS', 'Swiper'],
    github: 'https://github.com/ForsytheDev/forsythe-developer',
    domain: '/',
  },
  {
    name: 'React Pizzeria',
    imageUrl: '/assets/react-pizzeria.jpg',
    description:
      'Welcome to a small pet-project, the frontend part of a pizzeria! Here, we utilize the latest technologies to create delightful experiences for Junior/Junior+ devs.',
    technologies: ['React', 'React Router', 'TypeScript', 'Redux Toolkit', 'SCSS', 'Other'],
    github: 'https://github.com/ForsytheDev/react-pizzeria',
    domain: 'https://react-pizzeria-demo.vercel.app',
  },
  {
    name: 'React Sneakers',
    imageUrl: '/assets/react-sneakers.jpg',
    description:
      'Welcome to the world of React Sneakers – the frontend part of an online store for selling sports sneakers. This small application is built using the React library and incorporates the latest technologies suitable for Beginner/Junior devs.',
    technologies: ['React', 'React Router', 'SCSS', 'Axios'],
    github: 'https://github.com/ForsytheDev/react-sneakers',
    domain: 'https://react-sneakers-demo.vercel.app',
  },
]

export const Productions: React.FC = () => {
  return (
    <section className="section productions" id="features">
      <h2 className="head">Latest Features</h2>
      <div className="collection">
        {projects.map((project) => (
          <div className="production" key={project.github}>
            <Link
              className="preview"
              href={project.domain}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="cover" src={project.imageUrl} alt={project.name} />
            </Link>
            <div className="description">
              <h5 className="title">{project.name}</h5>
              <ul className="tags">
                {project.technologies.map((techology, index) => (
                  <li className="tag" key={index}>
                    {techology}
                  </li>
                ))}
              </ul>
              <p className="paragraph">{project.description}</p>
              <div className="links">
                <Link
                  className="link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </Link>
                <Link
                  className="link"
                  href={project.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open demo <GrFormNextLink className="icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
