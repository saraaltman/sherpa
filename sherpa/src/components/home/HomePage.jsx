import Header from "../common/header"
import React, { useState } from 'react';
import mountainBackground from '../../assets/mountainBackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchByState, searchByRating, searchByInput } from '../../services/MountainService'
import { useNavigate } from 'react-router-dom'

import './HomePage.css'
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

    const [name, setName] = React.useState("");

    const stateSearch = (state) => {
        searchByState(state)
            .then(response => {
                navigate('/mountains', { state: { mountains: response, state: state, rating: "", name: "" } });
            }).catch(e => {
                console.log(e)
            });
    }

    const ratingSearch = (rating) => {
        searchByRating(rating)
            .then(response => {
                navigate('/mountains', { state: { mountains: response, state: "", rating: rating, name: "" } });
            }).catch(e => {
                console.log(e)
            });
    }

    const searchBarSearch = () => {
        searchByInput(name)
            .then(response => {
                navigate('/mountains', { state: { mountains: response, state: "", rating: "", name: name } });
            }).catch(e => {
                console.log(e)
            });

    }

    return (
        <>
            <Header></Header>
            <Container fluid={true}>
                <Row className="searchRow">
                    <Col sm={1} md={1} lg={1} xl={1}></Col>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <Image src={mountainBackground} className="mountainBackgroundImage"></Image>
                        <InputGroup style={{width:"80%", margin: "auto"}}>
                            <Form.Control size="xxl" type="text" value={name} placeholder={"Search Mountains"} onChange={(e) => setName(e.target.value)} style={{fontSize:"30px", border:"0px solid white", boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"}}  />
                            <Button size="xxl" className="searchIconButton"variant="outline-secondary" style={{backgroundColor:"white", boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)"}} onClick={() => searchBarSearch()}>
                                <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col sm={1} md={1} lg={1} xl={1}></Col>
                </Row>
                <Row>
                    <Col sm={1} md={1} lg={1} xl={1}></Col>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <Row>
                            <Col sm={12} md={12} lg={8} xl={8}>
                                <Container className="group">
                                    <Row> <p className="groupTitle">Search By State</p>  </Row>
                                    <Row className='py-2'>
                                        {Object.entries(states).map(([state, abr]) => <Col md={6} lg={6} xl={6} xxl={4} ><SearchButton buttonLabel={state} onClickProp={() => stateSearch(abr)}></SearchButton></Col>)}
                                    </Row>
                                </Container>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <Container className="group">
                                    <Row> <p className="groupTitle">Search By Rating</p> </Row>
                                    <Row className='py-2'>
                                        {Object.entries(snowflakes).map(([snowflake, rating]) => <Col lg={12}><SearchButton buttonLabel={snowflake} onClickProp={() => ratingSearch(rating)}></SearchButton></Col>)}
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={1} md={1} lg={1} xl={1}></Col>

                </Row>
            </Container>
        </>
    );
}
export default HomePage;
