import axios from "axios";
import { toast } from "react-toastify";
const queryString = require('query-string');

export function loginApi(data) {
    return new Promise((resolve, reject) =>
        axios
            .post(`https://fakestoreapi.com/auth/login`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                console.log(error, 'error');
                reject(error)
                alert(error?.response?.data)
                toast.error(error?.response?.data)
            })
    )
}