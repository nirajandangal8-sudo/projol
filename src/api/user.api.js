import axios from "axios";
import { APIURL } from "../config";

export async function getAllUsers() {
  const response = await axios.get(`${APIURL}/users`);
  return response.data;
}

export async function getUserById(userId) {
  const response = await axios.get(`${APIURL}/users/${userId}`);
  return response.data;
}
