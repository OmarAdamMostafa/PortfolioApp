import { Col } from 'react-bootstrap';
import projImg from '../assets/img/project-img1.png'

const ProjectCard = ({name, description, html_url}) =>{
    
    return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={projImg} alt='project img'/>
        <div className="proj-txtx">
          <a href={html_url} target="_blank" rel="noreferrer">
            <h5>{name}</h5>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;