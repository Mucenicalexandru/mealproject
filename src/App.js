import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wine from "./layout/Wine";
import Random from "./layout/Random";
import Meals from "./layout/Meals";
import MealDetails from "./layout/MealDetails";
import WineDetails from "./layout/WineDetails";
import Recipe from "./layout/Recipe";
import Videos from "./layout/Videos";
import "./App.css"



function App() {

  return (

    <div className="App">
        <Navbar/>

        <Router>
            <Route exact path={'/'} component={Meals}/>
            <Route path={'/random'} component={Random}/>
            <Route exact path={'/wine'} component={Wine}/>
            <Route exact path={'/meal/:id'} component={MealDetails}/>
            <Route path={'/wine/:name'} component={WineDetails}/>
            <Route exact path={'/meal/:id/recipe'} component = {Recipe}/>
            <Route path={'/videos'} component={Videos}/>
        </Router>

    </div>

  );
}

export default App;
