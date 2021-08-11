import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function PokemonCards() {
    let { id } = useParams();
    let [data, setData] = useState([]);

    const fetchPokemonCards = () => {
        return fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`, {
            header: { "x-api-key": "f0119dfa-de11-4163-b043-af8e293a918e" },
        })
        .then((res)=> res.json())
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchPokemonCards().then((data) => setData(data.data));
    }, []);


    return (
        <div className="pokemonCards">
            {data && data.length && data.map((card) => (
                <Col sm={12} md ={4} lg={2} key={card.id}>
                    <Link to={`/card/${card.id}`}>
                    <img src={card.images.small} />
                    </Link>
                </Col>

            ))}
        </div>
    )    

}

export default PokemonCards;