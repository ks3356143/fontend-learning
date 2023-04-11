interface IndexLanguage {
    [index: number]: string //是不是有点像泛型？
}

const frontLanguage = {
    0: 'HTML',
    1: 'CSS',
    2: "JavaScript",
    3: 'Vuejs'
}

type IndexLanguageYear = {
    [index:string]:number
}

const languogeYear = {
    "C": 1972,
    "Java":1995,
    "JavaScript":1996,
    "TypeScript":2014
}