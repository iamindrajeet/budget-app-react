import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
  isOpen,
  handleModalClosure,
  description,
  value,
  isExpense,
  onDescriptionChange,
  onValueChange,
  handleToggle,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            description={description}
            value={value}
            isExpense={isExpense}
            onDescriptionChange={onDescriptionChange}
            onValueChange={onValueChange}
            handleToggle={handleToggle}
          />
        </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleModalClosure}>Close</Button>
          <Button onClick={handleModalClosure} positive>Ok</Button>
        </Modal.Actions>
      
    </Modal>
  );
};

export default ModalEdit;
