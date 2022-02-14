import axios from "axios"

const config = {
    timeout: 3000
}

export const useFetch = (url:string) => {
    return axios.get(url, config).then((response) => response.data)
}