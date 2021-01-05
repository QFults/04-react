import { useState } from 'react'

const App = () => {
  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  const handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  const handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    items.push(itemState.item)
    setItemState({ ...itemState, items, item: '' })
  }

  const handleDeleteItem = item => {
    let items = JSON.parse(JSON.stringify(itemState.items))
    items = items.filter(itm => itm !== item)
    setItemState({ ...itemState, items })
  }
  return (
    <>
      <h1>To-Do List App</h1>
      <form>
        <p>
          <label htmlFor="item">item</label>
          <input
            type="text"
            name="item"
            value={itemState.item}
            onChange={handleInputChange} />
        </p>
        <button onClick={handleAddItem}>Add Item</button>
      </form>
      <ul>
        {
          itemState.items.map((item, i) => (
            <li key={i}>
              {item}
              <button onClick={() => handleDeleteItem(item)}>X</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
