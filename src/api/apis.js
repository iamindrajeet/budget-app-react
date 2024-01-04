import axios from "axios";

const URL = "http://localhost:3002";

export async function getEntries() {
  const response = await axios.get(URL + "/entries");
  const data = response?.data;
  return response;
}

export async function getValues(id) {
  const response = await axios.get(URL + `/values/${id}`);
  const { data } = response;
  return data;
}
