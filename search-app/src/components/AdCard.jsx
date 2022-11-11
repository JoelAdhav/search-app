import React from 'react';
import './AdCard.css';

const AdCard = ({ title, headline, image, primaryText, description, url }) => {
    const handleLink = () => {
        window.open(url);
    };

    return (
        <div className='cardWrapper' onClick={handleLink}>
            <h2 className='title'>{title}</h2>
            <h3>{headline}</h3>
            <img src={image} alt={title} />
            <h4>{primaryText}</h4>
            <p>{description}</p>
        </div>
    );
};

export default AdCard;
