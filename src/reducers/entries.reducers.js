import types from "../actions/entries.actions";

const entriesReducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case types.POPULATE_ENTRIES:
      return [...state, ...action.payload];

    case types.ADD_ENTRY:
      const newState = [...state];
      newState.push(action.payload);
      return newState;

    case types.DELETE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    case types.POPULATE_ENTRY_DETAILS:
    case types.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = {  ...newEntries[index], ...action.payload.entry };
      return newEntries;

    default:
      return state;
  }
};

export default entriesReducer;

var initialEntries = [];
