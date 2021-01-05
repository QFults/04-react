import { useState } from 'react'
import { 
  Container,
  Row, 
  Col } from 'reactstrap'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'

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
      <Navbar />
      <Container>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Col xs={6}>
            <Form 
              item={itemState.item}
              handleInputChange={handleInputChange}
              handleAddItem={handleAddItem} />
          </Col>
          <Col xs={6}>
            <List 
              items={itemState.items}
              handleDeleteItem={handleDeleteItem} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
