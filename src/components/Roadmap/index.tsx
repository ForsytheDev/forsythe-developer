import React from 'react'

import { Timeline } from '@/components'

export type SlideType = {
  timestamp?: number
  month?: string
  phase?: string
  description: string
}

const slides: SlideType[] = [
  {
    timestamp: 2020,
    month: 'September',
    phase: 'Start of Education',
    description:
      'Graduated school and enrolled in TETC (Togliattian Economic and Technological College) to pursue specialized education in "Computer Systems Programming".',
  },
  {
    timestamp: 2023,
    phase: 'Entering the Frontend World',
    month: 'April',
    description:
      'Beginning of my exploration into web-programming and the fundamentals of UI/UX design. Sparking a keen interest in creating layouts and designs for websites.',
  },
  {
    phase: 'Experience with HTML & CSS',
    month: 'June',
    description:
      'Delving into the intricacies of layout design. It was a journey to comprehend the vast possibilities offered by HTML and CSS.',
  },
  {
    phase: 'Beginning to learn JavaScript',
    month: 'November',
    description:
      'Studied fundamental aspects of the JS language on learn.javascript.ru and honed skills with practical challenges on codewars.',
  },
  {
    phase: 'Exploring React & TypeScript',
    month: 'December',
    description:
      'Studied fundamentals of React and implemented TypeScript for Single Page Applications. Writing initial pet projects using create-react-app.',
  },
  {
    timestamp: 2024,
    phase: 'The Coursework',
    month: 'February',
    description:
      'Completed and defended coursework on a web-chat project using Next.js and Firebase.',
  },
  {
    phase: 'The Graduation Project',
    month: 'March',
    description:
      'Development of a blog application for the diploma project, incorporating both frontend and backend components.',
  },
  {
    phase: 'Diploma Defense and Graduation',
    month: 'June',
    description: `Successful defense of the graduation project. Completion of the education and attainment of a specialist's red diploma.`,
  },
  {
    phase: 'Start of Employment',
    month: 'Summer',
    description: 'Initiating the search for a suitable job and commencing my career way.',
  },
  {
    phase: 'Growth Backend Proficiency',
    description:
      'Advancing my knowledge of backend technologies, exploring the NestJS framework. Integrating TypeScript into server-side development.',
  },
  {
    phase: `Developing my Own Project`,
    month: 'Autumn',
    description:
      'Commencing the development of a personal project for my portfolio, utilizing acquired skills in both frontend and backend technologies.',
  },
  {
    phase: 'Advancing Mastery of React',
    description:
      'Achieving an advanced understanding of React. Widespread adoption of TypeScript and initiating the exploration of Jest testing library.',
  },
  {
    timestamp: 2025,
    phase: 'Exploring Vue or Angular',
    month: 'Winter',
    description:
      'Commencing exploration of either Vue.js or Angular, broadening my knowledge of JS frameworks.',
  },
  {
    phase: 'Learning Fronted Testing Techniques',
    description:
      'Gradually delving into and implementing testing technologies like Jest, React Tests, or Cypress into personal projects.',
  },
  {
    phase: 'Advancing UI/UX Design Proficiency',
    month: 'Spring',
    description:
      'Developing skills in UI/UX design, gaining practical experience in crafting my own website layouts.',
  },
  {
    phase: 'Preparing for University Enrollment',
    description:
      'Initiating preparation for the national standardized exam and university entrance examinations.',
  },
  {
    phase: 'Taking Exams and Admission',
    month: 'Summer',
    description: 'Successfully completing entrance exams and securing admission to the university.',
  },
  {
    phase: 'Path to Pre-Middle/Middle career',
    description: 'Advancing and refining skills for the path to becoming a Middle-developer.',
  },
  {
    phase: 'Further Education',
    month: 'Autumn',
    description: 'Pursuing ongoing education at the higher educational institution.',
  },
]

export const Roadmap: React.FC = () => {
  return (
    <section className="section roadmap" id="roadmap">
      <h2 className="head">Roadmap</h2>
      <div className="timeline">
        <Timeline slides={slides} />
      </div>
    </section>
  )
}
