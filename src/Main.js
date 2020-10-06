import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import ProductLists from './ProducLists';
import UserLists from './UserLists';
import Homes from './Homes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function App() {
  return (    
    <div>
        <>
            <Router>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">E-prev</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link >
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/Products">Products</Link>
                            </Nav.Link>
                        </Nav>
                    <Form inline>
                    <Button variant="outline-primary"><Link to="/Login">Login</Link></Button>
                    </Form>
                </Navbar>
                <Switch>
                <Route path="/Products">
                    <ProductLists />
                </Route>
                <Route path="/Login">
                    <UserLists />
                </Route>
                <Route path="/">
                    <Homes />
                </Route>
                </Switch>
            </Router>
        </>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                <Topic />
                </Route>
                <Route path={match.path}>
                <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <Container>
    <Row>
        <Col xs={6} md={4}>
        <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
        <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
        <Image src="holder.js/171x180" thumbnail />
        </Col>
    </Row>
    </Container>
  )
}