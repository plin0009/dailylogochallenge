import React from "react";
import SEO from "../components/seo";
import Design from '../components/design';

import "../styles/styles.scss";
import designs from "../data/designs";
import defaultLogo from '../assets/images/defaultLogo.svg';

const IndexPage = () => {
    const reqSvgs = require.context('../assets/images/logos', true, /\.svg$/);
    const paths = reqSvgs.keys();
    const images = paths.map(path => reqSvgs(path));
    
    return (
        <main>
        <SEO title="Daily Logo Challenge" />
        <section className="hero">
            <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-1">Daily Logo Challenge</h1>
            </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
            <div className="columns is-centered is-multiline">
                {designs.map((design, index) => (
                    <div className="column is-4-tablet is-3-desktop has-text-centered">
                        <Design key={index}
                            day={index + 1}
                            name={design.name || 'Untitled'}
                            prompt={design.prompt || '?'}
                            colors={design.colors || ['f9e0ae', 'fb977c', '7c2c15', '4a2200']}
                            image={images[index] || defaultLogo}/>
                    </div>
                ))}
            </div>
            </div>
        </section>
        </main>
    );
};

export default IndexPage;
