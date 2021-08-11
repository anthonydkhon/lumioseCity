import React, { useState, useEffect } from 'react';
import { Redirect, useLocation, useParams, Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './singleCard.css'

function SingleCard() {
    let { id } = useParams();
    let [card, setCard] = useState({});

    const fetchSingleCard = () => {
        return fetch(`https://api.pokemontcg.io/v2/cards/${id}`, {
            header: { "x-api-key": "f0119dfa-de11-4163-b043-af8e293a918e" },
        })
        .then((res)=> res.json())
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchSingleCard().then((res) => {console.log(res); setCard(res.data)});
    }, []);


    return (
        <body className="singlecard">
            <div id="card-details" className="columns" data-controller="card">
                <div className="column-img">
                    <img className="card-image" src={card.images?.small} />
                </div>
            <div>
                <nav>
                    <div>
                        <div>
                            <span>
                                {card.name}
                                    <div>
                                        <p>{card.supertype} - {card.subtypes?.join(", ")}</p>
                                    </div>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        <section>
            <div>
                <div>
                    Prices
                </div>
            <div>
                <div>
                    <a href={card.tcgplayer?.url}>Buy Now From TCGplayer</a>
                </div>
            <div>
                {card.tcgplayer?.updatedAt}
            </div>
            </div> 
            </div>   
        </section>   
        <section>
            <div>
                <div>
                    <div className="card-price">
                        <p>normal market</p>
                        <p>{card.tcgplayer?.prices?.normal?.market}</p>
                    </div>
                </div>    
            <div>
                <div>
                    <p>normal low</p>
                    <p>{card.tcgplayer?.prices?.normal?.low}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>normal mid</p>
                    <p>{card.tcgplayer?.prices?.normal?.mid}</p>
                </div>
            </div>
        <div>
            <div>
                <p>normal high</p>
                <p>{card.tcgplayer?.prices?.normal?.high}</p>
            </div>
        </div>
            </div>
        </section>
        <section>
            <div>
                <div>
                    <div>
                        <p>reverse holofoil market</p>
                        <p>{card.tcgplayer?.prices?.reverseHolofoil?.market}</p>
                    </div>
                </div>
            </div>    
            <div>
                <div>
                    <p>reverse holofoil low</p>
                    <p>{card.tcgplayer?.prices?.reverseHolofoil?.low}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>reverse holofoil mid</p>
                    <p>{card.tcgplayer?.prices?.reverseHolofoil?.mid}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>reverse holofoil high</p>
                    <p>{card.tcgplayer?.prices?.reverseHolofoil?.high}</p>
                </div>
            </div>
        </section>
    </div>
</body>
        
)
    }    


export default SingleCard;