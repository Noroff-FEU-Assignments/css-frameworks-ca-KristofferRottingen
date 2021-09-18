import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./sass/style.scss";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <div className="nav-links">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/news">News</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </div>
                <Form inline className="form-search">
                  <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                  <Button className="nav-button" variant="outline-success">Go</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}


export default App;
