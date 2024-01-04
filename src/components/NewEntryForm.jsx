import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

const NewEntryForm = () => {
  const {
    description,
    onDescriptionChange,
    value,
    onValueChange,
    isExpense,
    handleToggle,
    addEntry,
  } = useEntryDetails();

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
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
};

export default NewEntryForm;
