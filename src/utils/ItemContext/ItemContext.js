import { createContext } from 'react'

const ItemContext = createContext({
  item: '',
  items: [],
  handleInputChange: () => { },
  handleAddItem: () => { },
  handleDeleteItem: () => { }
})

export default ItemContext
