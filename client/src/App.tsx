import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const categories = ["מוצרי ניקיון", "גבינות", "ירקות ופירות", "בשר ודגים", "מאפים"]

function App() {
  return (
    <div className="App">
      <h1>רשימת קניות</h1>
      <AddItem />
      <h3>יש לאסוף מוצרים אלו במחלקות המתאימות</h3>
      {categories.map((category, index)=><ItemList category={category}/>)}
    </div>
  );
}

export default App;
