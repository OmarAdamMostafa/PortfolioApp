import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Container, Row, TabContainer, TabContent, Tab} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/eCommPic.png'
import projImg2 from '../assets/img/githubUsersApp.png'
import projImg3 from '../assets/img/myCocktail.png'
//import defaultImg from '../assets/img/project-img1.png'

const Projects = () =>{

    const url = 'https://api.github.com/users/OmarAdamMostafa/repos'
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const projImgs = [{id: 562817491,img: projImg1}, {id: 559186228,img: projImg2}, {id: 557862119,img: projImg3}]

    const getUserProjects = async() =>{
        setLoading(true);
        try {
            const resp = await axios(url)
            const allProjects = resp.data
            if(allProjects){
                const newProjects = allProjects.map((project)=>{
                    const {id, name, description, html_url} = project;
                    // let img = projImgs.map((projImg)=>{
                    //     if (id === projImg.id){
                    //         return projImg.img
                    //     }
                    // })
                    let img = projImgs.filter((projImg)=> id === projImg.id)
                    return {id, name ,description, html_url, img: img[0]}
            })  
            console.log(newProjects)
            setProjects(newProjects);
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
                                        <button><span>View More</span></button>
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