import {
  Button,
  Form as Frm,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const Form = props => {
  return (
    <Frm onSubmit={props.handleAddItem}>
      <FormGroup>
        <Label htmlFor="item">Item</Label>
        <Input 
          type="text" 
          name="item"
          value={props.item}
          onChange={props.handleInputChange} />
      </FormGroup>
      <Button color="primary" onClick={props.handleAddItem}>Add Item</Button>
    </Frm>
  )
}

export default Form
