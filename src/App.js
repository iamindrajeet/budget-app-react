import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [entryId, setEntryId] = useState();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(false);
  const [expenseTotal, setExpenseTotal] = useState(false);
  const [total, setTotal] = useState(false);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));
    });
    setTotal(totalIncome - totalExpenses);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpenses)
  }, [entries]);

  function onDescriptionChange({ target }) {
    setDescription(target.value);
  }

  function onValueChange({ target }) {
    setValue(target.value);
  }

  function handleToggle() {
    setIsExpense((isExpense) => !isExpense);
  }

  function handleModalClosure() {
    setIsOpen((isOpen) => !isOpen);
  }

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`Edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = {
      id: entries.length + 1,
      description,
      value,
      isExpense,
    };
    console.log("result", result);
    setEntries([...entries, result]);
    console.log("entries", entries);
    resetEntry();
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance
        title="Your Balance:"
        value={total}
        color="black"
        size="small"
      />
      <DisplayBalances totalIncome={incomeTotal} totalExpenses={expenseTotal}/>
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        onDescriptionChange={onDescriptionChange}
        onValueChange={onValueChange}
        handleToggle={handleToggle}
      />
      <ModalEdit
        isOpen={isOpen}
        handleModalClosure={handleModalClosure}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        onDescriptionChange={onDescriptionChange}
        onValueChange={onValueChange}
        handleToggle={handleToggle}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50,
    isExpense: true,
  },
];
