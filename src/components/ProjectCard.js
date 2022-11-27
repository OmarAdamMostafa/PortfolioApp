import { Col } from 'react-bootstrap';
import projImg from '../assets/img/project-img1.png'

const ProjectCard = ({name, description, html_url}) =>{
    
    return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={projImg} />
        <div className="proj-txtx">
          <h5>{name}</h5>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;