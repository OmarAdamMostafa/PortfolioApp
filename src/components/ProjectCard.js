import { Col } from 'react-bootstrap';
import projImg from '../assets/img/project-img1.png'

const ProjectCard = ({name, description, url}) =>{
    
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={projImg} alt='abc'/>
                <div className="proj-txtx">
                    <h4>{name}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
  )
}

export default ProjectCard;