import React from 'react'

export const ButtonGoToApp = ({linkToProject, className}) => {
  return (
    <form>
        <button type='submit' className={className} formAction={linkToProject}> Go to app</button>
    </form>
  )
}
