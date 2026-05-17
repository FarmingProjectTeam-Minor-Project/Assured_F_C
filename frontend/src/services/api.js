import axios from "axios"

const API = axios.create({
  baseURL: "https://assured-f-c.onrender.com"
})

export default API