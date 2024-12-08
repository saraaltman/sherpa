import React, { useEffect } from 'react';
import Header from "../common/Header/Header"
import { useLocation } from 'react-router-dom';
import { mountainSearch } from '../../services/MountainService'
import './MountainListViewPage.css'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import MountainListItem from "./MountainListItem/MountainListItem"
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MountainListViewPage = () => {

    const location = useLocation();

    const [name, setName] = React.useState("")
    const [rating, setRating] = React.useState("")
    const [state, setState] = React.useState("")
    const [mountains, setMountains] = React.useState([])

    let snowflakes = { 5: "❄️❄️❄️❄️❄️", 4: "❄️❄️❄️❄️", 3: "❄️❄️❄️", 2: "❄️❄️", 1: "❄️" }

    const ratingFilter = (rating) => {
        console.log(rating)
        setRating(snowflakes[rating])
        mountainSearch(name, state, rating)
            .then(response => {
                setMountains(response)
            }).catch(e => {
                console.log(e)
            });
    }

    const stateFilter = (state) => {
        console.log(state)
        setState(state)
        mountainSearch(name, state, rating)
            .then(response => {
                setMountains(response)
            }).catch(e => {
                console.log(e)
            });
    }

    const searchBarSearch = () => {
        console.log(name);
        mountainSearch(name, state, rating)
            .then(response => {
                setMountains(response)
            }).catch(e => {
                console.log(e)
            });
    }

    useEffect(() => {
        setName(location.state.name)
        setState(location.state.state)
        setRating(snowflakes[location.state.rating])
        setMountains(location.state.mountains)
    }, [])

    return (
        <>
            <Header></Header>
            <Container fluid={true}>
                <Row className="searchRow">
                    <InputGroup style={{ width: "50%", margin: "auto" }}>
                        <Form.Control size="md" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ fontSize: "14px", border: "1px solid black" }} />
                        <Button size="lg" variant="outline-dark" onClick={() => searchBarSearch()}>
                            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                        </Button>
                    </InputGroup>
                </Row>
                <Row className="filterRow">
                    <Col className="justify-content-end" style={{display: "flex"}}>
                        <Dropdown onSelect={ratingFilter}>
                            <Dropdown.Toggle style={{ width: "200px", backgroundColor: "white", color: "black", textAlign: "left" }}>
                                Rating: {rating}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="" style={{ fontSize: "20px" }}>-</Dropdown.Item>
                                <Dropdown.Item eventKey="5" style={{ fontSize: "20px" }}>❄️❄️❄️❄️❄️</Dropdown.Item>
                                <Dropdown.Item eventKey="4" style={{ fontSize: "20px" }}>❄️❄️❄️❄️</Dropdown.Item>
                                <Dropdown.Item eventKey="3" style={{ fontSize: "20px" }}>❄️❄️❄️</Dropdown.Item>
                                <Dropdown.Item eventKey="2" style={{ fontSize: "20px" }}>❄️❄️</Dropdown.Item>
                                <Dropdown.Item eventKey="1" style={{ fontSize: "20px" }}>❄️</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className="justify-content-start" style={{display: "flex"}}>
                        <Dropdown onSelect={stateFilter}>
                            <Dropdown.Toggle style={{ width: "200px", backgroundColor: "white", color: "black", textAlign: "left" }}>
                                State: {state}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="" style={{ fontSize: "20px" }}>-</Dropdown.Item>
                                <Dropdown.Item eventKey="NC" style={{ fontSize: "20px" }}>NC</Dropdown.Item>
                                <Dropdown.Item eventKey="PA" style={{ fontSize: "20px" }}>PA</Dropdown.Item>
                                <Dropdown.Item eventKey="NH" style={{ fontSize: "20px" }}>NH</Dropdown.Item>
                                <Dropdown.Item eventKey="CO" style={{ fontSize: "20px" }}>CO</Dropdown.Item>
                                <Dropdown.Item eventKey="UT" style={{ fontSize: "20px" }}>UT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    {mountains.length != 0 && <ul className="list">
                        <li>
                            {mountains.map((mountain) => <MountainListItem mountain={mountain}></MountainListItem>)}
                        </li>
                    </ul>}
                    {mountains.length == 0 && <div> No Mountains Found </div>}

                </Row>
            </Container>
        </>
    );
}

export default MountainListViewPage;