import React from 'react'
import { ButtonGoToApp } from '../Buttons/ButtonGoToApp'

export const ListProjects = ({partProjects}) => {
  return (
      <ul className="list-projects">
          {partProjects.map((project, index) => {
              return (
                  <li key={project[0] + index} className={`project ${project[0]}`} >
                      <div className='project-img' style={{ backgroundImage: `URL(${project[1].img})` }}></div>
                      <div className='wrapper-project-description-technology' >

                          <span className='project-title'>{`${project[0].toUpperCase()}`}</span> <br />

                          <span className='project-description'><span>Descriptions:</span> <br />{`${project[1].description}`}</span> <br />
                          <span className='project-technology'><span>Technology:</span> <br />{project[1].technology}</span>
                          <ButtonGoToApp className= 'button-link-to-app' linkToProject={project[1].path}/>
                      </div>

                      {/* <a href={project[1].path}></a> */}
                  </li>
              )
          })}
      </ul>
  )
}
