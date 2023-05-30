import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import './header.css'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Header = () => {
    const navigate = useNavigate();
    const handleProfileClick = () => navigate('/profile');


    return (
        <Container fluid={true} className="header">
            <Row height={100}>
                <Col sm={2} md={2} lg={2} xl={2}>
                    <a href="/"> Sherpa </a>
                </Col>
                <Col sm={9} md={9} lg={9} xl={9}>
                </Col>
                <Col sm={1} md={1} lg={1} xl={1}>
                    <Button className="btn-profile" onClick={() => handleProfileClick}>
                        <FontAwesomeIcon className="avatar" icon={faUser} />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Header;