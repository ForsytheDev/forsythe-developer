import React from 'react'

type TechType = {
  name: string
  imageUrl: string
}

const intermediate: TechType[] = [
  {
    name: 'HTML5',
    imageUrl: '/assets/html5.svg',
  },
  {
    name: 'CSS3',
    imageUrl: '/assets/css3.svg',
  },
  {
    name: 'JavaScript',
    imageUrl: '/assets/javascript.svg',
  },
  {
    name: 'React',
    imageUrl: '/assets/react.svg',
  },
  {
    name: 'Sass',
    imageUrl: '/assets/sass.svg',
  },
  {
    name: 'Yarn',
    imageUrl: '/assets/yarn.svg',
  },
  {
    name: 'Tailwind CSS',
    imageUrl: '/assets/tailwind.svg',
  },
]

const basics: TechType[] = [
  {
    name: 'TypeScript',
    imageUrl: '/assets/typescript.svg',
  },
  {
    name: 'Next',
    imageUrl: '/assets/nextjs.svg',
  },
  {
    name: 'Redux Toolkit',
    imageUrl: '/assets/redux.svg',
  },
  {
    name: 'React Router',
    imageUrl: '/assets/react-router.svg',
  },
  {
    name: 'Vite',
    imageUrl: '/assets/vite.svg',
  },
  {
    name: 'Firebase',
    imageUrl: '/assets/firebase.svg',
  },
  {
    name: 'Figma',
    imageUrl: '/assets/figma.svg',
  },
  {
    name: 'GSAP',
    imageUrl: '/assets/gsap.svg',
  },
  {
    name: 'Git',
    imageUrl: '/assets/git.svg',
  },
  {
    name: 'Vercel',
    imageUrl: '/assets/vercel.svg',
  },
  {
    name: 'GitHub',
    imageUrl: '/assets/github.svg',
  },
  {
    name: 'Prettier',
    imageUrl: '/assets/prettier.svg',
  },
  {
    name: 'Axios',
    imageUrl: '/assets/axios.svg',
  },
  {
    name: 'Swiper',
    imageUrl: '/assets/swiper.svg',
  },
]

const introductory: TechType[] = [
  {
    name: 'Node',
    imageUrl: '/assets/nodejs.svg',
  },
  {
    name: 'Express',
    imageUrl: '/assets/express.svg',
  },
  {
    name: 'Bootstrap',
    imageUrl: '/assets/bootstrap.svg',
  },
  {
    name: 'PostgreSQL',
    imageUrl: '/assets/postgresql.svg',
  },
  {
    name: 'Webpack',
    imageUrl: '/assets/webpack.svg',
  },
]

const techs: TechType[][] = [introductory, basics, intermediate]

export const Stack: React.FC = () => {
  return (
    <section className="section stack" id="stack">
      <h2 className="head">Used Stack</h2>
      <div className="collection">
        <div className="category">
          <h5 className="title">Intermediate</h5>
          <ul className="list">
            {techs[2].map((tech) => (
              <li className="item" key={tech.name}>
                <img src={tech.imageUrl} title={tech.name} alt={tech.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h5 className="title">Stable Basics</h5>
          <ul className="list">
            {techs[1].map((tech) => (
              <li className="item" key={tech.name}>
                <img src={tech.imageUrl} title={tech.name} alt={tech.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h5 className="title">Introductory</h5>
          <ul className="list">
            {techs[0].map((tech) => (
              <li className="item" key={tech.name}>
                <img src={tech.imageUrl} title={tech.name} alt={tech.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
