import './header.scss'
import { Component } from "react";
import "typeface-exo-2";
import avatar from "../assets/img/avatar-4-1 1.jpg";
import '../basic.scss';
import { contacts } from './contacts';



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
        this.contacts = contacts;





    }
    render() {
        const maxWidth = document.documentElement.clientWidth > 850;  
        return (
            <div className="header_wrapper-contacts">
                <div className='wrapper-contacts__contacts'>
                    <h3>CONTACTS</h3>
                    <ul className='wrapper-contacts-about-me__list-contacts'>
                        {Object.entries(this.contacts).map((contact,index) => (
                            <li key={contact[0] + index} style={{ padding: maxWidth ? `0 0 0 ${10 * index + 5}%` :  `0 0 0 5%` }} > 
                            
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

