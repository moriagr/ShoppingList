import { useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import AllProducts from './components/allProducts';
import { fetchCategories } from './api/service';
import { useAppDispatch } from './store/hooks';
import SaveShoppingListButton from './components/button/saveShoppingList';
import TotalItems from './components/totalItems';
import AlertView from './components/AlertView/AlertView';


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  return (
    <div className="App">
      <h1>רשימת קניות</h1>
      <TotalItems />
      <AddItem />
      <AllProducts />
      <SaveShoppingListButton />
      <AlertView />
    </div>
  );
}

export default App;
