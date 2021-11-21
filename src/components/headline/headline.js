import React from "react";
import "./headline.css";
import Cake from "./cake.svg";

const Headline = () => (
    <div>
        <h1 className = "title">Birthday App
            <img 
                src = {Cake}
                //style = {{width: 50, height: 50}} 
                alt = "Cake logo" />
        </h1>
        <h6 className = "subtitle">by Horetskyi Ltd.</h6>
    </div>
);

export default Headline;