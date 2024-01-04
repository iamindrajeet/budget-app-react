import { useEffect, useState } from "react";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.entries";

const useEntryDetails = (desc = "", val = "", isExp = true) => {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function onDescriptionChange({ target }) {
    setDescription(target.value);
  }

  function onValueChange({ target }) {
    setValue(target.value);
  }

  function handleToggle() {
    setIsExpense((isExpense) => !isExpense);
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetEntry();
  }

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetEntry();
  }

  return {
    description,
    onDescriptionChange,
    value,
    onValueChange,
    isExpense,
    handleToggle,
    addEntry,
    updateEntry,
  };
};

export default useEntryDetails;
