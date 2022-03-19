import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Allproducts from './components/Allproducts/Allproducts';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const setCartCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Allproducts setCartCount={setCartCount}></Allproducts>
    </div>
  );
}

export default App;
