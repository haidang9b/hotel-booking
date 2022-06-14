import React from "react";
import './Hero.css';
import styled from "styled-components";
import defaultImg from "../../images/defaultImg.jpg";

export const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image});
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`


const Hero = ({ children, state }) => {
    return (
        <HeroImage image={state.image}>
            <div className="hero-text">
                <h1>{ state.title }</h1>
                <p>{ state.subtitle }</p>
                { children }
            </div>
        </HeroImage>

    )
}

Hero.defaultProps = {
    state: {
        title: "Welcome to the Hotel",
        subtitle: "We hope you enjoy your stay",
        image: defaultImg,
    }
}



export default Hero;