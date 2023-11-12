import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Channels({ channels }) {
    console.log(channels)
    return (
        <Container style={{ marginTop:"2rem"}}>
        <div className='cardList' style={{ justifyContent:"center" }}>
            <Row>
            {channels.map((elm, i) => (
                <Col>
                <Card style={{ width: "100%", marginBottom:"2rem", height:"10rem"}}>
                    <Card.Body>
                        <Card.Title style={{ justifyContent:"center", display:"flex", marginTop:"1rem"}}>
                            {elm.name}
                        </Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
        </Container>
    )
}