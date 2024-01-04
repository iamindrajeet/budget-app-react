import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.entries";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({
  isOpen,
  description,
  value,
  isExpense,
  id
}) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            description={entryUpdate.description}
            value={entryUpdate.value}
            isExpense={entryUpdate.isExpense}
            onDescriptionChange={entryUpdate.onDescriptionChange}
            onValueChange={entryUpdate.onValueChange}
            handleToggle={entryUpdate.handleToggle}
          />
        </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
          <Button onClick={() => entryUpdate.updateEntry(id)} positive>Ok</Button>
        </Modal.Actions>
      
    </Modal>
  );
};

export default ModalEdit;
