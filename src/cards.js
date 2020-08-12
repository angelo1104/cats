//eslint-disable-next-line
import React,{Component} from "react";
import "./cards.css";
import "tachyons";

const Card = (props)=>{
        return (
       <div className="card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
            <img src={`https://robohash.org/${props.id}?set=set4&&size=200x200`} alt="hello"/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
       </div>
        );
    };

export default Card;