import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Character } from "../models/character.model";
import { getCharacterList } from "../shared/apiIntegrator";


function Home() {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        getCharacterList().then(data => {
            if(data) {
                console.log(data);
                setCharacters(data);
            }
            setIsLoading(false);
        }, err => {
            console.log(err.message);
            setIsLoading(false);
        });
    }, [])

    const onCardClick = (selectedCharacterIndex: number) => {
        navigate("/detail", { state: characters[selectedCharacterIndex] });
    }

    const content = characters.map((character, index) =>
        <Col sm key={index}>
            <Card style={{ width: '18rem', cursor: 'pointer', backgroundColor: '#105263' }}
                className="mb-2"
                onClick={() => onCardClick(index)} data-testid="cardContent">
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    {/* <Card.Body> */}
                        <Card.Text>
                            {character.gender}
                        </Card.Text>
                        <Card.Text>
                            {character.homeworld}
                        </Card.Text>
                    {/* </Card.Body> */}
                </Card.Body>
            </Card>
        </Col>
    );
    return (<>
        <h3 className="mb-3" data-testid="headerText">Character list</h3>
        <Container>
            <Row>
                {content}
            </Row>
        </Container>
        {isLoading && <Spinner animation="border" role="status">
            <span className="visually-hidden" data-testid="loader">Loading...</span>
        </Spinner>}
    </>)
}
export default Home;

