import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Container, Row, TabContainer, TabContent, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = () =>{
    const url = 'https://api.github.com/users/OmarAdamMostafa/repos'
    const [projects, setProjects] = useState([])

    const getUserProjects = async() =>{
        try {
            const resp = await axios(url)
            const allProjects = resp.data
            if(allProjects){
                const newProjects = allProjects.map((project)=>{
                    const {id, name, description, url} = project;
                    return {id, name ,description, url}
            })  
            setProjects(newProjects);
        }}
        catch (error) {
            return console.log(error)
        }
    }

    useEffect(()=>{
        getUserProjects()
        console.log(projects)
        // eslint-disable-next-line
    },[]);

    return (
        <section className='project' id='project'>  
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem nulla veniam atque est distinctio!</p>
                        <TabContainer id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </TabContainer>
                        <TabContent>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project)=>{
                                            return <ProjectCard key={project.id} {...project}/>
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                abc
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                def
                            </Tab.Pane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='ColorSharp'/>
        </section>
    )
}

export default Projects;