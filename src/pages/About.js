import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import employees from "../employees.json";
import FriendCard from "../components/FriendCard";

class About extends Component {
  state = {
    employees, 
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    listType: ""
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const { firstName, lastName, email, number } = this.state
    event.preventDefault();
    if (firstName.trim().length === 0 || lastName.trim().length === 0 || email.trim().length === 0 || number.trim().length === 0) {
      alert('Fill out all of the inputs please');
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        number: ""
      });
      return;
    } else {
      //Code to push new employee state into JSON file
      let newEmployee = { firstName, lastName, email, number }
      this.setState({ employees: [...this.state.employees, newEmployee] })
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        number: ""
      });
    };
  };

  renderList = () => {
    if (this.state.listType === "email") {
      (this.state.employees.sort(function(a, b) {
        return a.email.localeCompare(b.email);
     }));
     return (this.state.employees.map(employee => (
      <FriendCard
        firstName={employee.firstName}
        lastName={employee.lastName}
        email={employee.email}
        number={employee.number}
      />
    )));
    } else if (this.state.listType === "LastName") {
      (this.state.employees.sort(function(a, b) {
        return a.lastName.localeCompare(b.lastName);
     }));
     return (this.state.employees.map(employee => (
      <FriendCard
        firstName={employee.firstName}
        lastName={employee.lastName}
        email={employee.email}
        number={employee.number}
      />
    )));
    } else {
      return (this.state.employees.map(employee => (
        <FriendCard
          firstName={employee.firstName}
          lastName={employee.lastName}
          email={employee.email}
          number={employee.number}
        />
      )));
    }
  }

  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Employee Directory</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h3>New Employee</h3>
              <form className="form">
                <input
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Email"
                />
                <input
                  value={this.state.number}
                  name="number"
                  onChange={this.handleInputChange}
                  type="number"
                  placeholder="222-555-1212"
                />
                <button onClick={this.handleFormSubmit}>Submit</button>
              </form><br />
            </Col>
          </Row>
          <button onClick={()=>{this.setState({listType:""})}}>Order Entered</button>
          <button onClick={()=>{this.setState({listType:"LastName"})}}>Last Name</button>
          <button onClick={()=>{this.setState({listType:"email"})}}>Email</button>
          <Row>
            <Col size="md-12">
              <h3>Employee List</h3>
              {this.renderList()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
