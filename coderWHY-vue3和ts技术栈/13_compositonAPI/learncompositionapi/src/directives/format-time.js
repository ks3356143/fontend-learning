import dayjs from 'dayjs'

export default function (app) {
    let formatString = "YYYY-MM-DD HH:mm:ss"
    app.directive("format-time", {
        created(el, { value, modifier }) {
            if (value) {
                console.log(value);
                formatString = value
            }
        },
        mounted(el, { value, modifier }) {
            console.log("format mounted")
            const textContent = el.textContent
            let timestamp = parseInt(textContent)
            if (textContent.length === 10) {
                timestamp = timestamp * 1000
            }
            if (!value) {
                formatString = "YYYY-MM-DD HH:mm:ss"
            }
            el.textContent = dayjs(timestamp).format(formatString)
        }
    })
}