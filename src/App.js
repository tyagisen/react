import './App.css';
import ProductTable from './components/ProductTable';
import Search from './components/Search';
import React, { useState, useEffect } from 'react';


const groceryList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

//const searchTask = () => {
//if (searchInput.length > 0) {
//grocery.filter((gro) => {
//return gro.name.match(searchInput)
//})
// }
//}

function App() {
  const [grocery, setGrocery] = useState(groceryList)
  const [search, setSearch] = useState('')
  const onSearch = (val) => {
    setSearch(val)
  }
  const filterGrocery = () => {
    const tempGrocery = grocery.filter(g => g.name.startsWith(search))
    setGrocery(tempGrocery)
  }

  useEffect(() => {
    filterGrocery()
  }, [search])

  return (
    <div className='main-content'>
      <Search onSearch={onSearch} search={search} />
      <ProductTable grocery={grocery} />
    </div>
  );
}

export default App;
