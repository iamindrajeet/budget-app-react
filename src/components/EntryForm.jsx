import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

const EntryForm = ({description, value, isExpense, onDescriptionChange, onValueChange, handleToggle}) => {
  return (
    <>
       <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shiny thing"
          onChange={onDescriptionChange}
          value={description}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          onChange={onValueChange}
          value={value}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox toggle label="is expense" checked={isExpense} 
        onChange={handleToggle}/>
      </Segment>
    </>
  )
}

export default EntryForm