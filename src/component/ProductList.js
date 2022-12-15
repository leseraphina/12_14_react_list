import './ProductList.css';

function formDate(value){
  const date1 = new Date(value);
  return `${date1.getFullYear()} . ${date1.getMonth()+1} . ${date1.getDate()}`
}

function ListItem({item,onDelete}){
  const DelecteClick = () => onDelete(item.id)
  return (
    <figure className="small">
      <img src={item.image} alt={item.name} />
      <figcaption>
      <dl>
        <dt>{item.name}</dt>
        <dd>{item.rating}</dd>
        <dd>{item.price}</dd>
        <dd>{formDate(item.date)}</dd>
        <dd>{item.kind}</dd>
        <dd>{item.metal}</dd>
        <dd><button onClick={DelecteClick}>delecte</button></dd>
      </dl>
      </figcaption>
    </figure>
  )
}

function ProductList({items,onDelete}){
  return (
    <ul>
     {items.map((item) => {
      return <li key={item.id}>
        <ListItem item={item} onDelete={onDelete} />
      </li>
     })}
    </ul>
  )
}

export default ProductList;
