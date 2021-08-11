import React, { useState, useEffect } from 'react';
import {
    Card, 
    Col, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button, 
    Container,
    Row
  } from 'reactstrap';
  import '../App.css';
  import { Link, useRouteMatch } from 'react-router-dom';

function TcgSets() {
    let { url } = useRouteMatch();
    let [data, setData] = useState([]);

    const fetchTcgSet = () => {
        return fetch("https://api.pokemontcg.io/v2/sets/", {
            header: { "x-api-key": "f0119dfa-de11-4163-b043-af8e293a918e" },
        })
        .then((res)=> res.json())
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchTcgSet().then((data) => setData(data.data));
    }, []);

    const getDataReversed = () => {
        const reverse = [...data].reverse()
        return reverse
    }




    return (
        <body>
        <div>
            <h1>Pokemon TCG Sets</h1>
        </div>
        <div className="tcgsets">
            {getDataReversed().map((data) => (
                // <Container>
                //     <Row className="row-10">
            <Col className="col-3 cardcol" key={data.id}>
                <Link to = {`${url}/${data.id}`}>
            <Card>
            <CardImg src={data.images.logo} alt={data.name} />
            <CardBody>
              <CardTitle><img className="symbol" src={data.images.symbol} />{data.name}</CardTitle>
              <CardSubtitle>Released {data.releaseDate}</CardSubtitle>
              <CardText>
                <ul>
                    <li>
                        Unlimited: {data.legalities.unlimited}
                    </li>
                    <li>
                        Standard: {data.legalities.standard}
                    </li>
                    <li>
                        Expanded: {data.legalities.expanded}
                    </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
          </Link>
        </Col>
        // </Row>
        // </Container>
        ))}
    </div>
    </body>
    )
}

export default TcgSets;