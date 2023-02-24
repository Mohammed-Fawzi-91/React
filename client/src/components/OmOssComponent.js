import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../index.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cards = [
    {
        image: "https://steamuserimages-a.akamaihd.net/ugc/931590576199931035/DF623A30179155B506BEE1743F03B75482B44337/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        title: "Pedram Nourian",
        text: "Back-End dev"
    },
    {
        image: "https://i.imgur.com/cLrSmOc.gif",
        title: "Mohammed Fawzi",
        text: "Back-End dev"
    },
    {
        image: "https://64.media.tumblr.com/tumblr_lya3k9hi701r1ukgao1_400.gif",
        title: "Carl Chr. Roll-Lund",
        text: "Front-End dev"
    },
    {
        image: "https://i.redd.it/ah8mmdl1i3c41.gif",
        title: "Agostino Montanaro",
        text: "Front-End dev"
    }
]

function OmOss() {
    return (
        <React.Fragment>
              <h1>Om Oss</h1><hr/>   
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Row xs={1} md={2} className="g-4">
                {cards.map(card => (
                    <Col>
                        <Card className="omosscard">
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>
        </React.Fragment>
    )
}

export default OmOss;

