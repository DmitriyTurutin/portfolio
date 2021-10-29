import React from 'react';
import Me from '../../image/me.png'
import './AboutMe.css'
import AnimatedSkills from "../AnimatedSkills/AnimatedSkills";

const AboutMe: React.FC = () => {
    return (
        <div className={"row about-me"}>
            <div className="col-xl left-part align-self-center">
                <div className="row names align-self-center">
                    <h1 className={"row name op-100"}>TURUTIN DMITRIY</h1>
                    <h1 className={"row name op-50"}>TURUTIN DMITRIY</h1>
                    <h1 className={"row name op-25"}>TURUTIN DMITRIY</h1>
                    <h1 className={"row name op-5"}>TURUTIN DMITRIY</h1>
                    <h1 className={"row name op-1"}>TURUTIN DMITRIY</h1>
                </div>
                <div className="row image position-absolute">
                    <img className={"me"} src={Me} alt="TURUTIN DMITRIY"/>
                </div>
            </div>
            <div className="col-xl  right-part">
                <div className="skills-row row">
                    <div className="skills-col col-xl-2 offset-2">
                        <h1 className={"align-self-center skills-h1"}>skills:</h1>
                    </div>
                </div>
                <AnimatedSkills/>
            </div>

        </div>
    );
};

export default AboutMe;