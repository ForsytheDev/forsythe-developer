import React from 'react'
import Link from 'next/link'

import { FaGoogle, FaGithub, FaTelegram } from 'react-icons/fa'

export const Resources: React.FC = () => {
  return (
    <section className="section resources" id="resources">
      <h2 className="head">Resources</h2>
      <div className="collection">
        <ul className="list">
          <li className="item">
            <Link
              className="card"
              href="https://github.com/ForsytheDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
              <span>ForsytheDev</span>
            </Link>
          </li>
          <li className="item">
            <Link
              className="card"
              href="mailto:forsythe.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="icon" />
              <span>forsythe.dev@gmail.com</span>
            </Link>
          </li>
          <li className="item">
            <Link
              className="card"
              href="https://t.me/forsythedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="icon" />
              <span>@forsythedev</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
