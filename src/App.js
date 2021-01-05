import { useState } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import ItemContext from './utils/ItemContext'

const App = () => {
  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    items.push(itemState.item)
    setItemState({ ...itemState, items, item: '' })
  }

  itemState.handleDeleteItem = item => {
    let items = JSON.parse(JSON.stringify(itemState.items))
    items = items.filter(itm => itm !== item)
    setItemState({ ...itemState, items })
  }
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <ItemContext.Provider value={itemState}>
            <Col xs={6}>
              <Form />
            </Col>
            <Col xs={6}>
              <List />
            </Col>
          </ItemContext.Provider>
        </Row>
      </Container>
    </>
  )
}

export default App
