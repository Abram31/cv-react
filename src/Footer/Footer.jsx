import React from 'react'
import './Footer.scss'

export const Footer = ({contacts}) => {
  return (
    <footer className='footer'>
        <ul className='wrapper-links-footer'>
              {Object.entries(contacts).map((contact, index) => (
                  <li key={contact[0] + index}>
                      <a className={`list-contacts__contact ${contact[0]}`} href={contact[1].path}>{contact[1].title}</a>
                  </li>
              )
              )}
        </ul>
    </footer>
  )
}
