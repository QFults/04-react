import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'

const List = props => {
  return (
    <ListGroup>
      {
        props.items.map((item, i) => (
          <ListGroupItem key={i}>
            {item}
            <Button color="danger" onClick={() => props.handleDeleteItem(item)}>X</Button>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default List
