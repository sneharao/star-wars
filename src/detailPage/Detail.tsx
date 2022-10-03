import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getPlanetName } from "../shared/fetchData";

function DetailsPage() {
    const { state } = useLocation();
    const [planet, setPlanet] = useState<String>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { name, hair_color: hairColor, eye_color: eyeColor, gender, homeworld } = state;
    useEffect(() => {
        getPlanetName(homeworld).then(data => {
            setIsLoading(false);
            if (data) {
                setPlanet(data);
            }
        }, err => {
            setIsLoading(false);
            console.log(err.message);
        });
    }, [homeworld]);
    return (
        <>
            <h3 className="mb-3" data-testid="headerText">Character detail</h3>
            {!isLoading && <Card style={{ width: '30rem', cursor: 'pointer', backgroundColor: '#105263' }}
                className="mb-2"
                bg={'#105263'}>
                <Card.Body>
                    <Row>
                        <Col className="alignLeft"><h4>Name:</h4></Col>
                        <Col  data-testid="nameValue">
                            {name}
                        </Col>
                    </Row>
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
            </Card>}
            {isLoading && <Spinner animation="border" role="status">
            <span className="visually-hidden" data-testid="loader">Loading...</span>
        </Spinner>}
        </>
    )
}

export default DetailsPage;