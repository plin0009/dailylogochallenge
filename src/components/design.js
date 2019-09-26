import React from 'react';

const Design = ({ day, name, prompt, colors, image }) => (
    <figure className="image design">
        <img src={image} alt={name}/>
        <figcaption style={{backgroundColor: `#${colors[colors.length - 1]}cf`}}>
            <h1 className="title"  style={{color: `#${colors[0]}`}}>{name}</h1>
            <h2 className="subtitle"  style={{color: `#${colors[1]}`}}>{`Day ${day}: ${prompt}`}</h2>
            {/* todo: add color swatch */}
            <div className="colors">
                {colors.map((color, index) => (index + 1 !== colors.length) && <span className="color" style={{backgroundColor: `#${color}`}}/>)}
            </div>
        </figcaption>
    </figure>
);

export default Design;