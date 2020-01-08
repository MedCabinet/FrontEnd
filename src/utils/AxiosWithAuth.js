import axios from "axios";

export function getToken() {
    return localStorage.getItem("token");
}

export function api() {
    return axios.create({
        baseURL: "https://cors-anywhere.herokuapp.com/https://medcabi3.herokuapp.com/api/",
        headers: {
            Authorization: getToken()
        }
    });
}

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create ({
        baseURL: "https://cors-anywhere.herokuapp.com/https://medcabi3.herokuapp.com/api/",
        headers: {
            Authorization: token
        }
    })
}
