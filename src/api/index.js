import axios from "axios";

export const API = {
  putValue: (value) => axios.put('/value2.json', JSON.stringify(value))
}