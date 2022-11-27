import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Container, Row, TabContainer, TabContent, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
const Projects = () =>{

    const url = 'https://api.github.com/users/OmarAdamMostafa/repos'
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [half, setHalf] = useState(0)

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
            setHalf(newProjects.length/2)
            }
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            return console.log(error)
        }
    }

    useEffect(()=>{
        getUserProjects()
        console.log(projects)
        // eslint-disable-next-line
    },[loading]);

    return (
        <section className='project' id='projects'>  
            <Container> 
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <TabContainer id='projects-tabs' defaultActiveKey='first'>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.slice(0,3).map((project) => {
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