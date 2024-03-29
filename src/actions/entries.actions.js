const types = {
  POPULATE_ENTRIES: "POPULATE_ENTRIES",
  POPULATE_ENTRY_DETAILS: "POPULATE_ENTRY_DETAILS",
  GET_ENTRIES: "GET_ENTRIES",
  ADD_ENTRY: "ADD_ENTRY",
  DELETE_ENTRY: "DELETE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
};

export default types;

export const addEntryRedux = (payload) => {
  return {
    type: types.ADD_ENTRY,
    payload,
  };
};

export const removeEntryRedux = (id) => {
  return {
    type: types.DELETE_ENTRY,
    payload: { id },
  };
};

export const updateEntryRedux = (id, entry) => {
  return {
    type: types.UPDATE_ENTRY,
    payload: { id, entry },
  };
};

export const getAllEntries = () => {
  return {
    type: types.GET_ENTRIES,
  };
};

export const populateEntries = (entries) => {
  return {
    type: types.POPULATE_ENTRIES,
    payload: entries,
  };
};

export const populateEntryDetails = (id, entry) => {
  return {
    type: types.POPULATE_ENTRY_DETAILS,
    payload: { id, entry },
  };
};
