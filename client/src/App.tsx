import { useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import AllProducts from './components/allProducts';
import { fetchCategories } from './api/service';
import { useAppDispatch } from './store/hooks';


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  return (
    <div className="App">
      <h1>רשימת קניות</h1>
      <AddItem />
      <AllProducts />
    </div>
  );
}

export default App;
