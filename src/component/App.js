import { useState } from 'react';
import ProductList from './ProductList';
import mockupData from '../data.json';

function App(){
  //  start
const [order, setOrder] = useState('date');
const [items,setItems] = useState(mockupData);

// 함수
const sortItems = items.sort((a,b) => b[order] - a[order] )
const NewClick = () => setOrder('date')
const BestClick = () => setOrder('rating')

const DelectItem = (id) => {
const nextItem = items.filter( (item) => item.id !== id)
setItems(nextItem )
}

  return (
    <div>
      <div className="btn">
        <button onClick={NewClick}>최신순</button>
        <button onClick={BestClick}>베스트순</button>
      </div>
      <ProductList items={sortItems} onDelete={DelectItem} />
      </div>
  )
}

export default App;