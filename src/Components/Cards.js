import React, { Component } from 'react'
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap'
import Stop from "../Media/stop.png";
import Clustering from "../Media/Clustering.png"
import HolyTesters from "../Media/HolyTesters.png"


export default class Cards extends Component {
    render() {
        return (
            <div>
                <div>

                    <CardDeck>
                        <Card style={{ width: '18rem' }}>
                        <a href="https://github.com/IdanHershcovich/stop_game">
                            <Card.Img variant="top" src={Stop}/>
                        </a>
                            <Card.Body>
                                <Card.Title>Stop! Game</Card.Title>
                                <Card.Text>
                                    Online game based on the pen and paper game STOP! Made with React, Node.js and Socket.IO (WIP).
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>#Node</ListGroupItem>
                                <ListGroupItem>#React</ListGroupItem>
                                <ListGroupItem>#Personal</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://github.com/IdanHershcovich/stop_game">Github</Card.Link>
                                {/* <Card.Link href="#">More Info</Card.Link> */}
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                        <a href="https://github.com/IdanHershcovich/cs383/tree/master/HW2-Clustering">
                            <Card.Img variant="top" src={Clustering} />
                        </a>
                            <Card.Body>
                                <Card.Title>K-Means Clustering</Card.Title>
                                <Card.Text>
                                    Clustering for a given database of diabetes patients and visualizes the whole process.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>#Numpy</ListGroupItem>
                                <ListGroupItem>#Python</ListGroupItem>
                                <ListGroupItem>#Coursework</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://github.com/IdanHershcovich/cs383/tree/master/HW2-Clustering">Github</Card.Link>
                                {/* <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '18rem' }}>
                        <a href="https://gitlab.com/yunatatski/holy-tester-backup">
                            <Card.Img variant="top" src={HolyTesters} />
                        </a>
                            <Card.Body>
                                <Card.Title>Holy Testers</Card.Title>
                                <Card.Text>
                                    A procedurally-generated roguelike dungeon crawler based around the Holy Grail!
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>#Unity3D</ListGroupItem>
                                <ListGroupItem>#GameDev</ListGroupItem>
                                <ListGroupItem>#Coursework</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://gitlab.com/yunatatski/holy-tester-backup">GitLab</Card.Link>
                                <Card.Link href="https://youtu.be/Q0JVphhA64c">Trailer</Card.Link>
                            </Card.Body>
                        </Card>

                    </CardDeck>
                </div>

                <div>
                    {/* <CardDeck>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
    
</CardDeck> */}
                </div>

            </div>

        )
    }
}