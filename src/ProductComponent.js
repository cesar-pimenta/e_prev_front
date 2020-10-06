import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function ProductComponent(props){
    return (
        <div class="m-1">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ props.image } />
            <Card.Body>
                <Card.Title>{ props.name }</Card.Title>
                <Card.Text>{ props.desc }
                </Card.Text>
                <Row>
                    <Col md={{ span: 4, offset: 7 }}><Button variant="primary">Comprar</Button></Col>
                </Row>
            </Card.Body>
            </Card>
        </div> 
    ) 
}   