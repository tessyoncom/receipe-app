import React from "react";
import "./buttons.css"
const Buttons = (props) =>{
    return (
    <div className="button" onClick={() => {props.onClick()}}>
        {props.label}
    </div>
    );
};

export default Buttons;