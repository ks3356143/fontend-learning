import { add, sub } from './utils/math'
console.log(add(20, 10));
console.log(sub(20, 10));

import axios from 'axios'
axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    console.log(res)
})

import _ from 'lodash'
let arr = ['123','abc']
console.log(_.join(arr));
