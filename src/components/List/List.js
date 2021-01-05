import { useContext } from 'react'
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import ItemContext from '../../utils/ItemContext'

const List = () => {

  const {
    items,
    handleDeleteItem
  } = useContext(ItemContext)

  return (
    <ListGroup>
      {
        items.map((item, i) => (
          <ListGroupItem key={i}>
            {item}
            <Button color="danger" onClick={() => handleDeleteItem(item)}>X</Button>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default List
