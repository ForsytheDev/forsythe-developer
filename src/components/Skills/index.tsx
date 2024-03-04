import React from 'react'

type HardSkillType = {
  name: string
  imageUrl?: string
}

type SoftSkillType = {
  name: string
}

const hards: HardSkillType[] = [
  {
    name: 'HTML',
    imageUrl: '/assets/html5.svg',
  },
  {
    name: 'CSS',
    imageUrl: '/assets/css3.svg',
  },
  {
    name: 'SCSS & Sass',
    imageUrl: '/assets/sass.svg',
  },
  {
    name: 'Tailwind CSS',
    imageUrl: '/assets/tailwind.svg',
  },
  {
    name: 'JavaScript',
    imageUrl: '/assets/javascript.svg',
  },
  {
    name: 'TypeScript',
    imageUrl: '/assets/typescript.svg',
  },
  {
    name: 'React',
    imageUrl: '/assets/react.svg',
  },
  {
    name: 'Next',
    imageUrl: '/assets/nextjs.svg',
  },
  {
    name: 'Firebase',
    imageUrl: '/assets/firebase.svg',
  },
  {
    name: 'Redux / RTK',
    imageUrl: '/assets/redux.svg',
  },
  {
    name: 'React Router',
    imageUrl: '/assets/react-router.svg',
  },
  {
    name: 'Git',
    imageUrl: '/assets/git.svg',
  },
]

const softs: SoftSkillType[] = [
  {
    name: 'English - B1',
  },
  {
    name: 'UI / UX basics',
  },
]

export const Skills: React.FC = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="head">Skill Points</h2>
      <div className="collection">
        <div className="category">
          <ul className="list hards">
            {hards.map((skill) => (
              <li className="item" key={skill.name}>
                {skill.imageUrl && <img src={skill.imageUrl} alt={skill.name} />}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="category">
          <ul className="list softs">
            {softs.map((skill) => (
              <li className="item" key={skill.name}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
