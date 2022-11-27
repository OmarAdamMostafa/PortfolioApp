import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Container, Row, TabContainer, TabContent, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = () =>{

    const url = 'https://api.github.com/users/OmarAdamMostafa/repos'
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    const getUserProjects = async() =>{
        setLoading(true);
        try {
            const resp = await axios(url)
            const allProjects = resp.data
            if(allProjects){
                const newProjects = allProjects.map((project)=>{
                    const {id, name, description, html_url} = project;
                    return {id, name ,description, html_url}
            })  
            setProjects(newProjects);
            }
            setLoading(false);
        }
        catch (error) {
            return console.log(error)
            setLoading(false);
        }
    }

    useEffect(()=>{
        getUserProjects()
        console.log(projects)
        // eslint-disable-next-line
    },[loading]);

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
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project) => {
                                                return (
                                                <ProjectCard
                                                    key={project.id}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, iusto.
                                </Tab.Pane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='ColorSharp'/>
        </section>
    )
}

export default Projects;