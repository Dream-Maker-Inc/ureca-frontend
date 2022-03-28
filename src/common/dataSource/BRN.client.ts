import axios from "axios";

export const brnClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BRN_BASE_URL,
});
