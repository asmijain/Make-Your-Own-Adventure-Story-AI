import axios from "axios"
import { API_BASE_URL } from "../util.js"

export const registerUser = (email, password) =>
  axios.post(`${API_BASE_URL}/auth/register`, { email, password })

export const loginUser = (email, password) =>
  axios.post(`${API_BASE_URL}/auth/login`, { email, password })

export const getCurrentUser = (token) =>
  axios.get(`${API_BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
