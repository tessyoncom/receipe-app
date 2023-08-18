import React, { useState } from "react";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import "./landingPage.css";

const recipeArray = [
  {
    id: 1,
    food: "Jollof Rice",
    img: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42788e49474248dba75fdfd47114024a/BFV43575_PartyRiceAroundAfrica-FB-V2.jpg",
    recipes: [],
  },
  {
    id: 2,
    food: "Beans and Rice",
    img: "https://simple-veganista.com/wp-content/uploads/2019/09/red-beans-and-rice-recipe-vegan-instant-pot-6.jpg",
    recipes: [],
  },
  {
    id: 3,
    food: "Yam and egg",
    img: "https://agameals.com/wp-content/uploads/2022/04/maxresdefault-23-1140x694.jpg",
    recipes: [],
  },
  {
    id: 4,
    food: "Fufu",
    img: "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/90bc30fa846d4eef9c3f57c1ef5b77b0.jpeg?resize=1200:*&output-format=jpg&output-quality=auto",
    recipes: [],
  },
  {
    id: 5,
    food: "Amala",
    img: "https://www.propertypro.ng/blog/wp-content/uploads/2016/11/amala.jpg",
    recipes: [],
  },
  {
    id: 6,
    food: "Chicken and chips",
    img: "https://supertasty.com.ng/wp-content/uploads/2020/06/Grilled-chicken-n-chips.jpg",
    recipes: [],
  },
];

const LandingPage = () => {
  const [filteredResult, setFilteredResult] = useState([...recipeArray]);

  const onSearch = (value) => {
    if (value?.length < 1) {
      setFilteredResult(recipeArray);
    } else {
      const searchResult = recipeArray.filter((item) =>
        item.food.toLowerCase().includes(value.toLowerCase())
      );
      //   console.log(searchResult);
      setFilteredResult(searchResult);
    }
  };

  //   console.log("i".includes("rice"));

  return (
    <div className="landingPage">
      <SearchBar
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
      <div className="all-recipe">
        {filteredResult.map((item, i) => {
          return (
            <Cards
              key={i}
              image={item.img}
              name={item.food}
              recipe={item.recipes}
              item={item}
            />
          );
        })}
      </div>
      {/* <Cards/> */}
    </div>
  );
};
export default LandingPage;
