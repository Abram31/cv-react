import './my-projects.scss'
import portfolio from '../assets/img/portfolio/portfolio.png'
import memSlider from '../assets/img/portfolio/css-mem-slider.jpg'
import memoryGame from '../assets/img/portfolio/memory-game.jpg'
import momentum from '../assets/img/portfolio/momentum.jpg'
import movieApp from '../assets/img/portfolio/movie-app.jpg'
import shelter from '../assets/img/portfolio/shelter.jpg'
import silverSeven from '../assets/img/portfolio/silverSeven.png'
import videoPlayer from '../assets/img/portfolio/video-player.jpg'
import virtualKeyboard from '../assets/img/portfolio/virtual-keyboard.jpg'
import { Component } from 'react'









const projectsList = {
    silverSeven: {
        path: 'http://silverseven.by/',
        img: silverSeven,
        description: '',
    },
    portfolio: {
        path: 'https://rolling-scopes-school.github.io/abram31-JSFEPRESCHOOL/portfolio/',
        img: portfolio,
        description: '',
    },
    videoPlayer: {
        path: 'https://rolling-scopes-school.github.io/abram31-JSFEPRESCHOOL/js30.1.3-custom-video/',
        img: videoPlayer,
        description: '',
    },
    movieApp: {
        path: 'https://rolling-scopes-school.github.io/abram31-JSFEPRESCHOOL/js30.2.3-movie-app/',
        img: movieApp,
        description: '',
    },
    memoryGame: {
        path: 'https://rolling-scopes-school.github.io/abram31-JSFEPRESCHOOL/js30.3.2-memory-game/',
        img: memoryGame,
        description: '',
    },
    momentum: {
        path: 'https://abram31.github.io/momentum/dist/',
        img: momentum,
        description: '',
    },
    cssMemSlider: {
        path: 'https://abram31.github.io/cssMemSlider/cssMemSlider/index.html',
        img: memSlider,
        description: '',
    },
    shelter: {
        path: 'https://rolling-scopes-school.github.io/abram31-JSFE2022Q1/shelter/pages/main/index.html',
        img: shelter,
        description: '',
    },
    virtualKeyboard: {
        path: 'https://abram31.github.io/Virtual-Keyboard/',
        img: virtualKeyboard,
        description: '',
    }
}


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const element = document.querySelector('.wrapper-my-projects')
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }
        ));
        
            this.state.isToggleOn ? element.style.height = '38rem' : element.style.height = 'fit-content'

    }

    render() {
        return (
            <span className='button-more-experience' onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Hide projects' : 'Click for more projects......'}
            </span>
        );
    }
}

export const MyProjects = () => {
    return (
        <section className="wrapper-my-projects">
            <div className="container-my-projects">
                <h3>MY PROJECTS</h3>
                <ul className="list-projects">
                    {Object.entries(projectsList).map((project, index) => (
                        <li key={project[0] + index} className={`project ${project[0]}`} style={{ backgroundImage: `URL(${project[1].img})` }}>
                            <a href={project[1].path}></a>
                        </li>
                    ))}
                </ul>
                <Button />
            </div>
        </section>

    )
}