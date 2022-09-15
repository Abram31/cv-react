import './header.scss'
import { Component } from "react";
import "typeface-exo-2";
import avatar from "../assets/img/avatar-4-1 1.jpg"
import '../basic.scss'



class NameProfession extends Component {
    render() {
        return (
            <div className="header_wrapper-name-profession">
                <h1 className="name">Artsiom ABRAMOVICH</h1>
                <h2 className="profession">JavaScript developer</h2>
            </div>
        )
    }
}

class Contacts extends Component {
    constructor() {
        super()
        this.contacts = {
            linkedin: {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/artem-abramovich-45a06a230/'
            },
            phone: {
                title: '+48 451 658 035',
                path: 'tel:48 451 658 035'
            },
            mail: {
                title: 'a447623993@gmail.com',
                path: 'mailto:a447623993@gmail.com'
            },
            telegram: {
                title: 'Telegram',
                path: 'https://t.me/artsiomabramovich'
            },
            instagram: {
                title: 'Instagram',
                path: 'https://www.instagram.com/artsiom_abramovich/'
            },
            GitHub: {
                title: 'GitHub',
                path: 'https://github.com/Abram31'
            }
        }





    }
    render() {
        return (
            <div className="header_wrapper-contacts">
                <div className='wrapper-contacts__contacts'>
                    <h3>CONTACTS</h3>
                    <ul className='wrapper-contacts-about-me__list-contacts'>
                        {Object.entries(this.contacts).map((contact,index) => (
                            <li key = {contact[0] + index } style = {{padding: `0 0 0 ${10 * index + 5}%`}} > 
                            <a className={`list-contacts__contact ${contact[0]}`} href={contact[1].path}>{contact[1].title}</a> 
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

class AboutMe extends Component {
    constructor() {
        super()
        this.aboutMe = {
            city: "Warsaw",
            birthday: "20.11.1989",
            hometown: "Sport, travelings",
            
        }
    }
    render() {
        return (
            <div className="header_wrapper-about-me">
                <div className='wrapper-contacts-about-me__about-me'>
                    <h3>ABOUT ME</h3>
                    <ul className='wrapper-contacts-about-me__list-about-me'>
                        <li className='city'><span>Where I live:</span> {this.aboutMe.city}</li>
                        <li className='birthday'><span>Date of birth:</span> {this.aboutMe.birthday}</li>
                        <li className='hobbies'><span>Hobbies:</span> {this.aboutMe.hometown}</li>

                    </ul>
                </div>
            </div>
        )
    }

}
const Avatar = () => <img className='header__avatar' src={avatar} alt="avatar" />


export function Header() {
    return (
        <header className='header'>
            <NameProfession />
            <Contacts />
            <AboutMe />
            <Avatar />

        </header>
    )
}

