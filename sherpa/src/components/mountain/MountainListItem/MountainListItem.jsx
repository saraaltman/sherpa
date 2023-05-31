import './MountainListItem.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import mountainImage from '../../../assets/mountain.png';

const MountainListItem = ({ mountain }) => {

    let snowflakes = ["❄️❄️❄️❄️❄️", "❄️❄️❄️❄️", "❄️❄️❄️", "❄️", "❄️"]

    return (
        <Container className="listItem">
            <Row>
                <Col sm={4} md={3} lg={3} >
                    <div className="mountainIcon">
                        <img className="mountainImage" src={mountainImage} alt="image of cartoon mountain"></img>
                    </div>
                </Col>
                <Col sm={3} md={3} lg={3} className="mountainInfo">
                    <div className="mountainName">{mountain.name}</div>
                    <div className="mountainLifts">{mountain.numLifts} lifts</div>
                    <div className="mountainTrails">{mountain.trails.length} trails</div>
                </Col>
                <Col sm={2} md={3} lg={3} className="align-content-end justify-content-end" style={{display: "flex"}}>
                    <div className="mountainLocation">{mountain.locationTown}, {mountain.locationState}</div>
                </Col>
                <Col sm={1} md={1} lg={1} className="align-items-center justify-content-end" style={{display: "flex"}}>
                    <div className="verticalLine"></div>
                </Col>
                <Col className="align-items-center justify-content-center" style={{display: "flex"}} sm={2} md={2} lg={2} >
                <div className="mountainRating">
                        {snowflakes[mountain.rating - 1]}
                    </div>
                </Col>
            </Row>
        </Container>

    );
}
export default MountainListItem;