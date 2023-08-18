import React from "react";
import "./cards.css";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  // const {image} = props

  // console.log(props, "property of card")

  const navigate = useNavigate();

  const printFuction = () => {
    //    var divContents = document.getElementById("GFG").innerHTML;
    let a = window.open("", "", "height=500, width=500");
    a.document.write("<html>");
    a.document.write("<body > <h1>Recipes for this meal are; <br>");
    //    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  };

  return (
    <div className="cardContainer">
      <div className="innerCardContainer">
        <img src={props.image} className="foodImage" />
      </div>
      <div className="foodName">{props.name}</div>
      <div className="controlContainer">
        {/* {[...Array(3)].map(() =>(
                 <Buttons/>
               ))} */}
        <Buttons
          label={"View Details"}
          onClick={() => {
            navigate("/recipe-details", {
              state: { item: props.item },
            });
          }}
        />
        <Buttons
          label={"Print"}
          onClick={() => {
            printFuction();
          }}
        />
        <Buttons label={"Share"} onClick={() => {}} />
      </div>
    </div>
  );
};
export default Cards;
