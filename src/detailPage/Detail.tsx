import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getPlanetName } from "../shared/apiIntegrator";

function DetailsPage() {
    const { state } = useLocation();
    const [planet, setPlanet] = useState<String>("");
    const { name, hair_color: hairColor, eye_color: eyeColor, gender, homeworld } = state;
    useEffect(() => {
        getPlanetName(homeworld).then(data => {
            if (data) {
                setPlanet(data);
            }
        }, err => {
            console.log(err.message);
        });
    }, [])
    return (
        <>
            <h3 className="mb-3" data-testid="headerText">Character detail</h3>
            <Card style={{ width: '30rem', cursor: 'pointer', backgroundColor: '#105263' }}
                className="mb-2"
                bg={'#105263'}>
                <Card.Body>
                    <Card.Title className="mb-3" data-testid="nameValue">Name: {name}</Card.Title>
                    <Row>
                        <Col className="alignLeft"><h4>Hair color:</h4></Col>
                        <Col>
                            {hairColor}
                        </Col>
                    </Row>
                    <Row>
                        <Col><h4>Eye color:</h4></Col>
                        <Col>
                            {eyeColor}
                        </Col>
                    </Row>
                    <Row>
                        <Col><h4>Gender:</h4></Col>
                        <Col>
                            {gender}
                        </Col>
                    </Row>
                    <Row>
                        <Col><h4>Home planet:</h4></Col>
                        <Col>
                            {planet}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default DetailsPage;