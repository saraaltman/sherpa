import Header from "../common/header"
import React, { useState } from 'react';
import skiLift from '../../assets/ski-lift.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchByState, searchByRating, searchByInput } from '../../services/MountainService'
import { useNavigate } from 'react-router-dom'

import './HomePage.css'
import TrailListItem from '../future/TrailListItem/TrailListItem';
import SearchButton from "./SearchButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup"

const HomePage = () => {
    const navigate = useNavigate();
    let states = { "Colorado": "CA", "Utah": "UT", "North Carolina": "NC", "Vermont": "VT", "New Hampshire": "NH", "Wyoming": "WY" }
    let snowflakes = { "❄️❄️❄️❄️❄️": 5, "❄️❄️❄️❄️": 4, "❄️❄️❄️": 3 }

    const [search, setSearch] = React.useState("");

    let mountain = {
        id: "12345",
        name: "Beech Mountain",
        numLifts: 5,
        trails: [],
        locationTown: "Beech Mountain",
        locationState: "NC",
        rating: 3,
        websiteURL: ""
    }
    let trail = {
        id: "123",
        name: "The Oz",
        mountain: "12345",
        trailLevel: "Blue",
        rating: 4,
        mountainMapURL: ""
    }

    const stateSearch = (state) => {
        searchByState(state)
            .then(response => {
                console.log(response);
                navigate('/mountains', { state: { mountains: response } });
            }).catch(e => {
                console.log(e)
            });
    }

    const ratingSearch = (rating) => {
        searchByRating(rating)
            .then(response => {
                console.log(response);
                navigate('/mountains', { state: { mountains: response } });
            }).catch(e => {
                console.log(e)
            });
    }

    const searchBarSearch = () => {
        searchByInput(search)
            .then(response => {
                console.log(response);
                navigate('/mountains', { state: { mountains: response } });
            }).catch(e => {
                console.log(e)
            });

    }

    return (
        <Container>
            <Row>
                <Image src={skiLift} height={450} width={1500}></Image>
                <div>
                    <InputGroup>
                        <Form.Control type="text" value={search} placeholder={"Search"} onChange={(e) => setSearch(e.target.value )}/>
                        <Button variant="outline-secondary" id="button-addon2" onClick={() => searchBarSearch()}>
                            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                        </Button>
                    </InputGroup>
                </div>
            </Row>
            <Row>
                <Col>
                    <Container className="group">
                        <Row> Title </Row>
                        <Row className='py-2'>
                            {Object.entries(states).map(([state, abr]) => <Col lg={4} md={6}><SearchButton buttonLabel={state} onClickProp={() => stateSearch(abr)}></SearchButton></Col>)}
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container className="group">
                        <Row> Title </Row>
                        <Row className='py-2'>
                            {Object.entries(snowflakes).map(([snowflake, rating]) => <Col lg={12}><SearchButton buttonLabel={snowflake} onClickProp={() => ratingSearch(rating)}></SearchButton></Col>)}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
export default HomePage;
