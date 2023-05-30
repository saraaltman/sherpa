import './TrailListItem.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import trailImage from '../../../assets/trail.png';
import TrailDifficultyTag from '../TrailDifficultyTag/TrailDifficultyTag';

const TrailListItem = ({ trail }) => {

    const [mountainLoaded, setMountainLoaded] = useState(false);
    const [mountain, setMountain] = useState({});
    let snowflakes = ["❄️❄️❄️❄️❄️", "❄️❄️❄️❄️", "❄️❄️❄️", "❄️", "❄️"]

    const fetchMountain = () => {
        // todo: update and call the db when the backend is written
        /* try {
            let response = await fetch('https://localhost:3000');
            let json = await response.json();
            return { success: true, data: json };
        } catch (error) {
            console.log(error);
            return { success: false };
        } */
        let trailMountain = {
            id: "12345",
            name: "Beech Mountain",
            numLifts: 5,
            trails: [],
            locationTown: "Beech Mountain",
            locationState: "NC",
            rating: 3,
            websiteURL: ""
        }
        return trailMountain;
    }

    useEffect(() => {
        setMountainLoaded(false);
        let trailMountain = fetchMountain();
        setMountain(trailMountain);
        setMountainLoaded(true);
        /* if (res.success) {
            setMountain(res.data.results[0]);
            setUserLoaded(true);
        } */
    }, []);


    if (mountainLoaded) {
        return (
            <Container className="trailListItem">
                <Row>
                    <Col sm={2} md={2} lg={2} className="firstCol">
                        <div className="trailIcon">
                            <img className="trailImage" src={trailImage} alt="image of cartoon ski lift"></img>
                        </div>
                    </Col>
                    <Col sm={4} md={4} lg={4} className="secondCol">
                        <div className="trailName">{trail.name}</div>
                        <TrailDifficultyTag level={trail.trailLevel}></TrailDifficultyTag>
                    </Col>
                    <Col sm={3} md={3} lg={3} className="thirdCol">
                        <div className="trailMountain">{mountain.name}</div>
                    </Col>
                    <Col sm={3} md={3} lg={3} className="fourthCol">
                        <div className="verticalLine"></div>
                        <div className="trailRating">
                            {snowflakes[trail.rating - 1]}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <div className="loading">Loading</div>
        );
    }
}
export default TrailListItem;