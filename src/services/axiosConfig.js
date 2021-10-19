import axios from "axios";

const baseURL = 'http://localhost:3000/db.json';

export const instance = axios.create({ baseURL });