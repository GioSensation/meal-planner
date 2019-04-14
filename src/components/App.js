import React, { Component } from 'react'
import '../styles/App.css'
import MealList from './MealList'
import AddMeal from './AddMeal';
import DayList from './DayList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MealList />
        <AddMeal />
        <DayList />
      </div>
    )
  }
}

export default App
