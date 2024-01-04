import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getEntries } from "./api/apis";
import { getAllByAltText } from "@testing-library/react";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(false);
  const [expenseTotal, setExpenseTotal] = useState(false);
  const [total, setTotal] = useState(false);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector(state => state.modals);
  const entries = useSelector(state => state.entries);

  const dispatch = useDispatch();

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
    // eslint-disable-next-line
  }, [isOpen, id, entries]);

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
    setExpenseTotal(totalExpenses);
  }, [entries]);

  useEffect(() => {
  dispatch(getAllEntries())
  }, [dispatch])


  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance
        title="Your Balance:"
        value={total}
        color="black"
        size="small"
      />
      <DisplayBalances totalIncome={incomeTotal} totalExpenses={expenseTotal} />
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
      />
      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />
    </Container>
  );
}

export default App;
