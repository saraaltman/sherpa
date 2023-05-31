import React, { useEffect } from 'react';
import Header from "../common/header"
import { useLocation } from 'react-router-dom';
import { searchByStateAndRating, searchByInputAndStateAndRating, searchByRating, searchByInputAndState, searchByInputAndRating, searchByState } from '../../services/MountainService'
import './MountainListViewPage.css'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import MountainListItem from "./MountainListItem/MountainListItem"
import Dropdown from 'react-bootstrap/Dropdown';

const MountainListViewPage = () => {

    const location = useLocation();

    const [search, setSearch] = React.useState("")
    const [rating, setRating] = React.useState("")
    const [state, setState] = React.useState("")
    const [mountains, setMountains] = React.useState([])

    let snowflakes = { 5: "❄️❄️❄️❄️❄️", 4: "❄️❄️❄️❄️", 3: "❄️❄️❄️", 2: "❄️❄️", 1: "❄️" }

    const ratingFilter = (rating) => {
        console.log(rating)
        if (search && state) {
            searchByInputAndStateAndRating(search, state, rating)
                .then(response => {
                    setRating(snowflakes[rating])
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        } else if (search) {
            searchByInputAndRating(search, rating)
                .then(response => {
                    setRating(snowflakes[rating])
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        } else if (state) {
            searchByStateAndRating(state, rating)
                .then(response => {
                    setRating(snowflakes[rating])
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        } else {
            searchByRating(rating)
                .then(response => {
                    setRating(snowflakes[rating])
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        }
    }

    const stateFilter = (state) => {
        console.log(state)
        if (rating && search) {
            searchByInputAndStateAndRating(search, state, rating)
                .then(response => {
                    setState(state)
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        } else if (rating) {
            searchByStateAndRating(state, rating)
                .then(response => {
                    setState(state)
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        } else if (search) {
            searchByInputAndState(search, state)
                .then(response => {
                    setState(state)
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        } else {
            searchByState(state)
                .then(response => {
                    setState(state)
                    setMountains(response)
                }).catch(e => {
                    console.log(e)
                });
        }
    }

    useEffect(() => {
        setSearch(location.state.search)
        setState(location.state.state)
        setRating(location.state.rating)
        setMountains(location.state.mountains)
    }, [])

    return (
        <>
            <Header></Header>
            <Container fluid={true}>
                <Row className="searchRow">
                    <InputGroup style={{ width: "50%", margin: "auto" }}>
                        <Form.Control size="md" type="text" value={search} onChange={(e) => setSearch(e.target.value)} style={{ fontSize: "14px", border: "1px solid black" }} />
                        <Button size="md" variant="outline-secondary" />
                    </InputGroup>
                </Row>
                <Row className="filterRow">
                    <Dropdown onSelect={ratingFilter}>
                        <Dropdown.Toggle style={{ width: "200px", backgroundColor: "white", color: "black", textAlign: "left" }}>
                            Rating: {rating}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="5" style={{ fontSize: "20px" }}>❄️❄️❄️❄️❄️</Dropdown.Item>
                            <Dropdown.Item eventKey="4" style={{ fontSize: "20px" }}>❄️❄️❄️❄️</Dropdown.Item>
                            <Dropdown.Item eventKey="3" style={{ fontSize: "20px" }}>❄️❄️❄️</Dropdown.Item>
                            <Dropdown.Item eventKey="2" style={{ fontSize: "20px" }}>❄️❄️</Dropdown.Item>
                            <Dropdown.Item eventKey="1" style={{ fontSize: "20px" }}>❄️</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown onSelect={stateFilter}>
                        <Dropdown.Toggle style={{ width: "200px", backgroundColor: "white", color: "black", textAlign: "left" }}>
                            State: {state}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="NC" style={{ fontSize: "20px" }}>NC</Dropdown.Item>
                            <Dropdown.Item eventKey="PA" style={{ fontSize: "20px" }}>PA</Dropdown.Item>
                            <Dropdown.Item eventKey="NH" style={{ fontSize: "20px" }}>NH</Dropdown.Item>
                            <Dropdown.Item eventKey="CO" style={{ fontSize: "20px" }}>CO</Dropdown.Item>
                            <Dropdown.Item eventKey="UT" style={{ fontSize: "20px" }}>UT</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row>
                    <ul className="list">
                        <li>
                            {mountains.map((mountain) => <MountainListItem mountain={mountain}></MountainListItem>)}
                        </li>
                    </ul>

                </Row>
            </Container>
        </>
    );
}
export default MountainListViewPage;