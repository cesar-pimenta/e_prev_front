import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Homes(props){
  return (
    <Jumbotron fluid>
    <Container>
      <h1>Panda.py - simple web application test.</h1>
      <p>
          using backend in python and django rest framework, implementing simple integration test in urls. and frontend with react, and react-boostrap, react-route ...
          deploy to aws servers ..
          apache server in port 80 serving front .. nginx managing internal and backend media
      </p>
    </Container>
  </Jumbotron>
  ) 
}   
