import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  addEntry,
  description,
  value,
  isExpense,
  onDescriptionChange,
  onValueChange,
  handleToggle,
}) => {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        onDescriptionChange={onDescriptionChange}
        onValueChange={onValueChange}
        handleToggle={handleToggle}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  );
};

export default NewEntryForm;
