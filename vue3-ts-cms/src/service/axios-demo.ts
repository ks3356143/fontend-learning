import axios from "axios"

axios
    .get("http://httpbin.org/get", {
        params: {
            name: "chen",
            age: 18
        }
    })
    .then((res) => {
        console.log(res.data)
    })

axios
    .post("http://httpbin.org/post", {
        params: {
            name: "coderwhy",
            age: 20
        }
    })
    .then((res) => {
        console.log(res.data)
    })
