import axios from "axios"

axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 10000
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8"
