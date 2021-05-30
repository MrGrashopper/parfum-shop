import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { CardContainer, CardImage, CardTitle, CardType, CardPrice, CardRating } from './styled-card';

function ParfumCard({id, name, slug, brand, type, image, price, size, rating}) { 
    // transforming 100% to 5 stars range. Not much difference on view between each because rating of every parfum is high :-)
    const ratingFitted = (rating / 100) * 5

    // because type is vidible in card too reject the type of its name 
    if (name.includes('Eau de Parfum')) {
        name = name.replace('Eau de Parfum', '');
    } else if (name.includes('Eau de Toilette')) {
        name = name.replace('Eau de Toilette', '');
    }

    return (
        <div>
            <CardContainer id={id}>
                <CardImage><img src={ image } alt=""/></CardImage>
                <CardTitle data-testid="testName">{ name }</CardTitle>
                <CardType>{ type }</CardType>
                <CardPrice>
                    <span>{ (price / 100).toFixed(2) }€ / </span>
                    <span>{ size }</span>
                </CardPrice>
                <CardRating>
                    <Rating 
                        name="rating" 
                        defaultValue={ratingFitted}
                        readOnly 
                        precision={0.1} 
                        max={5}/>
                </CardRating>
            </CardContainer>
        </div>
    )
}

export default ParfumCard
