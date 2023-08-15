import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './route/layout';
import LandingPage from './route/landingPage';
import AddRecipe from './route/addRecipe';
import RecipeDetails from './route/recipeDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage/>}/>
        <Route path='/add-recipe'  element={<AddRecipe/>}/>
        <Route path='/recipe-details'  element={<RecipeDetails/>}/>
        
      </Route>
    </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
