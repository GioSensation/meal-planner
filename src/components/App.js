import React, { Component } from 'react'
import '../styles/App.css'
import MealList from './MealList'
import AddMeal from './AddMeal';
import DayList from './DayList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1 className="main-title">Meal planner</h1></header>
        <MealList />
        <AddMeal />
        <DayList />
      </div>
    )
  }
}

export default App
