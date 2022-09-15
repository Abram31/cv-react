import './skills.scss'

const listSkills = {
    html: {
        level: 8
    },
    css: {
        level: 8
    },
    javascript: {
        level: 8
    },
    photoshop: {
        level: 5
    },
    figma: {
        level: 6
    },
    git: {
        level: 7
    },
    webpack: {
        level: 7
    },
    nodejs: {
        level: 5
    },
    react: {
        level: 7
    },
    typescript: {
        level: 6
    },

}

const listLanguages = {
    english: {
        level: 'B1'
    },
    poland: {
        level: 'A2'
    },
    russian: {
        level: 'native'
    }
}

const Languages = () => {
    return (
        <div className='container-languages'>
            <ul className='wrapper-languages'>
                <h3>LANGUAGES</h3>
                {Object.entries(listLanguages).map((language, index) => (
                    <li key={language[0] + index} className={'language'} style={{padding:`0 0 0 ${index * 20 + 10}%`}}> 
                    <span>{`${language[0].toLocaleUpperCase()}:`}</span> { `${language[1].level}`}</li>
                ))}

            </ul>
        </div>
    )
}

export const Skills = () => {
    return (
        <section className='skills-section'>
            <div className='container-skills'>

                <ul className='wrapper-skills'>
                    <h3>SKILLS</h3>
                    {Object.entries(listSkills).map((skill, index) => (
                        <li key={skill[0] + index}  className={`wrapper-skills__skill ${skill[0]}`} >{skill[0].toLocaleUpperCase()}
                            <span style={{ width: `${60 - (60 / 10) * skill[1].level}%` }}></span>
                        </li>
                    ))}
                </ul>
            </div>
            <Languages />
        </section>
    )
}