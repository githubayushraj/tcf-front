import React from "react";
import frontpic2 from './image/frontpic2.jpg';
import "./Frontpiccss.css";


const Homepage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${frontpic2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the height to the viewport height
    };

    return (
        <section id="header">
            <div className="container-fluid nav_bg" style={backgroundImageStyle}>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h1>
                            Experience the Fusion of Technology and Culture
                        </h1>
                        <h3>
                            Join us for an unforgettable celebration of innovation and creativity.
                        </h3>
                        <a href="" className="btn-lrn-more">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Homepage;
