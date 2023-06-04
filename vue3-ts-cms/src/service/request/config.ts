let BASE_URL = ""
const TIME_OUT = 10000

if (process.env.NODE_ENV === "development") {
    BASE_URL = "/api"
} else if (process.env.NODE_ENV === "production") {
    BASE_URL = "http://110.191.215.131:8000/api"
} else {
    BASE_URL = "http://110.191.215.131:8000/api"
}

export { BASE_URL, TIME_OUT }
