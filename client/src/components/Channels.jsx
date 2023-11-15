import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../css/Channels.css"
import { redirect, useNavigate } from 'react-router-dom';
import { useStreamContext, useStreamUpdateContext } from '../context/StreamContext';

export default function Channels({ channels }) {
    const getStreamName = useStreamContext()
    const updateStreamName = useStreamUpdateContext()
    
    

    const navigate = useNavigate()
    const handleStreamClick = (elm) => {
        updateStreamName.streamSet(elm)
        localStorage.setItem("current-stream", JSON.stringify(elm))
        return navigate(`/stream/${elm.name}`)
    }

    console.log(channels)
    return (
        <Container style={{ marginTop:"2rem"}}>
        <div className='cardList' style={{ justifyContent:"center" }}>
            <Row>
            {channels.map((elm, i) => (
                <Col key={i}>
                <Card style={{ width: "18rem", marginBottom:"2rem", height:"10rem", cursor:"pointer"}} className='stream-card' onClick={() => handleStreamClick(elm)}>
                    <Card.Body>
                        <Card.Title style={{ justifyContent:"center", display:"flex", marginTop:"1rem"}}>
                            {elm.name}
                        </Card.Title>
                        <Card.Subtitle id="card-subtitle">
                            <i>Viewers:</i> {elm.viewers}
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
        </Container>
    )
}