import "./signup.css";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import skier from "../../assets/skiier.png";
import Input from "../common/input/input";
import PrimaryButton from "../common/primaryButton/primaryButton";
import { createUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setSignUpForm(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { confirmPassword, ...user } = signUpForm;
    createUser(user)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  return (
    <>
      <Container fluid={true} className="signUpPage">
        <Row>
          <Col>
            <Image src={skier} className="skierImage"></Image>
            <h1>Sherpa</h1>
          </Col>
          <Col>
            <form className="signUpForm" onSubmit={handleSubmit}>
              <Input
                label="First Name"
                name="firstname"
                type="text"
                value={signUpForm.firstname || ""}
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                name="lastname"
                type="text"
                value={signUpForm.lastname || ""}
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                type="text"
                value={signUpForm.email || ""}
                onChange={handleChange}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={signUpForm.password || ""}
                onChange={handleChange}
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={signUpForm.confirmPassword || ""}
                onChange={handleChange}
              />
              <Container className="signUpButton">
                <PrimaryButton name="Sign Up" type="submit"></PrimaryButton>
              </Container>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Signup;
