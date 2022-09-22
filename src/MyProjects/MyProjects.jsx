import './MyProjects.scss'
import { Component } from 'react'
import { projectsList } from './projectList';
import { Button } from './Buttons'
import { ListProjects } from './ListProjects';





export class MyProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false,
            textButton: 'More projects...',
            amountProjects: 3,
        }
    }

    handleClick = (value) => {
        // console.log(value);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            textButton: prevState.isToggleOn ? 'More projects...' : 'Hide projects',
            amountProjects: prevState.isToggleOn ? 3 : Object.entries(projectsList).length,
            }
        ));

    }

    render() {
        const partProjects = Object.entries(projectsList).slice(0, this.state.amountProjects)
        return (
            <section className="wrapper-my-projects">
                <div className="container-my-projects">
                    <h3>MY PROJECTS</h3>
                    <ListProjects partProjects={partProjects} />
                    <Button 
                        className="button-more-experience"
                        onClick={ (value) => this.handleClick(value)} 
                        textButton = {this.state.textButton}
                        />
                </div>
            </section>
        )
    }

}

